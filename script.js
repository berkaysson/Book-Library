let library = [];
const library_section = document.getElementById("library");
const editBook_title = document.getElementById("editBook-title");
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

function openForm(form_name, edit_id) {
    document.getElementById(`${form_name}Book-popup`).style.display = "block";
    if (form_name === "edit") {
        editBook_title.textContent = library[library.indexOf(library.find(x => x.id === edit_id))].title;
        document.getElementsByName("editBook-button")[0].setAttribute("onclick", `editBook(${edit_id})`);
    }
    document.querySelectorAll(".filtered").forEach(el => {
        el.style.filter = "blur(2px)"; 
    });
}
  
function closeForm(form_name) {
    document.getElementById(`${form_name}Book-popup`).style.display = "none";
    document.querySelectorAll(".filtered").forEach(el => {
        el.style.filter = "blur(0px)"; 
    });
}

// addBook(), creates new Object with input values and book_counter value and pushes that object to library array,
// call displayLibrary which shows all Books objects in library array

function addBook(){ 
    library.push(new Books(
        document.getElementsByName("book-title")[0].value, 
        document.getElementsByName("book-author")[0].value, 
        document.getElementsByName("book-pages")[0].value, 
        document.getElementsByName("book-read")[0].value, 
        book_counter));
    displayLibrary();
    book_counter++;
    document.getElementsByName("book-title")[0].value = "", 
    document.getElementsByName("book-author")[0].value = "", 
    document.getElementsByName("book-pages")[0].value = "",
    document.getElementsByName("book-read")[0].value="Not Readed"; 
}

function displayLibrary() {
    library_section.textContent = " ";
    for (let book of library) {
        const book_card = 
        `
            <article class="book">
            <img src="images/Book_Covers/cover (${book.id % 7}).png" alt="">
            <div class="book-info">
                <p class="book-title">Title of book : ${book.title}</p>
                <p>Author of book : ${book.author}</p>
                <p>Pages : ${book.pages}</p>
                <p>Did you read this book : ${book.read}</p>
                <div class="btn-container">
                    <button class="btn" onclick="openForm(\`edit\`,${book.id})">Edit</button>
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

function toggle(button) {
    button.value=(button.value=="Readed")?"Not Readed":"Readed";
}

function editBook(edit_id) {
    library[library.indexOf(library.find(x => x.id === edit_id))].title = document.getElementsByName("editBook-title")[0].value;
    library[library.indexOf(library.find(x => x.id === edit_id))].author = document.getElementsByName("editBook-author")[0].value;
    library[library.indexOf(library.find(x => x.id === edit_id))].pages = document.getElementsByName("editBook-pages")[0].value;
    library[library.indexOf(library.find(x => x.id === edit_id))].read = document.getElementsByName("editBook-read")[0].value;
    document.getElementsByName("editBook-title")[0].value = "", 
    document.getElementsByName("editBook-author")[0].value = "", 
    document.getElementsByName("editBook-pages")[0].value = "",
    document.getElementsByName("editBook-read")[0].value="Not Readed"; 
    displayLibrary();
    closeForm("edit");
}