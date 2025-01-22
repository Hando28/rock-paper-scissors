const getHumanChoice = window.prompt("Choose one and enter your choice below! \nPaper, Scissors, Rock...","");

console.log(getHumanChoice);

const getComputerChoice = Math.floor(Math.random() * 3) + 1;

if (getComputerChoice === 1) {
  console.log("Rock");
} else if (getComputerChoice === 2) {
  console.log("Paper");
} else {
  console.log("Scissors");
}

var humanScore = 0;

var computerScore = 0;

