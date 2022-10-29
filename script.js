let library = [];
const library_section = document.getElementById("library");

const editBook_header = document.getElementById("editBook-header");

const book_title = document.querySelector("input[name='addBook-title']");
const book_author = document.querySelector("input[name='addBook-author']");
const book_pages = document.querySelector("input[name='addBook-pages']");
const book_read = document.querySelector("input[name='addBook-read']");

const $input = document.querySelectorAll("[data-type]");

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
        editBook_header.textContent = library[library.indexOf(library.find(x => x.id === edit_id))].title;
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
    for (el of $input) {
        if (el.getAttribute("data-type") == "add") {
            if (el.value == "") {
                return alert(`Please fill ${el.getAttribute("placeholder")} field!`);
            }
        }
    }
    library.push(Book = new Books(
        book_title.value, 
        book_author.value, 
        book_pages.value, 
        book_read.value, 
        book_counter));
    displayLibrary();
    clearFields();
    book_counter++;
}

function deleteBook(delete_id) {
    library.splice(library.indexOf(library.find(x => x.id === delete_id)),1);
    displayLibrary();
}

function editBook(edit_id) {
    for (el of $input) {
        if (el.getAttribute("data-type") == "edit") {
            if (el.value == "") {
                return alert(`Please fill ${el.getAttribute("placeholder")} field!`);
            }
        }
    }
    library[library.indexOf(library.find(x => x.id === edit_id))].title = document.getElementsByName("editBook-title")[0].value;
    library[library.indexOf(library.find(x => x.id === edit_id))].author = document.getElementsByName("editBook-author")[0].value;
    library[library.indexOf(library.find(x => x.id === edit_id))].pages = document.getElementsByName("editBook-pages")[0].value;
    library[library.indexOf(library.find(x => x.id === edit_id))].read = document.getElementsByName("editBook-read")[0].value;
    clearFields();
    displayLibrary();
    closeForm("edit");
}

function toggle(button) {
    button.value=(button.value=="Readed")?"Not Readed":"Readed";
}

function clearFields() {
    document.querySelectorAll("input").forEach(el => {
        if (el.type == "button") {
            el.value = "Not Readed";
        }
        else {
            el.value = "";
        }
    });
}

function displayLibrary() {
    library_section.textContent = ``;
    for (let book of library) {
        const book_card = 
        `
        <tr>
        
        <th><p class="book-title">${book.title}</p></th>
        <th><p>${book.author}</p></th>
        <th>${book.pages}</th>
        <th>${book.read}</th>
        <th><div class="btn-container">
            <button class="btn" onclick="openForm(\`edit\`,${book.id})">Edit</button>
            <button class="btn red-btn" id="book-${book.id}" onclick="deleteBook(${book.id})">Delete</button>
        </div></th>
    </tr>
    `;
    library_section.insertAdjacentHTML("beforeend", book_card);
    }
}