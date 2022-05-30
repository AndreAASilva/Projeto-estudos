//Nesta aula eu quero comparar os objetos

var joao = {
    nome: 'João',
    nomeA: function(objnome){
        return this.nome === objnome.nome
    },
    idade: 25,
    estadoCivil: 'Casado',
    estadoCivilA: function(objCivil){
        return this.estadoCivil === objCivil.estadoCivil
    },
    email: 'teste@email.com',
    igualA: function (obj){
        //Retorne se este email deste objeto(por isso o this) é igual ao obj.email que será perguntado
        return this.email === obj.email

    },
    idadeA: function(objIda){
        return this.idade === objIda.idade
    } 
}

var maria = {
    nome: 'João',
    idade: 24,
    estadoCivil: 'Solteira',
    estadoCivilA: function(objCivil){
        return this.estadoCivil === objCivil.estadoCivil
    },
    email: 'teste@email.com.',
    igualA: function(obj){
        return this.email === obj.email 
    }


}

var andre = {
    nome: 'André',
    idade: 23,
    estadoCivil: 'Casado',
    estadoCivilA: function(objCivil){
        return this.estadoCivil === objCivil.estadoCivil
    },
    email: 'teste@email.com.',
    igualA: function(obj){
        return this.email === obj.email 
    }
}

console.log('Os usuários tem nome iguais?', joao.nomeA(maria))
console.log('As idades de João e Maria são identicas?', joao.idadeA(maria && andre))
console.log("O estado civil de Maria e João são iguais?", joao.estadoCivilA(maria))


//Verificar no objeto joao.igualA é identdico a o email de maria
console.log('O e-mail de João e Maria são iguais?', joao.igualA(maria))
console.log('O e-mail de Maria e João são iguais?', maria.igualA(joao))

if(joao.igualA(maria)){
    console.log("E-mails identicos")

}else{
    console.log('E-mails diferentes')
}
