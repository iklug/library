let myLibrary = [];


function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        let readingStatus = '';
        haveRead ? readingStatus+='has been read' : readingStatus+='have not read yet';
        return `${title} by ${author}, ${pages} pages, ${readingStatus}.`;
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