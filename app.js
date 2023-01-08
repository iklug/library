let myLibrary = [];


function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.haveRead = haveRead;
    this.info = function() {
        let readingStatus = '';
        haveRead ? readingStatus+='has been read' : readingStatus+='have not read yet';
        return `${title} by ${author}, ${readingStatus}.`;
    }

}
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
console.log(book1.title);
console.log(book1.author);
console.log(book1.info());

const numbers = {
    numberA: 5,
    numberB: 10,
    sum: function() {
        console.log(this === numbers);
        const calculate = () => {
            console.log(this === numbers);
            return this.numberA + this.numberB;
        }
        return calculate();
    }
}
console.log(numbers.sum());

const addBookToLibrary = bookObject => {
myLibrary.push(bookObject);
console.log( `${bookObject.title} has been added to the Library.`);

}
addBookToLibrary(book1);
console.log(myLibrary);

// html related manipulation

const bookList = document.querySelector('div.book-display');

const addNewBook = (title, author, haveRead) => {
    const bookList = document.querySelector('div.book-display');
    const newBook = document.createElement('div');
newBook.classList.add('listed-book');
newBook.setAttribute('data-index', `${myLibrary.length}`);
const bookTitle = document.createElement('div');
bookTitle.classList.add('book-title');
bookTitle.textContent = title;
const bookAuthor = document.createElement('div');
bookAuthor.textContent = author;
const buttonDiv = document.createElement('div');
const readButton = document.createElement('button');
readButton.classList.add('listed');
haveRead ? readButton.classList.add('read-border') : readButton.classList.add('unread-border');

haveRead ? readButton.textContent = 'Read' : readButton.textContent = 'Not Read';
buttonDiv.appendChild(readButton);
newBook.appendChild(bookTitle);
newBook.appendChild(bookAuthor);
newBook.appendChild(buttonDiv);
bookList.appendChild(newBook);
}
addNewBook('The Lord of the Rings', 'J.R.R Tolkien', false);
addNewBook('The Lord of the Rings', 'J.R.R Tolkien', false);

addNewBook('The Lord of the Rings', 'J.R.R Tolkien', false);

addNewBook('The Lord of the Rings', 'J.R.R Tolkien', false);

addNewBook('The Lord of the Rings', 'J.R.R Tolkien', false);

addNewBook('The Lord of the Rings', 'J.R.R Tolkien', false);





