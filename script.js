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

function openForm() {
    document.getElementById("addBook-popup").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("addBook-popup").style.display = "none";
}

function addBook(){
    library.push(new Books(document.getElementsByName("book-title")[0].value, 
    document.getElementsByName("book-author")[0].value, 
    document.getElementsByName("book-pages")[0].value, 
    "not readed"));
    const book_card = 
            `
                <article class="book">
                <img src="images/Book_Covers/cover (${Math.floor(Math.random()*7)}).png" alt="">
                <div class="book-info">
                    <p class="book-title">Title of book : ${library[book_counter].title}</p>
                    <p>Author of book : ${library[book_counter].title}</p>
                    <p>Pages : ${library[book_counter].author}</p>
                    <p>Did you read this book : ${library[book_counter].pages}</p>
                    <div class="btn-container">
                        <button class="btn">Edit</button>
                        <button class="btn red-btn">Delete</button>
                    </div>
                </div>
                </article>
            `;
    library_section.insertAdjacentHTML("beforeend", book_card);
    return book_counter++;
}

for (book of library) {
    const book_card = 
        `
            <article class="book">
            <img src="images/Book_Covers/cover (${Math.floor(Math.random()*7)}).png" alt="">
            <div class="book-info">
                <p class="book-title">Title of book : ${book.title}</p>
                <p>Author of book : ${book.author}</p>
                <p>Pages : ${book.pages}</p>
                <p>Did you read this book : ${book.read}</p>
                <div class="btn-container">
                    <button class="btn">Edit</button>
                    <button class="btn red-btn">Delete</button>
                </div>
            </div>
            </article>
        `;
    library_section.insertAdjacentHTML("beforeend", book_card);
}