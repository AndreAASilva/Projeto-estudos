$(function(){

    /*$('#botao1').on('click', function(){
        console.log('Botão 1 clicado')


    })*/

    $('#link1').on('click', function(e){
        //Aqui com o preventDefault() eu estou impedindo que a função execute quando o link for clicado, o sistema reconhece o click, porém não abre o link informado neste caso. EVENTO CRIADO PARA TESTES DA AULA
        e.preventDefault()
        console.log("Clicado")
    })

    $('#input1').on('keyup', function(e){
        console.log(e.keyCode) //Aqui eu estou imprimindo o código da tecla que estou apertando no teclado, eu visualizo no inspecionar do navegador. OBS.: Informação importante para utilizar em alguns códigos se necessário.
        //Neste exemplo abaixo sobe um alert quando o usuário aperta o ENTER 
        if(e.keyCode === 13){
            alert("ENTER Precionado")

        }
    })
})

//Obs.: Evitar usar esse tipo de formato, pois mistura códigos, pois, inserimos código JS no HTML
function botao1Clicado(){
    console.log('Botão 1 clicado')
}



function botao2(){
    
    //var testeBTN2 = document.getElementById('testebotao2')
   
    testebotao2.innerHTML = '<p>Mudou</p>'
    testebotao2.innerHTML += 'Mudou também'

    
}

function btnVoltar(){

    var testeVoltar = document.getElementById('testebotao2')

    testeVoltar.innerHTML = 'Testou o botão voltar'
}

function btn3(){

    //var btn3 = documento.getElementById('botao3')

    alert('Testou')
}

function listaNomes(){
var testeLista = {Nome1:'André', Nome2:'Andreza', Nome3:'Amanda', Nome4:'Alice'}

if(testeLista.Nome2 === "Andreza"){
    var nome = alert(nome)

}else{
    alert('Não encontrado')
}

}