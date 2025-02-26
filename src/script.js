function calcularIdade() {

    let anoDigitado = document.getElementById("anoNascimento").value

    idade = 2025 - anoDigitado
    
    console.log(idade)

    document.getElementById("resultado").innerHTML = `A idade é: ${idade}`
}

// Novas implementações (Tarefas pra próxima aula)
// - Utilizar o ano atual para fazer a conta
// - Aceitar apenas ano maior que 1900.
// - Não permitir ano maior que o o input seja vazio