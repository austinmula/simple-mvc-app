const server = 'http://localhost:3000';
const container = document.querySelector(".container");
let books;

async function fetchBooks() {
    const url = server + '/api/books';
    console.log(url)
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    };
    const response = await fetch(url, options);
    books = await response.json();

    console.log(books);

    populateContent(books);
}

fetchBooks()

async function addBook() {

    const url = server + '/api/books';

    const book = {
        author: document.getElementById("author").value,
        bookTitle: document.getElementById("bookTitle").value
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    };
    const response = await fetch(url, options);

    const newbook = await response.json();
    books.push(newbook)
    populateContent(books)
}

const createNew = document
    .getElementById("create-book")
    .addEventListener("click", (e) => {
        addBook(e)
    });

const saveToLocalStorage = (arr, new_Item) => {
    try {
        if (localStorage.getItem("student-data") === null) {
            // create a new local storage obj
            localStorage.setItem("student-data", JSON.stringify(arr));
            generateTable(arr);
        } else {
            // update local storage
            const storage = JSON.parse(localStorage.getItem("student-data"));
            storage.push(new_Item);
            createTableBody(storage);
            localStorage.setItem("student-data", JSON.stringify(storage));
        }
    } catch (error) {
        alert(error.message);
    }
};

const populateContent = (data) => {
    container.innerHTML = ''
    data?.forEach(element => {
        let card = document.createElement('div')
        card.classList.add('card')

        let card_top = document.createElement('div')
        card_top.classList.add('card-image')

        let card_cont = document.createElement('div')
        card_cont.classList.add('card-content')

        let title = document.createElement('h3')
        let sub_title = document.createElement('p')

        let head = document.createTextNode(element.bookTitle)
        let author = document.createTextNode(element.author)

        title.appendChild(head)
        sub_title.appendChild(author)

        card.appendChild(card_top)
        card.appendChild(card_cont)
        card_cont.appendChild(title)
        card_cont.appendChild(author)


        container.appendChild(card)
        container.classList.add('card-container')
    });
}