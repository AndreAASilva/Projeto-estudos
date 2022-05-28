//Como apagar uma propriedade de um Objeto
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

//Aqui foi inserido um novo item ao objeto
joao.endereco.cep = "01000-000" 

console.log(joao.endereco)

//Para apagar uma propriedade utilizamos a palavra DELETE

delete joao.idade

console.log(joao)

joao.idade = 26

console.log(joao)

delete joao.endereco.estado;

console.log(joao.endereco)

delete joao.endereco.cidade

console.log(joao.endereco)

joao.endereco.cidade = 'Rio de Janeiro'
joao.endereco.estado = 'RJ'

console.log(joao.endereco)

joao.peso = '100 kl'

console.log(joao)

joao.peso = 100

console.log(joao)

joao.peso = '100 kl'

console.log(joao)

joao.dentes = 'Todos'

console.log(joao)

joao.dentes = 'Quase todos'

console.log(joao.dentes)
console.log(joao)

joao.dadosMedicos = {
    altura: 1.80,
    peso: 100,
    corDosOlhos: 'Azul',
    dentes: 'Todos'

}

console.log(joao.dadosMedicos)
console.log(joao.endereco, joao.dadosMedicos)


joao.estadoCivil = {
    casado: 'Sim',
    conjuje: 'Maria',
    filhos: 02,
    filho01: 'Joaquim',
    filho02: 'Maria'
}

console.log(joao.estadoCivil)
console.log(joao.dadosMedicos)

joao.filhos = {
    nome01: 'Joaquim',
    idade01: 10,
    nome02: 'Maria',
    idade02: 08
}

console.log(joao.estadoCivil, joao.filhos)

delete joao.filhos.nome02

console.log(joao.filhos)

joao.filhos.nome02 = 'Maria'

console.log(joao.filhos)

joao.filhos.idade01 = 11

console.log(joao.filhos)

joao.filhos = {
    nome03: 'Pedro',
    idade03: 15
}

console.log(joao.filhos)

delete joao.filhos.nome03
delete joao.filhos.idade03

console.log('-->', joao.estadoCivil)

joao.filhos = {
    nome01: 'Maria',
    idade01: 10,
    nome02: 'Pedro',
    idade02: 09,
    nome03: 'Joaquim',
    idade03: 02
}

console.log(joao.filhos)

joao.filhos.nome04 = 'Larissa'
joao.filhos.idade04 = 15

console.log(joao.filhos.nome01, joao.filhos.nome02, joao.filhos.nome03, joao.filhos.nome04)

joao.filhos.nome05 = 'André'
joao.filhos.idade05 = 20

console.log(joao.filhos.nome05)

joao.netos = {
    neto01: 'Alvaro',
    neto02: 'Henrique'
}

console.log(joao.netos)

var andre = {
    altura: 1.80,
    peso: 101,
    logradouro: {
        endereco: 'Avenida Braz Leme',
        numero: 131,
        bairro: 'Santana',
        cidade: 'São Paulo',
        estado: 'SP',

    },
    conjuje: {
        nomeConjuje: 'Dreza',
        alturaConjuje: 1.69,
        pesoConjuje: 60,
    }


}

console.log(andre.logradouro)
console.log(andre.conjuje)
