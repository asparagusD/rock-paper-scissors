function getComputerChoice(computerGuess) {
    computerGuess = Math.floor(Math.random() * 100);
    if (computerGuess <= 33) {
        return "rock";
    } else if (computerGuess > 33 && computerGuess <= 66) {
        return "paper";
    } else {
        return "scissors";
    }   
}

function getHumanChoice(humanGuess) {
    humanGuess = prompt("Rock, Paper or Scissors? ","");
    humanGuess = humanGuess.toLowerCase();
    return humanGuess;
}

function playRound(humanChoice,computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!!");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!!");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper!!");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat Paper!!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors!!");
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Oops! It's a draw!!");
    }
}

let humanScore = 0;
let computerScore = 0;

playRound();