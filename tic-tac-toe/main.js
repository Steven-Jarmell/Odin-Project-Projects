// Gameboard Module
const GameBoard = (() => {
    board = ['','','','','','','','',''];

    let boardSquares = document.querySelector('.gameboard');
    board.forEach((marker, index) => {
        const square = document.createElement('div');
        square.className = 'square';
        boardSquares.appendChild(square);
        square.addEventListener('click', () => {
            if(game.gameEnded) return;
            square.innerHTML = game.activePlayer.symbol;
            board[index] = game.activePlayer.symbol;
            square.style.pointerEvents = 'none';

            let winner = game.checkWin();
            game.decreaseRoundsRemaining();
            
            // Win
            if (winner) {
                let footer = document.querySelector('.footer');
                footer.innerHTML = `${game.activePlayer.name} wins!`;
            }
            // If not a win, check for a tie
            else if (game.getRoundsRemaining() === 0) {
                let footer = document.querySelector('.footer');
                footer.innerHTML = 'Tie';
            }
            
            game.changePlayer();

            let playerName = document.querySelector('.player-name');
            playerName.innerHTML = game.activePlayer.name;
        
        });

    });

    return {board};
})();

// Player factory function
const Player = (name, symbol) => {
    return {name, symbol};
}

const game = (() => {
    const playerOne = Player('Player 1', 'X');
    const playerTwo = Player('Player 2', 'O');

    let activePlayer = playerOne;
    let roundsRemaining = 9;
    let gameEnded = false;
    
    function changePlayer() {
        this.activePlayer === playerOne ? this.activePlayer = playerTwo : this.activePlayer = playerOne;
    }

    function decreaseRoundsRemaining() {
        roundsRemaining -= 1;
        if (roundsRemaining === 0) {
            this.gameEnded = true;
        }
    }

    function getRoundsRemaining() {
        return roundsRemaining;
    }

    // Shoutout stackoverflow for the naiive method
    const winningPositions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    function checkWin() {
        if (roundsRemaining >= 6) {
            return false;
        }
        else {
            for (let i = 0; i < winningPositions.length; i++) {
                let curRow = winningPositions[i];
                if (GameBoard.board[curRow[0]] === this.activePlayer.symbol && GameBoard.board[curRow[1]] === this.activePlayer.symbol && GameBoard.board[curRow[2]] === this.activePlayer.symbol) {
                    this.gameEnded = true;
                    return true;
                }
            }
            return false;
        }
    }

    return {
        activePlayer,
        changePlayer,
        checkWin,
        decreaseRoundsRemaining,
        getRoundsRemaining,
        gameEnded
    };
})();