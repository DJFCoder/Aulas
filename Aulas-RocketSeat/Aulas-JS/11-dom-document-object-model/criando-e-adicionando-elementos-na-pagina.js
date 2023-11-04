// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
// aqui estou inserindo um texto dentro da div que criei em memoria acima:
div.innerText = "Olá Dev!"

// append prepend
// agora vou adicionar a um ponto da pagina HTML, no caso body:
const body = document.querySelector('body')
// para inserir no final do 'body
body.append(div)

// para inserir no inicio do 'body'
body.prepend(div)