// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.


const prompt = require('prompt-sync')()

function jogoDeAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1
  let tentativas = 0
  let palpite 

  console.log("\n Jogo de Adivinhação")
  console.log("Tente adivinhar o número secreto entre 1 e 100.")

  while (palpite !== numeroSecreto) {
    const inputPalpite = prompt('Qual é o seu palpite? ')
    palpite = parseInt(inputPalpite, 10)

    tentativas++

    if (isNaN(palpite)) {
      console.log("Isso não é um número. Por favor, digite um número válido.")
      continue
    }

    if (palpite < numeroSecreto) {
      console.log("Mais alto!")
    } else if (palpite > numeroSecreto) {
      console.log("Mais baixo!")
    } else {
      console.log(`\nParabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`)
    }
  }
}

jogoDeAdivinhacao()