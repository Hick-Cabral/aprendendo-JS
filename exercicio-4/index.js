const turista = prompt("Olá Turista, qual é o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt ("Você já visitou alguma cidade?\n (Sim/Não)")

while (continuar === "Sim"){
    let cidade = prompt("Qual cidade foi visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? \n (Sim/Não)") 
}

if (contagem <= 1){
    alert("Turista: " + turista +
         "\nQuantidade de cidade visitada: " + contagem + " cidade" +
        "\nCidade visitada:\n"+ cidades)
}else{
    alert("Turista: " + turista +
        "\nQuantidade de cidades visitadas " + contagem + " cidades" +
       "\nCidades visitadas:\n"+ cidades)
}

