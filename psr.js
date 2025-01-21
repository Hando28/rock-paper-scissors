let getHumanChoice = window.prompt("Choose one and enter your choice below! \nPaper, Scissors, Rock...","");

const input = getHumanChoice;

const choiceValue = {
  "Paper": "Paper",
  "Scissors": "Scissors",
  "Rock": "Rock"
};

const playerChoice = choiceValue[input];

console.log(`Player 1: ${playerChoice}`);

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

console.log(`Computer: ${stringValue}`);

var humanScore = 0;

var computerScore = 0;