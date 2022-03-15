
let wins = 0;
let losses = 0;
let ties = 0;

//Array for computerplay
let selectArray = [ 
    "rock",
    "scissors",
    "paper"
]

// Make variable for computer's selection
let computerSelection 

//Randomly output a selection
// function computerPlay() { 
//     let computerSelection = selectArray[Math.floor(Math.random()*selectArray.length)];
//     return computerSelection;
// }




//Take the selections and find a winner
function playGame(a, b) { 
    if (a === "rock" && b === "paper") {
        alert("You Lose! Paper beats Rock.");
        return losses++;
    } else if (a === "rock" && b === "scissors") {
        alert("You Win! Rock beats Scissors.");
        return wins++;
    } else if (a === "rock" && b === "rock") {
        alert("Rock and Rock. It\'s a tie.");
        return ties++;
    } else if (a === "paper" && b === "paper") {
        alert("Paper and Paper. It\'s a tie.");
        return ties++;
    } else if (a === "paper" && b === "scissors") {
        alert("You Lose! Scissors beat paper.");
        return losses++;
    } else if (a === "paper" && b === "rock") {
        alert("You Win! Paper beats rock.");
        return wins++;
    } else if (a === "scissors" && b === "paper") {
        alert("You Win! Scissors beat paper");
        return wins++;
    } else if (a === "scissors" && b === "scissors") {
        alert("Scissors and scissors. It\'s a tie.");
        return ties++;
    } else if (a === "scissors" && b === "rock") {
        alert("You Lose! Rock beats scissors.");
        return losses++;
    }    
}


let playerSelection

// Get player selection through buttons
const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerSelection = "rock";
    playRound();
    updateScore();
});


const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playerSelection = "paper";
    playRound();
    updateScore();
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playerSelection = "scissors";
    playRound();
    updateScore();
});

function playRound() { 
    computerSelection = selectArray[Math.floor(Math.random()*selectArray.length)];
    playGame(playerSelection, computerSelection);
    return computerSelection;
}
            
//Request player's input
// let playerInput = prompt("Please select either rock, scissors, or paper", " ")  

//Changes player's input into lowercase
// const playerSelection = playerInput.toLowerCase() 




// function game() { 

    //Run playgame five times
    // for (let i = 0; i < 5; i++) { 

            
    //     }

    // }

// game()
const scoreContainer = document.querySelector('#score')

const playerChoice = document.createElement('div');
playerChoice.textContent = `Player: ${playerSelection}`;
scoreContainer.appendChild(playerChoice);

const computerChoice = document.createElement('div');
computerChoice.textContent = `Computer: ${computerSelection}`;
scoreContainer.appendChild(computerChoice);

const scoreContent = document.createElement('div');
scoreContent.classList.add('scoreContent')
scoreContent.textContent = `Wins = ${wins}, Losses = ${losses}, & Ties = ${ties}.`
scoreContainer.appendChild(scoreContent);

function updateScore() {
    playerChoice.textContent = `Player: ${playerSelection}`;
    computerChoice.textContent = `Computer: ${computerSelection}`;
    scoreContent.textContent = `Wins = ${wins}, Losses = ${losses}, & Ties = ${ties}.`
}
