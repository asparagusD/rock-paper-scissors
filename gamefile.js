//Generate random choices for the computer// 
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

//Prompt the user to enter a value//
function getHumanChoice(humanGuess) {
    humanGuess = prompt("Rock, Paper or Scissors? ","");
    humanGuess = humanGuess.toLowerCase();   //whatever value the user inputs, lowercase it//
    return humanGuess;
}

//The logic behind Rock-Paper-Scissors game for a single round//
function playRound(humanChoice,computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win the round! Rock beats Scissors!!");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose the round! Paper beats Rock!!");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose the round! Scissors beat Paper!!");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win the round! Paper beats Rock!!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win the round! Scissors beat Paper!!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose the round! Rock beats Scissors!!");
        computerScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Oops! It's a draw!!");
    }
}

//Play the game for five more rounds and show the results//
function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    
    if (humanScore > computerScore) {
        console.log(`You win the game! Your score is ${humanScore}/5`);
    } else if (humanScore < computerScore) {
        console.log(`You lose the game! Your score is ${humanScore}/5`);
    } else {
        console.log(`It's a draw by ${humanScore}-${computerScore}!`);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();