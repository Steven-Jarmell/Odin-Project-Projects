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
        return 'You tied!';
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You Lose! Paper beats rock';
        }
        else {
            return 'You Win! Rock beats Scissors';
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You Lose! Scissors beats paper';
        }
        else {
            return 'You Win! Paper beats rock';
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You Lose! Rock beats scissors';
        }
        else {
            return 'You Win! Scissors beats paper';
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Enter rock, paper, or scissors: ");
        console.log(playRound(userInput, computerPlay()));
    }
}

game();