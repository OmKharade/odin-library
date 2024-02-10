const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.toggleRead = function(){
    this.read = !this.read
}

function toggleRead(i){
    myLibrary[i].toggleRead()
    displayBooks()
}

function addBookToLibrary() {
  let title = document.getElementById('title').value
  let author = document.getElementById('author').value
  let pages = document.getElementById('pages').value
  let read = document.getElementById('read').checked
  let book = new Book(title, author, pages, read)
  myLibrary.push(book)
  displayBooks()
}

function displayBooks(){
    let bookList = document.querySelector(".bookList")
    bookList.innerHTML = ""
    for(let i = 0; i<myLibrary.length; i++) {
        let book = myLibrary[i]
        let bookDiv = document.createElement("div")
        bookDiv.setAttribute("class","book-card")
        bookDiv.innerHTML = `
        <div class="header">
            <h3 class="card-title">${book.title}</h3>
        </div>
        <div class="body">
            <p class="card-author">by ${book.author}</p>
            <p class="card-pages">${book.pages} pages</p>
            <p class="card-read">${book.read? "Completed":"Not Completed"}</p>
            <button class="card-delete" onclick="deleteBook(${i})">Delete</button>
            <button class="card-toggle-read" onclick="toggleRead(${i})">Read</button>
        </div>`
        bookList.appendChild(bookDiv)
    };
}

function deleteBook(i){
    myLibrary.splice(i,1)
    displayBooks()
}

let newBookBtn = document.querySelector("#newBookBtn")
let newBookForm = document.querySelector("#newBookForm")

newBookBtn.addEventListener("click",function(){
    newBookForm.style.display = "block"
})

function hideContainer(){
    newBookForm.style.display = "none"
}

newBookForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    addBookToLibrary()
    hideContainer()
})
