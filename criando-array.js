//Criando arrays, lembrando que sempre inciam com a posição zero (0). 

var emails = [];
emails[0] = 'joao@email.com';
emails[1] = 'maria@email.com';

console.log('Email [0]', emails[0])
console.log('Email [1]', emails[1])

var nomes = ['Maria', 'João']

console.log('Quantos nomes tem no Array?', nomes.length)

//Inserindo um item ao array

nomes[2] = 'André'

console.log('Quantos nomes tem no Array?', nomes.length)

//As posições são pré-definidas então se eu inserir um novo elemento ao array numa posição acima das que já tem alguma coisa ele vai contar como se nestes intervalos houvessem alguma coisa. No exemplo abaixo inseri o nome na posiçã0 5 do array, porém antes só tinhamos três nomes, posição 0, 1 e 2, ele vai considerar quando defino a posição 5 que as posições 3 e 4 estão ocupadas e ao mesmo tempo disponíveis.

nomes[5] = 'Amanda'

console.log('Quantos nomes tem após inserir Amanda?', nomes.length)