// for...in
// é uma declaração que cria um loop através de um objeto para separar as propriedades

let person = {
    name: 'Juan',
    age: 26,
    weight: 69.8,
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}