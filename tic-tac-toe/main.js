// Gameboard Module
const GameBoard = (() => {
    board = ['X','O','X','O','X','O','X','O','X'];

    let boardSquares = document.querySelector('.gameboard');

    board.forEach((marker) => {
        const square = document.createElement('div');
        square.className = 'square';
        square.innerHTML = marker;
        boardSquares.appendChild(square);
    });

    function placeMarker(marker, index) {
        board[index] = marker;
    };

    return {board};
})();