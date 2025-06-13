// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

/**
 * @param {string} str - A string de entrada.
 * @returns {string[]} - Um array contendo as palavras únicas.
 */
function extrairPalavrasUnicas(str) {
  // Converte a string para minúsculas e divide por um ou mais espaços
  const palavras = str.toLowerCase().split(/\s+/)
  const palavrasUnicas = []

  for (let i = 0; i < palavras.length; i++) {
    const palavraAtual = palavras[i]
    let jaExiste = false

    // Verifica se a palavra atual já está no array de palavras únicas
    for (let j = 0; j < palavrasUnicas.length; j++) {
      if (palavraAtual === palavrasUnicas[j]) {
        jaExiste = true
        break
      }
    }

    if (!jaExiste) {
      palavrasUnicas.push(palavraAtual)
    }
  }

  return palavrasUnicas
}

// Exemplos
console.log("\n Exercício 3: Palavras Únicas")

const frase1 = "olá olá mundo mundo"
console.log(`Frase: "${frase1}" -> Palavras únicas: ${extrairPalavrasUnicas(frase1)}`)

const frase2 = "JavaScript e javascript são diferentes?"
console.log(`Frase: "${frase2}" -> Palavras únicas: ${extrairPalavrasUnicas(frase2)}`)

const frase3 = "É Bolacha ou Bixxcoito?"
console.log(`Frase: "${frase3}" -> Palavras únicas: ${extrairPalavrasUnicas(frase3)}`)