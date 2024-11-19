const myLibrary = [
    {
        title: "hello",
        author: "Max Mustermann",
        pages: 420,
        read: "not read",
        info: "none",
    }
];

const body = document.querySelector("body");

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (title + " by " + author +  ", " + pages + " pages, " + read);
    }}

function addBookToLibrary(Library, newBook){
    if(checkIfSame(Library,newBook) === false){
        Library.push(newBook);
        display();
    }
}

function checkIfSame(Library, newBook){
    for(let i = 0; i < Library.length; i++){
        if(Library[i].title === newBook.title){
            if(Library[i].author === newBook.author){
                if(Library[i].pages === newBook.pages){
                    return true;
                }
            }
        }
    }
    return false;
}

function deleteChildren(){
        let e = document.querySelector("body");
        let child = e.lastElementChild;

        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
}

function addContent(book){
    return `Title: ${book.title}
            Author: ${book.author}
            Pages: ${book.pages}
            Read: ${book.read}`;
}

function display(){
    deleteChildren();
    for(let i = 0; i < myLibrary.length; i++){
        let book = document.createElement("div");
        book.setAttribute("class", "book");
        book.textContent = addContent(myLibrary[i]);
        body.appendChild(book);
    }
}

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien",295,"not read yet")
console.log(theHobbit.info());
// console.log(JSON.stringify((myLibrary[0])))
display();