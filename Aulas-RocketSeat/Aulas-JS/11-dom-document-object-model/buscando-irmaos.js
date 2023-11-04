// Navegando pelos elementos

const el = document.querySelector('header')
// assim como os elementos filhos temos a mesma regra com os elementos irmãos. Se usarmos nextSibling ele leva em consideração espaços como textos e se ultilizarmos nextElementSibling ele puxa o proximo elemento:
console.log(el.nextSibling)
console.log(el.nextElementSibling)

// para ver os irmãos de tras para frente:
const el2 = document.querySelector('body script')
console.log(el2.previousSibling)
console.log(el2.previousElementSibling)