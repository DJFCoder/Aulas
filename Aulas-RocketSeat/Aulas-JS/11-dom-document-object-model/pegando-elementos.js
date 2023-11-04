// getElementById()
/* cria-se um id para a o elemento o qual você deseja pegar

<h1 id="blog-title">Meu Blog</h1>

*/

const element = document.getElementById('blog-title')
console.log(element)

// getElementsByClassName()
/* cria-se uma classe no elemento o qual você deseja pegar 

    <h1 class="one">Meu Blog</h1>

    <p class="one"></p>
*/

const element = document.getElementsByClassName('one')
console.log(element)

// getElementsByTagName()
/* pega-se elementos diretamente das tags HTML*/

const element = document.getElementsByTagName('h1')
console.log(element)

// querySelector()
/* pesquisa pelo seletor indicado, usa-se .nomeDaSeleção*/

const element = document.querySelector('.one')
console.log(element)

// querySelectorAll()
/* pesquisa-se pela node.list completa */

const elements = document.querySelectorAll('.one')
elements.forEach(el => console.log(el))