
const myLibrary = [];


function Book(title, author, haveRead) {
    this.title = title;
    this.author = author;
    this.haveRead = haveRead;
    this.info = function() {
        let readingStatus = '';
        haveRead ? readingStatus+='has been read' : readingStatus+='have not read yet';
        return `${title} by ${author}, ${readingStatus}.`;
    }

}
const libraryFunctions = {
    addBookToLibrary: (bookObject) => {
        myLibrary.push(bookObject);
    },

}


// html related manipulation

const bookList = document.querySelector('div.book-display');

const addNewBook = (obj) => {
    const bookList = document.querySelector('div.book-display');
    const newBook = document.createElement('div');
newBook.classList.add('listed-book');
newBook.setAttribute('data-index', `${myLibrary.length}`);
const deleteButtonDiv = document.createElement('div');
deleteButtonDiv.classList.add('position-test');
const actualDelete = document.createElement('button')
actualDelete.classList.add('delete');
actualDelete.textContent = 'X';
deleteButtonDiv.appendChild(actualDelete);
const bookTitle = document.createElement('div');
bookTitle.classList.add('book-title');
bookTitle.textContent = obj.title;
const bookAuthor = document.createElement('div');
bookAuthor.textContent = obj.author;
const buttonDiv = document.createElement('div');
const readButton = document.createElement('button');
readButton.classList.add('listed');
obj.haveRead ? console.log('something') : readButton.classList.add('unread-border');

obj.haveRead ? readButton.textContent = 'Read' : readButton.textContent = 'Not Read';
buttonDiv.appendChild(readButton);
newBook.appendChild(bookTitle);
newBook.appendChild(bookAuthor);
newBook.appendChild(buttonDiv);
newBook.appendChild(deleteButtonDiv);
bookList.appendChild(newBook);



}

const displayBooks = (array) => {
    for(let index in array){
        addNewBook(array[index]);
    }
}
// displayBooks(myLibrary);




const buttons = document.querySelectorAll('.listed');



const killChildren = (parent, child) => {
    parent.removeChild(child);

   
}


document.querySelector('.book-display').addEventListener('click', (e)=>{
    console.log(e.target);
    if(e.target.classList.contains('listed')){
        console.log('clicked!');
        e.target.classList.toggle('unread-border');
        e.target.classList.contains('unread-border') ? e.target.textContent = 'Not Read' : e.target.textContent = 'Read';
        ;
    }
    if(e.target.classList.contains('delete')){
const placement = e.target.parentElement.parentElement.getAttribute('data-index');
        killChildren(document.querySelector('div.book-display'),
            document.querySelector(`[data-index="${placement}"`));
    }
});



document.querySelector('form').addEventListener('click', (e)=>{
    console.log(e.target);
    if(e.target.classList.contains('listed')){
        console.log('clicked!');
        e.target.classList.toggle('unread-border');
        e.target.classList.contains('unread-border') ? e.target.textContent = 'Not Read' : e.target.textContent = 'Read';
        ;
    }
  
});




const form = document.getElementById('submission');

form.addEventListener('submit', (event) => {
    event.preventDefault();
const readValue = document.querySelector('#readBoolean');
console.log(readValue);
const readBool = readValue.textContent === 'Read';

const thisBook = new Book(`${form.title.value}`, `${form.author.value}`, readBool);
    form.title.value = '';
    form.author.value = '';
    myLibrary.push(thisBook);
    addNewBook(myLibrary.at(-1));

});



const removeBook = (array, index) => {
    array.splice(index, 1);
    return array;
}
