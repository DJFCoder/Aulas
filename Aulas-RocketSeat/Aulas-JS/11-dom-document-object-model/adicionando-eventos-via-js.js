// Eventos

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print() {
    prompt('h1 clicado')
}