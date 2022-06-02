
$(function(){
    //Variável para o checkbox principal
    var selecaoTodosUsuarios = $('#selecao-todos-usuarios')
    //Variável para os checkbox individuais
    var selecaoUsuarios = $('.js-selecao-usuario')

    selecaoUsuarios.on('click', function(){
        //Verifica se todos os checkbox estão selecionados 
        var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length

        //Valido o preenchimento do checkbox princiapl com o preenchimento de todos os individuais
        var checked = selecaoUsuarios.length === totalUsuariosSelecionados
        selecaoTodosUsuarios.prop('checked', checked)
    })

    //Aqui foi inserida a função que seleciona ou não todos os checkbox caso o principal seja ou não selecionado
    selecaoTodosUsuarios.on('click', function(){
        selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'))
    })
    
});