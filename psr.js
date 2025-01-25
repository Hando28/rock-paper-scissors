

const choices = ["rock", "paper", "scissors"];



function getComputerChoice(choices) {
 let result = Math.floor(Math.random() * 3);
 return {
  round1: choices[result],
  round2: choices[result]
 }
}



function getHumanChoice() {
  let playerChoice = prompt("Choose one and enter below! \nRock, Paper, Scissors").toLowerCase();
  
  if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    return {
      round1: playerChoice,
      round2: playerChoice
    }
  } else {
    alert("Invalid input. Please try again.");
  }
}



function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) { 
    
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper covers Rock!", computerScore+= 1);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper covers Rock!", humanScore+= 1);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors!", computerScore+= 1);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors!", humanScore+= 1);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors cuts Paper!", computerScore+= 1);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors cuts paper!", humanScore+= 1);
    } else {
      console.log("It's a draw!");
    } 
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice(choices);

  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  
}

playGame();