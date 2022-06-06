// Gameboard Module
const GameBoard = (() => {
    board = ['','','','','','','','',''];

    let boardSquares = document.querySelector('.gameboard');

    board.forEach((marker) => {
        const square = document.createElement('div');
        square.className = 'square';
        square.innerHTML = marker;
        boardSquares.appendChild(square);

        square.addEventListener('click', () => {
            square.innerHTML = game.activePlayer.symbol;
            game.changePlayer();
        })
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
    
    function changePlayer() {
        this.activePlayer === playerOne ? this.activePlayer = playerTwo : this.activePlayer = playerOne;
    }

    return {
        activePlayer,
        changePlayer}
})();