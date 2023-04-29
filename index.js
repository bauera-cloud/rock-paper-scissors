let buttons = document.querySelectorAll("button");

//player choice
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let choice = e.target.innerText;
        console.log(choice)
        return choice
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
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
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




