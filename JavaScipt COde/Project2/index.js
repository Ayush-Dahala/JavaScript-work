// Display.add()
class Book {
    constructor(name, author, type) {
        this.name = name
        this.author = author
        this.type = type
    }
}

class Display {
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true
        }
    }
    add(book) {
        localStorage.setItem(book.name, JSON.stringify(book))
        let LibraryData = JSON.parse(localStorage.getItem(book.name))
        console.log(LibraryData)
        let tableBody = document.getElementById('tableBody')
        let uiString = ""
            uiString += `<tr>
            <td>${LibraryData.name}</td>
            <td>${LibraryData.author}</td>
            <td>${LibraryData.type}</td>
        </tr> `
        tableBody.innerHTML += uiString
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                 ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
}
}
let library = document.getElementById('libraryForm')
library.addEventListener('submit', libraryFormSubmit)
function libraryFormSubmit(e) {
    e.preventDefault()
    let name = document.getElementById('name')
    let author = document.getElementById('author')
    let Fiction = document.getElementById('Fiction')
    let Programming = document.getElementById('ComputerProgramming')
    let cooking = document.getElementById('cooking')
    name = name.value
    author = author.value
    let type;
    if (Fiction.checked) {
        type = Fiction.value
    }
    else if (Programming.checked) {
        type = Programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }
    let book = new Book(name, author, type)
    // console.log(book)
    //Saved in local Storage


    let display = new Display()
    if (display.validate(book)) {
        display.add(book)
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        display.show('danger', 'Sorry you cannot add this book')
    }

}