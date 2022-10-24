let library = [];
var book_counter = 0;
const library_section = document.getElementById("library");


function Books(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.nth_book = book_counter;
}

Books.prototype.info = function(){
    return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`);
}

function addBookstoLibrary(book_title, book_author, book_pages, book_read) {
    // console.log(book_title.replace(/ /g,"_"));
    library.push(new Books(book_title,book_author,book_pages,book_read));
    return book_counter++;
}

addBookstoLibrary("The Hobbit", "Tolkien", 300, "readed");
addBookstoLibrary("A Clash of Kings", "George R.R. Martin", 890, "not readed");

for (book of library) {
    const book_card = 
        `
            <article class="book">
            <img src="images/Book_Covers/cover (${Math.floor(Math.random()*7)}).png" alt="">
            <div class="book_info">
                <p class="book_title">Title of book :${book.title}</p>
                <p>Author of book :${book.author}</p>
                <p>Pages :${book.pages}</p>
                <p>Did you read this book : ${book.read}</p>
                <div class="btn-container">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            </article>
        `;
    library_section.insertAdjacentHTML("beforeend", book_card);
}