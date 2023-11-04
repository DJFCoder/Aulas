/*
    Function() constructor

    * expressao new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.code = function() {
        return this.name + " está codando"
    }
    this.talk = function() {
        return this.name + " está trocando idéia"
    }
}

const juan = new Person("Juan")
const gabi = new Person("Gabi")
console.log(juan.code())
console.log(gabi.talk())