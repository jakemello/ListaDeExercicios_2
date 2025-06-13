// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

/**
 * @param {number} n - O número para o qual o fatorial será calculado.
 * @returns {number} O fatorial de n.
 * @throws {Error} Se n for um número negativo.
 */
function fatorial(n) {
  // Caso base: se n for negativo, lança um erro
  if (n < 0) {
    throw new Error("Não é possível calcular o fatorial de um número negativo")
  }

  // Caso base: o fatorial de 0 é 1
  if (n === 0) {
    return 1
  }

  // Passo recursivo: n * fatorial(n - 1)
  return n * fatorial(n - 1)
}

// Exemplos
console.log("\n Exercício 4: Fatorial Recursivo")

// Testes com números válidos
console.log(`Fatorial de 5: ${fatorial(5)}`) 
console.log(`Fatorial de 0: ${fatorial(0)}`) 
console.log(`Fatorial de 1: ${fatorial(1)}`) 
console.log(`Fatorial de 3: ${fatorial(3)}`) 

// Teste com número negativo (deve lançar um erro)
try {
  console.log(`Fatorial de -3: ${fatorial(-3)}`) // Esta linha não será executada
} catch (e) {
  console.error(`Erro ao tentar calcular fatorial de -3: ${e.message}`)
}