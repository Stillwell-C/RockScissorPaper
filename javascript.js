let wins = 0;
let losses = 0;
let ties = 0;

//Array for computerplay
let selectArray = [ 
    "rock",
    "scissors",
    "paper"
]

//Randomly output a selection
function computerPlay() { 
    let selection = selectArray[Math.floor(Math.random()*selectArray.length)];
    return selection;
}

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
    } else {
        alert("Please try again. Make sure to enter Rock, Scissors, or Paper.");
    }
    
}

let playerInput

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerInput = "rock";
    return playerInput;
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playerInput = "paper";
    return playerInput;
})

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playerInput = "scissors";
    return playerInput;
})




// Make variable for computer's selection
const computerSelection = computerPlay(); 

let playerSelection = playerInput
            
//Request player's input
// let playerInput = prompt("Please select either rock, scissors, or paper", " ")  

//Changes player's input into lowercase
// const playerSelection = playerInput.toLowerCase() 

// playGame(playerSelection, computerSelection)


// function game() { 

    //Run playgame five times
    // for (let i = 0; i < 5; i++) { 

            
    //     }

    // }

// game()
const scoreContainer = document.querySelector('#score')
const scoreContent = document.createElement('div');
scoreContent.classList.add('scoreContent')
scoreContent.textContent = `Wins = ${wins}, Losses = ${losses}, & Ties = ${ties}.`;
scoreContainer.appendChild(scoreContent);