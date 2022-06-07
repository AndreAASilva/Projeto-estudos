console.log('Carregando...')
//Fazendo ligação com os IDs total e valor do HTML
var valorElement = document.getElementById('valor')
var totalElement = document.getElementById('total')

valorElement.addEventListener('keyup', function(e)//keyup quando retiramos o dedo do teclado ele dispara o evento abaixo iniciando na função 

    var total = 0
    var valor = parseFloat(valorElement.value ? valorElement.value : 0) /* Neste exemplo da aula o value é uma string que gerou NaN quando o valor fica 0 no label, pois ele é uma string vazia que é false, então eu modifico e informo com um operador ternário, se o valorElement.value for true eu deixo com o mesmo, se for false eu deixo com o valor zero (0)*/ 
    //parseFloate é uma função que converte string em number

    if(valor > 0 && valor < 10){
        total = valor + valor * 0.3 + 5;

    }else if(valor >= 10 && valor < 50){
        total = valor + valor * 0.1 + 2
    }else{
        total = valor;
    }

    totalElement.innerHTML = total;
})
