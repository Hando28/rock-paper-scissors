

const choices = ["rock", "paper", "scissors"];



function getComputerChoice(choices) {
 let result = Math.floor(Math.random() * 3);
 return choices[result];
}

let compChoices1 = getComputerChoice(choices);
let compChoices2 = getComputerChoice(choices);
let compChoices3 = getComputerChoice(choices);
let compChoices4 = getComputerChoice(choices);
let compChoices5 = getComputerChoice(choices);

function getHumanChoice() {
  let playerChoice = prompt("Choose one and enter below! \nRock, Paper, Scissors").toLowerCase();
  
  if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    return playerChoice;
  } else {
    alert("Invalid input. Please try again.");
  }
}

let playChoice1 = getHumanChoice();
let playChoice2 = getHumanChoice();
let playChoice3 = getHumanChoice();
let playChoice4 = getHumanChoice();
let playChoice5 = getHumanChoice();

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

  const humanSelection = playChoice1;
  const computerSelection = compChoices1;

  playRound(humanSelection, computerSelection);

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

  const humanSelection2 = playChoice2;
  const computerSelection2 = compChoices2;

  playRound(humanSelection2, computerSelection2);

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

  const humanSelection3 = playChoice3;
  const computerSelection3 = compChoices3;

  playRound(humanSelection3, computerSelection3);

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

  const humanSelection4 = playChoice4;
  const computerSelection4 = compChoices4;

  playRound(humanSelection4, computerSelection4);

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

  const humanSelection5 = playChoice5;
  const computerSelection5 = compChoices5;

  playRound(humanSelection5, computerSelection5);

  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (humanScore < computerScore) {
    console.log("Game over... You lose!");
  } else {
    console.log("Game over... It's a draw!");
  }

}

playGame();

