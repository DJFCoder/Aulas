// Manipulando elementos
// Atributos

// peguei o header
const header = document.querySelector('header')
// adicionei um atributo id
header.setAttribute('id', 'header')

// pesquisei o elemento adicionado ao header
const headerID = document.querySelector('#header')

// imprimi no console.log
// console.log(headerID)

// removi o atributo id adicionado anteriormente
header.removeAttribute('id', 'header')

// adicionei um atributo class
header.setAttribute('class', 'header')

// imprimi o atributo class
console.log(headerID.getAttribute('class'))