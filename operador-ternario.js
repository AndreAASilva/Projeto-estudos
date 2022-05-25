/*var temFoto = false;
// se tem foto: perfil.jpg
// se não tem foto: mock-perfil.jpg
//<img src"pathFoto">

var pathFoto = '';
if(temFoto){
    pathFoto = 'maria-perfil.jpg';
}else{
    pathFoto = 'mock-perfil.jpg';
}

console.log('path da foto', pathFoto);

//Operador Ternário / Muito utilizado para perguntas simples como no exemplo onde quero saber se é verdadeiro ou falso

var temFoto = true;
var pathFoto = temFoto ? 'maria-perfil.jpg' : 'mock-perfil.jpg'
console.log('path da foto', pathFoto)


var campo = "re";

if(campo){
    console.log("Dados inseridos")

}else{
    console.log("Preencha o campo!")
}

*/

function testeTernario(){

    var clicar = document.getElementById("testeAlerta");
    
    
    if(clicar.value == ""){
        alert("Preencha o campo")
    
    }else{
        alert("Obrigado")
    }
    
    
    }


    