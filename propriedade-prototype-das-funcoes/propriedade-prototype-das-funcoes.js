// A função pode ser feita de duas formas que vai ter o mesmo resultado
// function Carro(nome, placa){}

var Carro = function(nome, placa){
    this.nome = nome
    this.placa = placa
    //this.fabricante = 'VW'
    

}

//O prototype é um objeto da função, então diferente da aula funções construtoras eu posso montar o código desta forma, retirando o fabricante de dentro da função:

Carro.prototype.fabricante = 'VW'

Carro.prototype.ligar = function(){
    console.log('Ligando o carro...')
}

var fox = new Carro('Fox', 'AAA-1111')
console.log('fox', fox)

var gol = new Carro('Gol', 'AAA-2222')
console.log('gol', gol)

console.log('fox.fabricante', fox.fabricante)
console.log('gol.fabricante', gol.fabricante)

fox.ligar() //Chamando Função
gol.ligar() //Chamando função


/* Outro Exemplo */

function Empresa(cargo1, cargo2, cargo3){
    this.cargo1 = cargo1
    this.cargo2 = cargo2
    this.cargo3 = cargo3
    this.cargo4 = 'Gerente'
}

var funcionario = new Empresa('Técnico', 'Supervisor', 'Coordenador')

console.log(funcionario)