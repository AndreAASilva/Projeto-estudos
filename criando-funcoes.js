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