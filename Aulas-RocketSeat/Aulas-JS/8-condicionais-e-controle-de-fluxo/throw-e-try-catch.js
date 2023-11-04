// throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Nome é obrigatório')
    }

    console.log(name)
}

// try...catch

try {
    sayMyName('Juan')
} catch(e) {
    console.log(e)
}