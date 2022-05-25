var numero = -1;

//WHILE vai percorrer to percurso até o valor determinado a não ser se inserirmos um break como no exemplo abaixo
//OBS.: Não esquecer de inserir um incremento para não gerar um loop
while (numero <= 10){
    console.log('Número', numero)

    if(numero === 6){
        break; 
    /*Aqui com o while eu peço pra percorrer até o 10 porém com o if eu peço pra parar quando chegar no 6
     e podemos utilizar como exemplo básico para percorrer uma lista*/

    }
    numero++
}

/*
while(true){
    console.log("Loop infinito")
}

*/ 