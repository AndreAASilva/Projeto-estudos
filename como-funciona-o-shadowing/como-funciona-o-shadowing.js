var volks = {
    fabricante: 'VW'
}

var fox = {
    nome: 'Fox',
    placa: 'AAA-1111',
    fabricante: 'GM'
}

/*
O shadowing vai procurar primeiro a propriedade dentro do objeto, caso não encontre ele vai para o prototype definido, se forem iguais ele vai considerar primeiro do objeto principal
*/ 
console.log('fox.fabricante:', fox.fabricante)
Object.setPrototypeOf(fox, volks)
console.log('fox.fabricante:', fox.fabricante)

console.log('fox', fox)

//Deletando a propriedade do objeto fox o objeto volks assume novamente
delete fox.fabricante
console.log('fox.fabricante -->', fox.fabricante)

console.log('fox', fox)

//FOR IN vai navega entre as propriedade e fazer a busca delas, neste caso como eu apaguei a propriedade fabricante do objeto ele já buscou em volks (prototype)
for(propriedade in fox){
    console.log(propriedade)
    //Para descobrir se a propriedade é dele mesmo basta inserir o código hasOwnProperty
    //Ao lado de cada propriedade ele vai apontar se é true é do objeto mesmo, caso false é do outro objeto

    console.log(propriedade, fox.hasOwnProperty(propriedade))
}