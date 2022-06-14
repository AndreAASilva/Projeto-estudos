var volks = {
    fabricante: 'VW'
}

var fox = {
    nome: 'Fox',
    placa: 'AAA-1111',
    
}

/*var gol = {
    nome: 'Gol',
    placa: 'AAA-2222',
    
}
*/

//Outra forma de criar um objeto já vinculado com o prototype é:

var gol = Object.create(volks)
//Adiciono os demais itens separadamente
gol.nome = 'Gol'
gol.placa = 'AAA-2222'

console.log('fox', fox)
console.log('gol', gol)

console.log(Object.getPrototypeOf(fox) === Object.getPrototypeOf(gol))

//Aqui como não foi desviado o prototype para os objetos ele vai imprimir undefined

/*console.log('fox.fabricante', fox.fabricante)
console.log('gol.fabricante', gol.fabricante)
*/

//Para definir um prototype em um objeto utillizamos o seguinte código informado que quero que o objeto fox receba o prorotype volks:
//Essa é uma das formas de tranformar o prototype, pois neste caso foi feito apenas para o FOX, o GOL ainda não foi modificado.
Object.setPrototypeOf(fox, volks)

console.log('fox.fabricante', fox.fabricante)
console.log('gol.fabricante', gol.fabricante)


//Se pedimos pra imprimir as propriedados dentro do objeto, ele não vai nos informar a propriedado do prototype modificado, isso é uma caracteristica dele.

//Porém eu posso solicitar de forma separada como está no código abaixo
console.log('toString do fox: ', fox, volks)