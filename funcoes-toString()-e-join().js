var carros = ['Celta', 'Fox', 'Gol']

//Com o toString ele vai chamar a relação informada no array de uma vez separado por vígula

console.log(carros.toString())

//Posso criar uam variável para chamar a lista de outra forma

var c = carros.toString()

console.log(c)

//Com o join() podemos definir o marcador de separação como desejarmos 

console.log(carros.join(' - '))
console.log(carros.join( ' * '))
console.log(carros.join(' --> '))
console.log(carros.join(', '))