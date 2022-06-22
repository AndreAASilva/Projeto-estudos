function Carro(nome, placa){
    //No exemplo o this passa a ser o fox do call
    this.nome = nome
    this.placa = placa
}

//var fox = new Carro('Fox', 'AAA-1111')

//call é uma função dentro da função

var fox = {}
var gol = {}
//Chamei a função carro porém eu quero que vc use a função fox como contexto, o this passa a ser o fox e em seguida vem os parâmetros
Carro.call(gol, 'Gol', 'AAA-1111')


//O apply no lugar do call modifica a forma como inserimos os parâmetros dentro do objeto, eles se tornam arrays
Carro.apply(fox,['Fox', 'AAA-2222'])

console.log(fox)
console.log(gol)