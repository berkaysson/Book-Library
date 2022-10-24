let library = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`);
}

function addBooktoLibrary(book_title, book_author, book_pages, book_read) {
    library.push(new Book(book_title,book_author,book_pages,book_read));
}

addBooktoLibrary(" The Hobbit", "Tolkien", 300, "readed");
addBooktoLibrary("A Clash of Kings", "George rR.R. Martin", 890, "not readed");