const choices = ["Rock", "Paper", "Scissors"];

var humanScore = 0;
var computerScore = 0;

function getHumanChoice() {
  let playerChoice = window.prompt("Choose one and enter below! \nRock, Paper, Scissors", "");
  
  if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
    console.log(playerChoice);
  } else {
    alert("Invalid input. Please try again.");
  }
}

function getComputerChoice(choices) {
 let result = Math.floor(Math.random() * 3);
 return choices[result];
}

console.log(getComputerChoice(choices));


function playRound(humanChoice, computerChoice) { 
  
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    console.log("You lose! Paper covers Rock!");
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    console.log("You win! Paper covers Rock!");
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    console.log("You lose! Rock beats Scissors!");
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You win! Rock beats Scissors!");
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    console.log("You lose! Scissors cuts Paper!");
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You win! Scissors cuts paper!");
  } else {
    console.log("It's a draw!");
  } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(choices);

playRound(humanSelection, computerSelection);