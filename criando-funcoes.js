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

