// Alterando estilos
// classList
const element = document.querySelector('body')

// adiciono um elemento classList
/* Dentro do meu head no HTML tenho a propriedade color: red nomeada como .active e a propriedade background-color: green nomeada como .green */
// sendo assim tranformo o texto em vermelho e o bg em verde
element.classList.add('active', 'green')

// imprimo uma lista de classes no console.log para que ele me mostre as classes que posso adicinar em seu prototype
console.log(element.classList)

// removo o elemento classList
element.classList.remove('active')

// metodo toggle faz com que remova se ele estiver presente, se nao estiver ele vai implantar
element.classList.toggle('active')