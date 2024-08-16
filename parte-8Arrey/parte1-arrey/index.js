const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)


//Adicionar Elementos usando:
//push
//permite adicionar o elemento em ultimo item da lista

arr.push("Boromir")
console.log(arr)

//unshift
//Permite adicionar o elemento em primeiro item da lista

arr.unshift("Teste")
console.log(arr)

//Remover elementos no final da arrey
//pop

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//Remover o primeiro elemento
// shift

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//Pesquisar por um elemento
//includes
//Se ele está incluido no arrey, se ele existe

const inclui = arr.includes("Pippin")
console.log(inclui)

//indexof
//para pesquisar o indice do arrey

const indice = arr.indexOf("Pippin")
console.log(indice)

//Cortar e Concatenar os arrey
//slice = cortar

//const hobbits = arr.slice(0, 4)
const stibboh = arr.slice(-4) //pegando do final
console.log(stibboh)
//console.log(arr)
//console.log(hobbits)