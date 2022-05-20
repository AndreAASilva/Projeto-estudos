// FOR é sempre dividido em três partes, inicialização, comparação e incremento
/*var mult = 2

for(var i = 0; i < 11; i++){
    console.log(mult, 'X', i, '=', i*mult)
    
}
console.log('')
console.log('Taboada')
console.log('')
var mult3 = 3

for(var a = 0; a < 11; a++){
    
    console.log(mult3, 'x', a, '=', a*mult3)

}

console.log('')
console.log('Loop')
console.log('')

//loop infinito
var l = 0
for(;;){
    console.log('->', l++)

    if(l === 11){
        break;
    }
}

var idade = 17;

if(idade < 16){

    console.log("Não vota!");
    
}else if(idade >= 16 && idade <= 17 || idade >=65){
    console.log("Voto opcional!");
    
}else{
    console.log("Voto Obrigatório!");
}*/



var idade = 100

if(idade <= 15){
    console.log("Não pode votar!")

}else if(idade >= 16 && idade <=17 || idade >= 65){
    console.log("Voto opcional!")
}else{
    console.log("Voto obrigatório!")
}