

const choices = ["Rock", "Paper", "Scissors"];



var humanScore = 0;
var computerScore = 0;



function getComputerChoice(choices) {
 let result = Math.floor(Math.random() * 3);
 return choices[result];
}



function getHumanChoice() {
  let playerChoice = window.prompt("Choose one and enter below! \nRock, Paper, Scissors", "");
  
  if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
    return playerChoice;
  } else {
    alert("Invalid input. Please try again.");
  }
}



function playRound(humanChoice, computerChoice) { 
  
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    console.log("You lose! Paper covers Rock!", ++computerScore);
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    console.log("You win! Paper covers Rock!", ++humanScore);
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    console.log("You lose! Rock beats Scissors!", ++computerScore);
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You win! Rock beats Scissors!", ++humanScore);
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    console.log("You lose! Scissors cuts Paper!", ++computerScore);
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You win! Scissors cuts paper!", ++humanScore);
  } else {
    console.log("It's a draw!");
  } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(choices);

console.log(playRound(humanSelection, computerSelection));