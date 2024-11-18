const myLibrary = [];

const body = document.querySelector("body");

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (title + " by " + author +  ", " + pages + " pages, " + read);
    }}

function addBookToLibrary(){
    //stuff
}

function display(){
    for(let i = 0; i < myLibrary.length; i++){
        let div = document.createElement("div");
        div.setAttribute("class", "book");
        body.appendChild(div);
    }
}

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien",295,"not read yet")
console.log(theHobbit.info());