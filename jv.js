const myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 295,
        read: "not read yet",
        info: () => "none",
    }
];
const shelf = document.querySelector(".Shelf");
const newBookDialog = document.querySelector(".newBook");
const cancelButton = document.querySelector(".cancel");
const newBookButton = document.querySelector(".newBookButton");
const submitButton = document.querySelector(".submit");
const newTitle = document.querySelector(".title");
const newAuthor = document.querySelector(".author");
const newPages = document.querySelector(".pages");
const newRead = document.querySelector(".read");


newBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
    openCheck(newBookDialog);
})

submitButton.addEventListener("click", () => {
    console.log("submitted");
    let newBook = new Book(newTitle.value,newAuthor.value,newPages.value,newRead.value);
    if(isEmpty(newTitle.value,newAuthor.value,newPages.value,newRead.value) == false){
        addBookToLibrary(myLibrary,newBook);
    }
    newBookDialog.close();
})


function isEmpty(newTitle, newAuthor,newPages,newRead){
        if(newTitle == ""){
            if(newAuthor == ""){
                if(newPages == ""){
                    if(newRead == ""){
                        return true;
                    }
                }
            }
        }
    return false;
}

function openCheck(dialog) {
    if (dialog.open) {
        console.log("Dialog open");
    } else {
        console.log("Dialog closed");
    }
}

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
        let e = document.querySelector(".Shelf");
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
        book.textContent = addContent(myLibrary[i]); //if no other solution change to innerHTMl
        shelf.appendChild(book);
    }
}


display();