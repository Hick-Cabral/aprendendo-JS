const numero = prompt("Olá, eu sou o Robô da Tabuada" + "\nInforme o número que você deseja calcular na tabuada")

let resultado = ""

for(let fator = 1; fator <= 20; fator++){
    resultado += "->" + numero + " x " + fator  + " = " + (numero * fator) + "\n"
}

alert("Resultado da Tabuada " + numero + ":\n\n" + resultado)
