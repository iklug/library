let myLibrary = [];


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
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', true);
const book2 = new Book('Catch-22', 'Joseph Heller', false);
const addBookToLibrary = bookObject => {
myLibrary.push(bookObject);
console.log( `${bookObject.title} has been added to the Library.`);

}
addBookToLibrary(book1);
addBookToLibrary(book2);

// html related manipulation

const bookList = document.querySelector('div.book-display');

const addNewBook = (obj) => {
    const bookList = document.querySelector('div.book-display');
    const newBook = document.createElement('div');
newBook.classList.add('listed-book');
newBook.setAttribute('data-index', `${myLibrary.length}`);
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
bookList.appendChild(newBook);
}

const displayBooks = (array) => {
    for(let index in array){
        addNewBook(array[index]);
    }
}
displayBooks(myLibrary);

// const changeBorder = (button) => {
//     button.classList.remove('read-border');
//     button.classList.add('unread-border');
// }
const buttons = document.querySelectorAll('.listed');


const buttonFlip = () => {

Array.from(buttons).forEach(key => key.addEventListener('click', (key) => {
    
    key.target.classList.toggle('unread-border');
    console.log('toggle woggle');
    if(key.target.getAttribute('class') === 'listed unread-border'){
        return key.target.textContent = 'Not Read';
    } 
    key.target.textContent = 'Read';


}
        
    
))};

buttonFlip();

// Array.from(badButtons).forEach(key => key.addEventListener('click', (key) =>
//     {key.target.classList.remove('unread-border'); 
//         key.target.classList.add('read-border');
//         key.target.textContent = 'Read';
//         }
// ));

const form = document.getElementById('submission');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newBookObj = {
    
    };
    newBookObj.title = form.title.value;
    newBookObj.author = form.author.value;
    newBookObj.haveRead = true;
    form.title.value = '';
    form.author.value = '';
    addNewBook(newBookObj);

});


