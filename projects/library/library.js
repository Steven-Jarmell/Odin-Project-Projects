let myLibrary = [];

class Book {
    constructor(title, author, numPages, read) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.read = read;
    }
}

// When a user enters data, add the book to the library
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
 * Adds the book to the list and then renders it on the page
 * 
 * @param {Book} book The book to add to the library
 */
function addBookToLibrary(book) {
    event.preventDefault();

    myLibrary.push(book);
    render();

    form.reset();
}

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
 * Creates the DOM element for each book
 * 
 * @param {List} book List of the book elements to create the element
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
    titleDiv.textContent = 'Title: ' + book.title;
    titleDiv.classList.add('book-title');
    bookDiv.appendChild(titleDiv);

    // Set the author attribute
    authDiv.textContent = 'Author: ' + book.author;
    authDiv.classList.add('book-author');
    bookDiv.appendChild(authDiv);

    // Set the number of pages
    pageDiv.textContent = 'Number of Pages: ' + book.numPages;
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

    // Add the book to the bookshelf
    bookShelf.appendChild(bookDiv);

    // Add the ability to toggle the read button on the book
    readBtn.addEventListener('click', () => {
        if(readBtn.textContent === 'Read') {
            myLibrary[myLibrary.indexOf(book)].read = 'not-read';
        }
        else {
            myLibrary[myLibrary.indexOf(book)].read = 'read';
        }

        render();
    }); 
    
    // Add the ability to remove the book from the shelf
    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book),1);
        console.log('RemoveBtn clicked');
        render();
    });
}

render();