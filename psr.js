function getComputerChoice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 3;

const randomNumber = getComputerChoice(min, max);

const numberToString = {
  1: "Paper",
  2: "Scissors",
  3: "Rock"
};

const stringValue = numberToString[randomNumber];

console.log(`${stringValue}`);