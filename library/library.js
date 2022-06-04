let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary(book) {
    event.preventDefault();

    myLibrary.push(book);
    console.log(book.title);
    render();

    form.reset();
}

let form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    let bookName = document.querySelector('#book-name').value;
    let authorName = document.querySelector('#book-author').value;
    let numPages = document.querySelector('#book-pages').value;
    let select = document.querySelector('#read-status');
    let value = select.options[select.selectedIndex].value;  

    let bookToAdd = new Book(bookName, authorName, numPages, value);

    addBookToLibrary(bookToAdd);
});

/**
 * Loops through the array and displays each book on the page
 */
function render() {
    const display = document.querySelector('.book-shelf');
    const books = document.querySelectorAll('.grid-item');
    books.forEach(book => display.removeChild(book));
   
    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

/**
 * Changes the read status of the selected book
 */
function changeReadStatus() {

}

/**
 * Creates the book DOM element based on the input
 */
function createBook(book) {
    const bookShelf = document.querySelector('.book-shelf');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('p');
    const authDiv = document.createElement('p');
    const pageDiv = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookDiv.classList.add('grid-item');

    // Set the title attribute
    titleDiv.textContent = book.title;
    titleDiv.classList.add('book-title');
    bookDiv.appendChild(titleDiv);

    // Set the author attribute
    authDiv.textContent = book.author;
    authDiv.classList.add('book-author');
    bookDiv.appendChild(authDiv);

    // Set the number of pages
    pageDiv.textContent = book.numPages;
    pageDiv.classList.add('book-pages');
    bookDiv.appendChild(pageDiv);

    // Create read button
    readBtn.classList.add('read-status-button');
    bookDiv.appendChild(readBtn);

    if(book.read === 'read') {
        readBtn.textContent = 'Read';
    }
    else {
        readBtn.textContent = 'Not Read';
    }

    removeBtn.textContent = 'Remove'; 
    removeBtn.classList.add('delete-book-btn');
    bookDiv.appendChild(removeBtn);

    bookShelf.appendChild(bookDiv);
}

/*
 <div class="grid-item">
                    <p class="book-title">Book Title</p>
                    <p class="book-author">Author</p>
                    <p class="book-pages">Number of Pages</p>
                    <button class="read-status-btn">Read</button>
                    <button class="delete-book-btn">Delete</button>
                </div>
*/