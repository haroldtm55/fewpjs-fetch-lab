function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books').then(response => response.json()).then(json => {
    console.log(json[4])
    const totalNumberOfPages = json.map((object) => object
    ['numberOfPages']).reduce((accumulator,currentValue) => accumulator + currentValue)
    console.log(`There are a total of ${totalNumberOfPages} pages`)
    let characters = json.map((object) => object['characters'])
    let charactersAllTogether = characters[0]
    for (let i = 1; i <= characters.length -1; i++) {
      charactersAllTogether = charactersAllTogether.concat(characters[i])
    }
    let character1031 = charactersAllTogether.find((string)=> string === 'https://anapioficeandfire.com/api/characters/1031')
    console.log(`The info about the 1031st character is in the following link: ${character1031}`)
    renderBooks(json)
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
