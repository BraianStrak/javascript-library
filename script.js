const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
const newBookBtn = document.querySelector('#newBtn');

closePopUp.addEventListener('click',
() => popUpForm.classList.add('d-none'));

newBookBtn.addEventListener('click',
() => popUpForm.classList.remove('d-none'));

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

function Book(){

}

function closeForm(){
}

function openForm(){
}

function addBookToLibrary() {
 //might wanna close the form at the same time
}

