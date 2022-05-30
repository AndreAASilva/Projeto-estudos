//Adicionando elemntos no Array

var emails = []

console.log(emails)

emails.push('andre@email.com', 'andreza@email.com')

console.log(emails)

emails.push('amanda@email.com')

console.log(emails)
console.log(emails.length)

//O push insere o elemento por último, para inserir em primeiro utilizamos o unshift

emails.unshift('alice@email.com')

console.log(emails)

//Para remover o primeiro elemento utilizamos o shift

emails.shift()
console.log(emails)

//Para remover ultimo elemento utilizamos o POP

emails.pop()
console.log(emails)

//Obs.: Para inserir uma lista de itens com vários de uma única vez, devemos separar cada item por vírgula

emails.push('nina@gamil.com', 'ravena@gmail.com', 'boomer@gmail.com')

console.log(emails)

emails.pop() //removendo o último email

console.log(emails)