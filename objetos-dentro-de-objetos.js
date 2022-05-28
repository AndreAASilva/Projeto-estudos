//Podemos criar objetos dentro de outro objeto, neste exemplo vamos criar um objeto joao e dentro dele o objeto endereço para ajustar informações semelhantes 

var joao = {
    nome: 'João',
    idade: 25,
    endereco: {
        logradouro: 'Av. Brasil',
        numero: 100,
        complemento: 'Apto 202',
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
}

console.log(joao)

//Acessando elementos dentro do objeto

console.log('João mora no', joao.endereco.cidade)

//Para alterar um valor do objeto:

joao.endereco.numero = 101

console.log(joao.endereco.numero)

joao.endereco.complemento = 'Apto 303'

console.log(joao.endereco.complemento)

joao.endereco.logradouro = 'Av. Brás Leme'

console.log(joao.endereco.logradouro, joao.endereco.numero, joao.endereco.complemento)

console.log(joao.endereco)