const popUpForm = document.getElementById('popUp');
const newBookBtn = document.querySelector('#newBtn');

newBookBtn.addEventListener('click',
() => popUpForm.classList.remove('d-none'));

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

class Book {
    constructor() {
        this.title = document.getElementById("title").value;
        this.author = document.getElementById("author").value;
        this.pages = document.getElementById("pages").value;
    }
}

function addBookToLibrary() {
    let parent = document.querySelector('#book-table');
    let newBook = new Book(); // use the input to create a book
    let newPara = document.createElement('P');

    //add book to list
    newPara.textContent = "Title: " + newBook.title + " | Author:  " + newBook.author + " | Pages: " + newBook.pages;

    parent.appendChild(newPara);

    clearInputFields(); // clear input fields
    popUpForm.classList.add('d-none'); //hide form
}

function clearInputFields() { // reset the input after pressing the button
    document.getElementById("title").value = title.defaultValue;
    document.getElementById("author").value = author.defaultValue;
    document.getElementById("pages").value = pages.defaultValue;
}
