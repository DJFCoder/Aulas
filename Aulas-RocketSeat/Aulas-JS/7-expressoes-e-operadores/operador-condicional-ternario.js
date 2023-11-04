// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se nao valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
    let pao = true
    let queijo = true

    const niceBreakFast = pao && queijo ? 'Café top' : 'Café ruim'
//  const niceBreakFast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakFast)

// Maior de 18

    let age = 16
    const canDrive = age >= 18 ? 'can drive' : "can't drive"
    console.log(canDrive)