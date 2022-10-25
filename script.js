let library = [];
const library_section = document.getElementById("library");
let book_counter = 1;

function Books(title, author, pages, read, book_id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = book_id;
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

// create new Object with input values, book_counter and pushes that object to library array,
// call displayLibrary which shows all Books objects in library array

function addBook(){ 
    library.push(new Books(
        document.getElementsByName("book-title")[0].value, 
        document.getElementsByName("book-author")[0].value, 
        document.getElementsByName("book-pages")[0].value, 
        "not readed", book_counter));
    displayLibrary();
    book_counter++;
}

function displayLibrary() {
    library_section.textContent = " ";
    for (let book of library) {
        const book_card = 
        `
            <article class="book">
            <img src="images/Book_Covers/cover (${book.id % 8}).png" alt="">
            <div class="book-info">
                <p class="book-title">Title of book : ${book.title}</p>
                <p>Author of book : ${book.author}</p>
                <p>Pages : ${book.pages}</p>
                <p>Did you read this book : ${book.read}</p>
                <div class="btn-container">
                    <button class="btn" onclick="editBook()">Edit</button>
                    <button class="btn red-btn" id="book-${book.id}" onclick="deleteBook(${book.id})">Delete</button>
                </div>
            </div>
            </article>
    `;
    library_section.insertAdjacentHTML("beforeend", book_card);
    }
}

function deleteBook(delete_id) {
    library.splice(library.indexOf(library.find(x => x.id === delete_id)),1);
    displayLibrary();
}