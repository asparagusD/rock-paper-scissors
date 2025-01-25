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
//The logic behind Rock-Paper-Scissors game for a single round//
function playRound(humanChoice,computerChoice) {
    
    computerChoice = getComputerChoice();
    const result = document.querySelector("#results");
    roundResult = document.createElement("h3");

    if (humanChoice === "rock" && computerChoice === "scissors") {        
        roundResult.textContent = "You win the round! Rock beats Scissors!!";
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        roundResult.textContent = "You lose the round! Paper beats Rock!!";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        roundResult.textContent = "You lose the round! Scissors beat Paper!!";
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        roundResult.textContent = "You win the round! Paper beats Rock!!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundResult.textContent = "You win the round! Scissors beat Paper!!";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        roundResult.textContent = "You lose the round! Rock beats Scissors!!";
        computerScore++;
    } else if (humanChoice === computerChoice) {
        roundResult.textContent = "Oops! It's a draw!!";
    }
    result.appendChild(roundResult);

    if (humanScore === 5 || computerScore === 5) {
        const finalResults = document.querySelector("#final-results");
        const finalScore = document.createElement("h1");
        if (humanScore > computerScore) {
            finalScore.textContent = `You win the game! The score is ${humanScore}-${computerScore}!`;
        } else if (humanScore < computerScore) {
            finalScore.textContent = `You lose the game! The score is ${humanScore}-${computerScore}!`;
        } 
        finalResults.appendChild(finalScore);
        document.body.innerHTML = document.body.innerHTML;     
    }
}

//Play the game for five more rounds and show the results//
function playGame() {
    const choice = document.querySelector("#choice");
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";

    choice.appendChild(rockBtn);
    choice.appendChild(paperBtn);
    choice.appendChild(scissorsBtn);

    rockBtn.addEventListener("click", () => {
        playRound("rock");
    });

    paperBtn.addEventListener("click", () => {
        playRound("paper");
    });

    scissorsBtn.addEventListener("click", () => {
        playRound("scissors");
    }); 
}

let humanScore = 0;
let computerScore = 0;

playGame();