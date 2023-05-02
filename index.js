let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");

let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
playerScore.innerText = 0;
computerScore.innerText = 0;

let score = document.createElement("div");
let isGameOver = false;

let results = document.createElement("div");
results.classList.add("result");
body.appendChild(results);


/* 
while the game hasn't reached the score of 5 continue loop
if the game is over exit/break from the loop
*/

//player choice
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerChoice = e.target.innerText;
        results.innerText = playRound(playerChoice, getComputerChoice());
        if (results.innerText.includes('Win')) { playerScore.innerText++ }
        if (results.innerText.includes('Lose')) { computerScore.innerText++ }
    })
})

// select rock paper or scissors randomly for computer
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length + 1)
    return choices[random - 1]
}

// plays a round of rock paper scissors
// returns a string that declares the winner
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "Tie!"
    } else if (computerSelection === 'Rock' && playerSelection === "Paper") {
        return "You Win! Paper beats Rock"
    } else if (computerSelection === 'Rock' && playerSelection === "Scissors") {
        return "You Lose! Rock beats Paper"
    } else if (computerSelection === 'Scissors' && playerSelection === "Paper") {
        return "You Lose! Scissors beats Paper"
    } else if (computerSelection === 'Scissors' && playerSelection === "Rock") {
        return "You Win! Scissors beats Rock"
    } else if (computerSelection === 'Paper' && playerSelection === "Rock") {
        return "You Lose! Paper beats Rock"
    } else if (computerSelection === 'Paper' && playerSelection === "Scissors") {
        return "You Win! Scissors beats Paper"
    }
}

//plays 5 rounds, keeps score, and reports the winner or loser at the end.
// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let message = playRound();
//         console.log(message)
//         if (message.includes('Win')) {
//             playerScore++;
//         } else if (message.includes('Lose')) {
//             computerScore++;
//         }
//     }
//     console.log(`Score is ${playerScore} to ${computerScore}`)
//     return playerScore > computerScore ? 'Player wins!' : playerScore < computerScore ? 'Computer wins!' : 'TIE!'
// }




/* 
Problems:
1. Score value should be capped at 5.
2. It needs to display the winner once someone has reach 5.

3. The naming conventions confuse me

4. Reduce playerScore.innerText to playerScore
*/