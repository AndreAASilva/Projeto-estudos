var nomes = ['João', 'Maria', 'André', 'Andreza']

//Fazendo a busca de todos os itens dentro do array
for (var i = 0; i < nomes.length; i++){
    console.log(i, ' = ', nomes[i])
}

//ForEach é uma função e por isso abrimos e fechamos parenteses
//O forEach recebe uma nova função dentro dele
//A função criada dentro da função forEach vai receber o elemento o Array

nomes.forEach(function(eleArray)/*Elemento do Array, ou seja, os nomes inseridos dentro do Array nomes*/{
    console.log(eleArray)
})

var carros = ['Celta', 'Gol', 'Saveiro', 'Fusca']

console.log(carros)

carros.forEach(function(elementoCarros){
    console.log(elementoCarros)
})


