var joao = {
    nome: 'Joao',
    idade: 25,
    endereco: {
        logradouro: 'Av Brasil',
        numero: 100,
        complemento: 'Apto 33',
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
}

//Eu quero pegar dentro do OBJETO joao as propriedades e entregar na variável informada, no caso deste exemplo na variável PROP
// Também podemos pegar os dados de cada objeto

for (var prop in joao){
    //console.log(prop)
    console.log(prop, '-->', joao[prop])

    if(prop === 'idade'){
        console.log('Achei Idade')

    }
}