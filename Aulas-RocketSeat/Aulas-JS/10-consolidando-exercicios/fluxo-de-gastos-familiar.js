/* ### Fluxo de gastos familiar


Crie um objeto que possuirá 2 prorpiedades, ambas do tipo array:

    * receitas: []
    * despesas: []

Agora, crie uma função que ira calcular o total de receitas e despesas e ira mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

    let conta_de_agua = 80
    let conta_de_luz = 300
    let aluguel_de_casa = 480
    let internetCelular = 160
    let compras_do_mes = 800
    let cigarro_do_mes = 255
    let limpeza_de_casa = 240
    let academia = 80
    
    
    let salario = 3000
    let seguroDesemprego = 1100

    
    
    const familiarOutputs = [
        conta_de_agua,
        conta_de_luz,
        aluguel_de_casa,
        internetCelular,
        compras_do_mes,
        cigarro_do_mes,
    ]
    
    const familiarImputs = [
        salario,
        seguroDesemprego,
    ]


    function sum(array) {
        let total = 0

        for(let value of array) {
            total += value
        }

        return total
    }
    
    function calculateBalance() {
        const calculateImputs = sum(familiarImputs)
        const calculateOutputs = sum(familiarOutputs)
        
        const total = calculateImputs - calculateOutputs

        const positivo =  total >= 0

        let balanceText = "Negativo"

        if (positivo)
        balanceText = "Positivo"
    
        console.log(`Seu saldo ${balanceText} é de: R$${total.toFixed(2)}`)
    }


    calculateBalance()