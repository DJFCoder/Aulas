const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

let number1 = 32
let number2 = 25

//console.log(`o numero 1 é ${number1}`)
//console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

// Função é um liquidificador

function fazerVitamina(fruta1, fruta2) {
    return 'vitamina de: ' + fruta1 + fruta2
}

const copo = fazerVitamina('banana', 'maçã')

console.log(copo)