// array for books
const myLibrary = []

//add books to library
function addBook() {
	
}

// Have add reveal the form to add a book to library 
const add = document.querySelector(".add")
const form = document.querySelector("form")
add.addEventListener("click", () => {
	form.setAttribute("style", "opacity: 1; transition: opacity 1s;")
  function book(title, author, year, read) {
  	this.title = title,
    this.author = author,
    this.year = year,
    this.read = read
  }
})

// Clicking submit rehides the form 
const submit = document.querySelector(".submit")
submit.addEventListener("click", () => {
	form.setAttribute("style", "opacity: 0; transition: opacity 1s;")
  submit.preventDefault()
})
