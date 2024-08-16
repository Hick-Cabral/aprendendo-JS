const primeironome = prompt("Informe o primeiro nome do recruta: ")
const sobrenome = prompt("Informe o sobrenome: ")
const campoDeEstudo = prompt ("Digite o campo de Estudo: ")
const anoDeNascimento = prompt ("Digite seu ano de nascimento: ")

alert(

    "Recruta cadastrado com sucesso!\n" +
    "\n Nome Completo: " + primeironome + " " + sobrenome +
    "\n Campo de Estudo: " + campoDeEstudo +
    "\n Idade: " + (2024 - anoDeNascimento)
)