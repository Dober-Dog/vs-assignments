function Book(title, author, year){
    this.bookTitle = title,
    this.bookAuthor = author,
    this.bookYear = year,
    this.getDetails = function(){
            console.log("Title: " + this.bookTitle + ", Author: " + this.bookAuthor + ", Year: " + this.bookYear)
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925)
book1.getDetails()

const book2 = new Book("To Kill A Mockingbird", "Harper Lee", 1960)
book2.getDetails()

// const form = document.bookSubmit
// const bookList = document.getElementById("bookList")
// form.addEventListener("submit", function(event){
//     event.preventDefault()
//     const title = form.title.value
//     const author = form.author.value
//     const year = form.year.value
//     form.title.value = ""
//     form.author.value = ""
//     form.year.value = ""
//     const book = document.createElement("div")
//     const bYear = document.createElement("span")
//     const bAuthor = document.createElement("span")
//     const bTitle = document.createElement("span")
//     bTitle.textContent = "Title: " + title
//     bAuthor.textContent = "Author: " + author
//     bYear.textContent = "Year: " + year
//     book.append(bTitle)
//     book.append(bAuthor)
//     book.append(bYear)
//     bookList.appendChild(book)
//     alert("Book Logged")
// })