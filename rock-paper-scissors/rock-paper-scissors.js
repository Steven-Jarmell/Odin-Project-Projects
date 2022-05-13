let LOSE = 0;
let WIN = 1;
let TIE = 2;

let computerPlay = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return 'Rock';
    else if (randomNumber ===1) return 'Paper';
    else return 'Scissors';
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return TIE;
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return LOSE;
        }
        else {
            return WIN;
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return LOSE;
        }
        else {
            return WIN;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return LOSE;
        }
        else {
            return WIN;
        }
    }
}

const buttons = document.querySelectorAll('button');
let computerScore = document.getElementById('computer-score');
let humanScore = document.getElementById('human-score');
// If the user clicks a button, play a round and update the score
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let round = playRound(button.id, computerPlay());
        
        // Case 1: User loses to computer
        if (!round) {
            increaseScore(computerScore);
        }
        // Case 2: User beats computer
        else if (round === WIN) {
            increaseScore(humanScore);
        }
    });
});

function increaseScore(element) {
    let val = element.innerHTML;
    val++;
    element.innerHTML = val;

    // Ends game if one player reaches 5
    if (element.innerHTML == 5) {
        buttons.forEach((button) => {
            button.disabled = true;
        });

        if (element === computerScore) {
            alert("You lose!");
        }
        else {
            alert("You win!");
        }
    }
}
    
