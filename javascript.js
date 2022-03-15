
let wins = 0;
let losses = 0;
let ties = 0;


let resultText;

//Take the selections and find a winner
function playGame(a, b) { 
    if (a === "rock" && b === "paper") {
        resultText = "You Lose! Paper beats Rock.";
        return losses++;
    } else if (a === "rock" && b === "scissors") {
        resultText = "You Win! Rock beats Scissors.";
        return wins++;
    } else if (a === "rock" && b === "rock") {
        resultText = "Rock and Rock. It\'s a tie.";
        return ties++;
    } else if (a === "paper" && b === "paper") {
        resultText = "Paper and Paper. It\'s a tie.";
        return ties++;
    } else if (a === "paper" && b === "scissors") {
        resultText = "You Lose! Scissors beat paper.";
        return losses++;
    } else if (a === "paper" && b === "rock") {
        resultText = "You Win! Paper beats rock.";
        return wins++;
    } else if (a === "scissors" && b === "paper") {
        resultText = "You Win! Scissors beat paper";
        return wins++;
    } else if (a === "scissors" && b === "scissors") {
        resultText = "Scissors and scissors. It\'s a tie.";
        return ties++;
    } else if (a === "scissors" && b === "rock") {
        resultText = "You Lose! Rock beats scissors.";
        return losses++;
    }    
}


let playerSelection

// Get player selection through buttons
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerSelection = "rock";
    playRound();
    scoreCheck();
    updateScore();
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playerSelection = "paper";
    playRound();
    scoreCheck();
    updateScore();
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playerSelection = "scissors";
    playRound();
    scoreCheck();
    updateScore();
});

function scoreCheck() {
    if (wins >= 5) {
        alert("You Win!");
        return wins = 0, losses = 0, ties = 0;
    } else if (losses >= 5) {
        alert("You Lose!");
        return wins = 0, losses = 0, ties = 0;
    } else {}
}

let computerSelection

function playRound() {
    let selectArray = [ "rock", "scissors", "paper"];
    computerSelection = selectArray[Math.floor(Math.random()*selectArray.length)];
    playGame(playerSelection, computerSelection);
}
            

const scoreContainer = document.querySelector('#score')

const playerChoice = document.createElement('div');
playerChoice.textContent = `Player: ${playerSelection}`;
scoreContainer.appendChild(playerChoice);

const computerChoice = document.createElement('div');
computerChoice.textContent = `Computer: ${computerSelection}`;
scoreContainer.appendChild(computerChoice);

const resultTextOutput = document.createElement('div');
resultTextOutput.textContent = `${resultText}`;
scoreContainer.appendChild(resultTextOutput);

const scoreContent = document.createElement('div');
scoreContent.classList.add('scoreContent')
scoreContent.textContent = `Wins = ${wins}, Losses = ${losses}, & Ties = ${ties}.`
scoreContainer.appendChild(scoreContent);

function updateScore() {
    playerChoice.textContent = `Player: ${playerSelection}`;
    computerChoice.textContent = `Computer: ${computerSelection}`;
    resultTextOutput.textContent = `${resultText}`;
    scoreContent.textContent = `Wins = ${wins}, Losses = ${losses}, & Ties = ${ties}.`
}
