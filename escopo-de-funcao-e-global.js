var nome = "AlgaWorks" //Variável global

var capitalizar = function(){
    //nome é uma variável local à função capitalizar
    var nome = "AlgaWorks".toUpperCase();
}

//Necessário chamar a função fora da função
capitalizar();
console.log("nome", nome)

var capitalizar2 = function(){
    nome = "AlgaWorks".toUpperCase();
}

//Necessário chamar a função fora da função, se não atribuir a função neste exemplo ele vai utilizar a variável global fora da função
capitalizar2();
console.log("nome2", nome)