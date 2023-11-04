/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


// criei uma variavel da variavel para imprimir as propiedades dela:
const totalCategories = booksByCategory.length
console.log('Total de categorias: ', totalCategories);

// peguei o objeto dentro do array "category" e tranformei em uma variavel, permitindo que eu possa colocar um ponto nela para pegar alguma propriedade:
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.books.length, ":", category.category)
}

// criei uma função para contar os autores:
function countAuthors() {
    let authors = [];

    // criei um loop para encontrar os autores e alimentar o array acima:
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author);
            }
        }
    }
        console.log("Total de autores: ", authors.length)
}

// executei
countAuthors();

// criei uma função para encontrar os livros do autor:
function bookOfAuthor(author) {
    let books = [];

    // criei um loop para encontrar os autores e alimentar o array acima:
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    
    console.log(`Livros do autor ${author}: ${books.join(", ")}.`)
}

// executei
bookOfAuthor('Augusto Cury')