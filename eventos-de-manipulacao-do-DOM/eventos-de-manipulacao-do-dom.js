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