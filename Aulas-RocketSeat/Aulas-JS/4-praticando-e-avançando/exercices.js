// 1. Declare uma variável de nome weight
// let weight

// 2. Que tipo de dado é a variável acima

// console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        *name: String
        *age: number (integer)
        *stars: number (float)
        *isSubscribed: Boolean

*/

// let name = 'Juan'
// let age = 26
// let stars = 5.0
// let isSubscribed = false

/*
    4. A variável student abaixo é de que tipo de dado?

    console.log(typeof student)

    object

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

*/

// let student = {
//     name: 'Juan',
//     age: 26,
//     stars: 5.0,
//     isSubscribed: false,
//     weight: 69.9
// };

/*
    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.

    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg. `)
*/

// let student = {};

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

// let students = [] 

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

// let students = [student];

/* 
    7. Coloque no console o valor da posição 0 do valor acima
*/

// console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array Students
*/

// let Juan = {
//     name: 'Juan',
//     age: 26,
//     stars: 5.0,
//     isSubscribed: false,
//     weight: 69.9
// };

// const Pedro = {
//     name: 'Pedro',
//     age: 25,
//     stars: 5.0,
//     isSubscribed: true,
//     weight: 73.4
// }

// let students = [Juan, Pedro];
// //students [1] = Pedro

// console.log(students[1])

/*
    9. Sem rodar o código responda qual é a resposta do codigo abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

// undefined por que o var foi definido após o console log, que sofrera um hoisiting