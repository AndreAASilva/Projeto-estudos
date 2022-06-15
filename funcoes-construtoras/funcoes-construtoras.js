//Função construtora é uma forma diferente de criar um objeto. Obs.: parecido com a função fábrica da aula passada.

var Carro = function(nome, placa){
    //Inserimos o THIS para armazenar o objeto dentro da função que vai refenciar o objeto que estamos criando com o NEW
    this.nome = nome
    this.placa = placa
    this.fabricante = 'VW'

}

//Invés de chamar a função colocamos o NEW
var fox = new Carro('Fox', 'AAA-1111')

console.log(fox)

var Empresa = function(supervisor, coordenador){

    this.supervisor = supervisor
    this.coodenador = coordenador
    this.gerente = 'Flávio'

}

var colaboradores = new Empresa('Mauro', 'Paulo')

console.log(colaboradores)