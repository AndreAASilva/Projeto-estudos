/*var fox = {
    nome: 'Fox',
    placa: 'AAA-1111',
    fabricante: 'VW'
}

var gol = {
    nome: 'Gol',
    plac: 'AAA-2222', //Item digitado errado
    fabricante: 'VW'
}

console.log('Gol', gol)

//Caso eu digite o item de forma errada e pesquiso por ele da forma correta, vou receber undefined
console.log('gol.placa', gol.placa)*/

//Podemos criar uma função para vários objetos com os mesmos parâmetros e não ficar repetindo códigos e evitar os erros de escrita que podem acontecer

var criarCarroVolks = function(nome, placa, ano){
    //Os itens que serão inseridos no objeto devem estar informados dentro da função, caso não estejam e sejam incluídos no return ele vai gerar erro no código. Excessão do item com o valor já definido que neste exemplo é o fabricante
    
    return{
        nome: nome,
        placa: placa,
        ano: ano,
        fabricante: 'VW'//Como é o mesmo fabricante neste exemplo, podemos deixar definido
    }

}

var fox = criarCarroVolks('Fox', 'AAA-1111', 2018)
console.log('fox', fox)

var gol = criarCarroVolks('Gol', 'AAA-2222', 2017)
console.log('gol', gol)

var criarEmpresa = function(coordenador, supervisor, tecnico){
    return{
        coordenador: coordenador,
        supervisor: supervisor,
        tecnico: tecnico,
        gerente: 'Mário'
    }

}

var funcionarios = criarEmpresa('Antonio','Caio', 'Augurto')

console.log(funcionarios)


var feira = function(fruta1, fruta2, fruta3){
    return{
        fruta1: fruta1,
        fruta2: fruta2,
        fruta3: fruta3,
        fruta4: 'mamão'
    }

}

var frutas = feira('maçã', 'uva', 'banana')

console.log(frutas)

delete frutas.fruta1 //deletando um item do objeto

console.log(frutas)


var carroGM = function(nome, ano, placa, ){
    return{
        nome: nome,
        ano: ano,
        placa: placa,
        fabricante: 'GM'
    }
}

var carro = carroGM('Celta', 2010, 'AAA-2222')

console.log('Carro da GM:', carro)