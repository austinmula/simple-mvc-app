const server = 'http://localhost:3000';
const container = document.querySelector(".container");

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
    const books = await response.json();

    console.log(books);

    populateContent(books);
}

fetchBooks()

const populateContent = (data) => {
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