let myLibrary = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        numPages: 154,
        read: true,
    }
];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary() {
    //
}

let formData = document.querySelector('#book-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let formElements = new FormData(event.target);
    for (let element in formElements) {
        console.log(element.keys);
    }
});

console.log("Running");