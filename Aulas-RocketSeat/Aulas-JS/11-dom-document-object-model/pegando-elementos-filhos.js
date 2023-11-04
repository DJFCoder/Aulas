// Navegando pelos elementos
// childNodes children

const el = document.querySelector('body')

// forma uma nodeList leva em conta os espaços em branco como texto. Oferece uma gama de funçoes de prototype como (for it) por exemplo
console.log(el.childNodes)

// forma uma HTML colection, não leva em conta os espaços em branco. Algumas funçoes do prototype são inferiores as do nodeList
console.log(el.children)

// firstChild leva em consideração o espaço vazio enquanto o firstElementChild não leva em conta o espaço vazio:
console.log(el.firstChild)
console.log(el.firstElementChild)

// lastChild leva em consideração o espaço vazio enquanto o lastElementChild não leva em conta o espaço vazio:
console.log(el.lastChild)
console.log(el.lastElementChild)