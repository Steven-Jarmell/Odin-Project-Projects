let color = 'black';
let click = false;

function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

function colorSquare() {
    if (click) {
        if (color === 'rainbow') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Shoutout stackoverflow
        }
        else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(input) {
    color = input;
}

populateBoard(16);

function changeSize(input) {
    if (input > 100|| input <= 2) {
        console.log("Invalid input");
    }
    else {
        populateBoard(input);
        console.log("Valid input");
    }
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.can-draw').textContent = "Mode: Coloring";
        }
        else {
            document.querySelector('.can-draw').textContent = "Mode: Not Coloring";
        }
    }
})