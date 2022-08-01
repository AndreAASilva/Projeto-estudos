//Formas de criar funções
//function declaration
function somar(a, b, c, d){
    return a+b+c+d;
}

// function expression
var subtrair = function(e,f){
    return e-f;
}

var soma = somar(3,3,3,3)
console.log('3 + 3 + 3 =', soma)

var subtraido = subtrair(7,6)
console.log('7 - 6 =', subtraido)

function nomes(nome1,nome2,nome3){
    return nome1+nome2+nome3
}

var todos = nomes('André', ' Anderson', ' Alves')
console.log(todos)

function myFunction(a, b) {
    return a * b;
    
    
  }
  
  var x = myFunction(4, 3);
  console.log(x);

 
  function myFunction(y){
    return y*y
  }

  var result = myFunction(5)
  console.log(result)

  function nome(){
    return 'André Anderson'
    
        
  }

  var x = nome()
  console.log(x)

  function calculadora(x,y){
    return x*y
  }

  var res = calculadora(2,2)*3/2
  console.log(res)

  function tamanho(m,n,o,p){
    
    return arguments.length
  }

  var tam = tamanho(3,3,3,3)
  console.log(tam)

  function myFunction(x,y = 4){
    
    return x*y
  }

  var res = myFunction(2)
  console.log(res)


 //Aqui eu chamei o maior valor da função 
 function findMax(){
    let max = -Infinity
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i]
        }
    }
    return max

 }

 var maior = findMax(33,7,6)
 console.log(maior)

 //Somando todos os valores da função
 function sumAll(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum

}

var soma  = sumAll(3,3,3)
console.log(soma)

function myFunction (a,b){
  return a * b
}
var funcao = myFunction(2,4)
console.log(funcao)

var x = myFunc()

function myFunc(){
  return this
}

console.log(x)

/*function gerarAleatoria(tamanho){
  var stringAleatoria = ''
  var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  for (var i = 0; i < tamanho; i++){
    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres))
  }
  return stringAleatoria
}

console.log(gerarAleatoria(5))*/



const myObject = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function(){
    return this.firstName + " " + this.lastName
  }
}
var nome = myObject.fullName()
console.log(nome)

const meuFunc = {
  nome1: 'André',
  nome2: 'Anderson',
  nome3: 'Alves', 
  nome4: 'Silva',
  nomeCompleto: function(){
    return " => "+ this.nome1 + " " + this.nome2 + " " + this.nome3 + " " + this.nome4
  }
}

const aprendiz = meuFunc.nomeCompleto()
console.log(aprendiz)

const myObj = {
  firstName: 'José',
  lastName: 'Bezerra',
  fullName: function(){
    return this
  }
}

var result = myObj.fullName()
console.log(result)

const myName = {
  name1: 'Antonio',
  name2: 'Tadeu',
  nameCom: function(){
    return this.name1 + ' ' + this.name2
  }
}

var nameCompleto = myName.nameCom()
console.log(nameCompleto)


function myFuncti(arg1, arg2){
  this.firstName = arg1
  this.lastName = arg2
}

const myOb = new myFuncti('José', 'Aldo')

const resultadoNomes = myOb.lastName + " " + myOb.firstName

console.log(resultadoNomes)


//Com call(), um objeto pode usar um método pertencente a outro objeto.

const person = {
  fullName: function(){
    return this.firstName + ' '+ this.lastName
  }
}

const person1 = {
  firstName: 'Amanda',
  lastName: 'Silva'
}

const person2 = {
  firstName: 'Alice',
  lastName: 'Silva'
}

const nameChield = person.fullName.call(person2)
console.log(nameChield)


//O call()método pode aceitar argumentos:

const pessoa = {
  fullName: function(city, country){
    return this.firstName + ' ' + this.lastName + ' ' + city + ' ' + country
  }
}

const pessoa1 = {
  firstName: 'Wellington',
  lastName: 'Silva'
}

const pessoa2 = {
  firstName: 'Tota',
  lastName: 'Silva'
}

const nomeCompleto = pessoa.fullName.call(pessoa2, 'gosta', 'de Wellington')
console.log(nomeCompleto)
