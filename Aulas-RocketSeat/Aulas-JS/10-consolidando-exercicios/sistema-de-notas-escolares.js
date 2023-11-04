/* ### Transformar notas escolares

Crie um algoritmo que tranforme as notas do sistema numérico de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/

// Minha resolução

// let notaFinal = 59
// let notaA = notaFinal >= 90
// let notaB = notaFinal <= 89 && notaFinal >= 80
// let notaC = notaFinal <= 79 && notaFinal >= 70
// let notaD = notaFinal <= 69 && notaFinal >= 60

// if(notaA) {
//     console.log('A')
// }else if(notaB) {
//     console.log('B')
// }else if(notaC) {
//     console.log('C')
// }else if(notaD) {
//     console.log('D')
// }else{
//     console.log('F')
// }

// Revisão do professor

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    }else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = new Error("Nota Inválida")
    }

    return scoreFinal
}


console.log(getScore(90))