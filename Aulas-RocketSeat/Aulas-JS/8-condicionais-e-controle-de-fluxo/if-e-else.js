// if...else

// let temperature = 36.5

// if(temperature >= 37) {
//     console.log('Febre alta')
// }else if(temperature < 37.5 && temperature >= 37) {
//     console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }

let temperature = 36.5
let highTemperature = temperature >= 37
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta!')
}else if(mediumTemperature) {
    console.log('Febre moderada')
}else {
    console.log('Saudável :)')
}