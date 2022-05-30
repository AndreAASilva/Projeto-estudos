//No Array podemos colocar qualquer tipo de dados, até objetos

var acessorio = {som: 'Pioneer', banco: 'Couro'}

var ligar = function(a)/*Criando um parâmetro*/{
    console.log('Ligando o carro...', a /*Quando eu chamar a função na parte de baixo do código dentro dos parenteses escrevi um pequeno teste que vai ser impresso após o testo do console.log */)
}

var liguei = function(){
    console.log('Liguei o carro...')
}

var testando = function(){
    console.log('Testes realizados')
}

//string / number / objeto / função
var fox = ['Fox', 4, acessorio, ligar, liguei, testando]

console.log(fox)

//Acessando as posições

console.log(fox[2])
console.log(fox[2].banco)

//Pra executar uam função abrimos e fechamos parenteses / O console.log para imprimir o que foi pedido já está dentro da função neste exemplo, apenas vamos executar com o código abaixo:

fox[3]('agora!')
fox[4]()
fox[5]()