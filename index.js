//get player selection
function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase()
    return choice
}

// select rock paper or scissors randomly
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * choices.length + 1)
    return choices[random - 1]
}

// plays a round of rock paper scissors
// make players selection case insensitive. They can input any variation of those words.
// returns a string that declares the winner
function getRoundWinner(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    console.log(computerSelection, playerSelection)
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
function game() {
    let playerScore = 0;
    let computerScore = 0;
}
