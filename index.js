let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");
let player = document.querySelector(".player");

let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");

let score = document.createElement("div");
let isGameOver = false;

let results = document.createElement("div");
results.classList.add("result");
body.appendChild(results);

playerScore.innerText = 0;
computerScore.innerText = 0;
console.log(typeof parseInt(playerScore.innerText))
console.log(typeof playerScore.innerText)
console.log(typeof playerScore)


//player choice
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerChoice = e.target.innerText;
        results.innerText = playRound(playerChoice, getComputerChoice());
        if (parseInt(playerScore.innerText) >= 5) {
            buttons.forEach(button => button.disabled = true)
            results.innerText = "Player Wins";
        } else if (parseInt(computerScore.innerText) >= 5) {
            buttons.forEach(button => button.disabled = true)
            results.innerText = "Computer Wins";
        } else {
            if (results.innerText.includes('Win')) { playerScore.innerText++ }
            if (results.innerText.includes('Lose')) { computerScore.innerText++ }
        }
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



/*
Problems:
1. Display winner when a player reaches score cap of 5

What we know:
innerText is a string value
"0" + 1 evaluates to "01"
comparison operators > don't work on strings for the cap 5

I need to parseInt(innerText) during a condition
 I need it to be a number to use the comparison operators.
 changing innerText to an int will render on the page

I need to use button.disabled outside of the eventListener.
 referencing button outside of the eventListener references
 all buttons. Whereas inside, references that button


The value needs to checked before it changes.

I don't think I need a loop unless there was a way to wait
for an eventListener.











2. I'd rather playerScore.innerText be called playerScore
3. I would like to put this into a while loop using a
boolean value isGameOver
4. It needs to disable buttons once it arrives at 5
*/

/* Plan:


*/


//learned:
//always imagine an inner if statement for &&