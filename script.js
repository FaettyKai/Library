// Array for Library to push books
const library = []

// Select from HTML DOM & open form/modal
const show = document.querySelector(".add")
const form = document.querySelector("#show")

show.addEventListener("click", () => {
	form.showModal()
})

// Add value's to fields
const title = document.getElementById("title")
const author = document.getElementById("author")
const year = document.getElementById("year")
const close = document.querySelector(".submit")

// Constructor for books
function book(title, author, year) {
	this.title = title,
  this.author = author,
  this.year = year
}

// To close & push books to library when submitted & reset form
close.addEventListener("click", (e) => {
	e.preventDefault()
  form.close()
  var newBook = new book(title.value, author.value, year.value)
  console.log(newBook)
  library.push(newBook)
  console.log(library)
  
  title.value = " "
  author.value = " "
  year.value = " "
})

