import * as fs from "fs";

export const findTwoEntriesThatSum2020 = () => {
  let numbers = getNumbers();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let y = j + 1; y < numbers.length; y++) {
        if (numbers[i] + numbers[j] + numbers[y] === 2020) {
          let multi = numbers[i] * numbers[j] * numbers[y];
          console.log(multi);
        }
      }
    }
  }
};

const getNumbers = (): any[] => {
  let readMe = fs.readFileSync("src/day1/data.txt", "utf-8").split("\r\n");
  let getNumbers = readMe.map((num) => parseInt(num));
  return getNumbers;
};
