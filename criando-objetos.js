//Criando objetos
let fox = {cor: 'Prata', modelo: 'Fox'}

console.log(fox)

//Formas de acessar o objeto

console.log('Cor do Fox:', fox.cor)
console.log('Modelo do Carro:', fox.modelo)

//Alterando objeto

fox.cor = 'Branco'

console.log(fox)

//Acessando a propriedade por strings

console.log('Modelo:', fox['modelo'])

//Adicionando propriedade no Objeto pronto

fox.peso = 1100
fox.frabricante = "VW"

console.log(fox)

//Pesquisando propriedade indexistente

console.log('Potência:', fox.potencia) //Retorna UNDEFINED


//Inserindo uma função no objeto

fox.ligar = function(){
    console.log("Ligando o carro!")
}
console.log(fox)
//Forma de chamar a função. Obs.: Não esquecer de utilizar os parenteses e desta forma ele vai chamar o console.log dentro da função neste caso:
fox.ligar()

var celta = {
    cor: 'Branco',
    modelo: 'Celta',
    fabricante: 'GM',
    ligar: function(){
        console.log('Ligando outro carro')
    }

}
console.log(celta)
celta.ligar()
