// Adicionando elementos

const div = document.createElement('div')
div.innerText = "Olá Devs!"

// insertBefore
const body = document.querySelector('body')
// para inserir o elemto div criado em js no meio de dois nós, usamos o insertBefore, tenho que escolher o nó que vou inserir ANTES/BEFORE no caso 'script':
const script = body.querySelector('script')
body.insertBefore(div, script)

// para simular um "insertAfter" que no caso não existe, então crio uma variavel com o elemento que vou inserir apósAfter e ultilizo .nextElementSibling:
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)