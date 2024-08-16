const veiculo1 = prompt("Informe o nome do primeiro veiuculo:")
const velocidade1 = parseFloat(prompt ("Informe a velociade do veiculo:"))

const veiculo2 = prompt("Informe o nome do primeiro veiuculo:")
const velocidade2 = parseFloat(prompt("Informe a velociade do veiculo:"))

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rapido do que " + veiculo2)
} else if (velocidade2 > velocidade1) {
    alert(veiculo2 + "É mais rapido do que " + veiculo1)
} else {
    alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais")
}