let myLibrary = [];
let shelf = document.getElementById("bookshelf")
let btn = document.getElementById('button')
let form = document.getElementById('form')
let books = document.createElement("div")

//makes a book for the shelf




//shelf.appendChild(books)
//books.classList.add('book')
//books.innerHTML = "stuff"
//console.log('test')

//makes book object
function Book(title, author, pages, read) {
    //constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    this.info = function() {
    books.innerHTML = `${title}`
    alert(`${this.title} is by ${this.author} and has ${this.pages} pages. I ${this.read} this book.`)
    //prompt(`"${title} by ${author} has ${pages} and it is ${read}."`)

    }
}


//const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not yet read')
//const theSilmarillion = new Book('The Silmarillion', 'J.R.R. Tolkien', 490, 'read')
//theHobbit.info()



//gets the books info using the submit button 
function otherName() {
let myForm = document.getElementById('form')
let theTitle = document.getElementById('title').value
let theAuthor = document.getElementById('author').value
let thePages = Number(document.getElementById('pages').value)
let isRead = document.getElementById('read').value



//check input values make sense
if (thePages < 1) {
  alert('Please  enter a number greater than one for the page number')
}
else if ((theTitle =='') || (theAuthor == '')){
  alert('Please fill out the form')
}
else {

//alert(inputs)
if(isRead == 'true') {
  read = 'read'
  isRead = 'false'
}
else  {
  read = 'have not read'
  isRead = 'false'
}

const myBook = new Book(theTitle,theAuthor,thePages, read)


myLibrary.push(myBook)
myForm.reset()


//makes the book itself
function makeBook() {
  
  let books = document.createElement("div")
  shelf.appendChild(books)
  books.classList.add('book')

  let delButton = document.createElement("button")
  delButton.classList.add('delButton')
  delButton.innerHTML = "Delete"
  
  let infoButton = document.createElement("button")
  infoButton.classList.add('infoButton')
  infoButton.innerHTML = "Information"

  if (theTitle.length > 15) {
    books.innerHTML = theTitle.substring(0,15) + '...'
  }
  else{
    books.innerHTML = theTitle
  }
  
  books.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
  books.appendChild(delButton)
  books.appendChild(infoButton)
  
 
  //tells us about the book selected 
  function displayInfo() {
    
    myBook.info()

    //need to delete possibly
    
  }
  
  //deletes book
  function deleteMe () {
    shelf.removeChild(books)
  }
  infoButton.addEventListener('click', displayInfo)
 delButton.addEventListener('click',deleteMe)
 
}

makeBook()

}
}





//makes form visible
function myFunction() {
  const x = document.getElementById("form");
  const y = document.getElementById("formDiv")

  if ((x.style.visibility == 'hidden') && (y.style.visibility == 'hidden'))  {
    x.style.visibility = 'visible';
    y.style.visibility = 'visible';
  }
  else {
    x.style.visibility = 'hidden';
    y.style.visibility = 'hidden'
    
  }
}



myFunction()
btn.addEventListener('click',myFunction)


