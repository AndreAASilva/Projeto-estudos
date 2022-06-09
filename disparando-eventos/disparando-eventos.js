$(function(){

    var atividade = $('#atividade')
    var listaAtividades = $('#lista-atividades')

    atividade.on('keyup', function(e){
        var keyCode = e.keyCode

        if(keyCode === 13){

            //Dispara o evento...
            //O nome do envento que está sendo disparado pode ser qualquer nome, foincolocado enter por representar a tecla que vai disparar o evento (enter 13) e em seguida os dados que precisa
            atividade.trigger('enter', atividade.val())
            //Limpa o campo após teclar o enter
            atividade.val('')


        }


    })

    atividade.on('enter', function(evento, texto){
        listaAtividades.prepend('<li>' + texto + '</li>')
    })


})