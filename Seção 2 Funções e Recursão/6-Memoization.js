// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

/**
 * @param {Function} fn - A função a ser memoizada. Deve ser uma função "pura"
 * (retorna sempre o mesmo resultado para os mesmos inputs).
 * @returns {Function} Uma nova função memoizada.
 */
function memoize(fn) {
  const cache = {} // Objeto para armazenar os resultados em cache

  // Retorna a função memoizada
  return function(...args) {
    // Cria uma chave única a partir dos argumentos para acessar o cache
    // JSON.stringify é usado para garantir que arrays e objetos sejam tratados de forma consistente
    const key = JSON.stringify(args)

    // Se o resultado já está no cache, retorna-o imediatamente
    if (cache[key]) {
      console.log(`Retornando do cache para argumentos: ${key}`)
      return cache[key]
    } else {
      // Se não está no cache, executa a função original
      console.log(`Calculando e armazenando para argumentos: ${key}`)
      // Usa apply para garantir que 'this' e os argumentos sejam passados corretamente
      const result = fn.apply(this, args)
      cache[key] = result // Armazena o resultado no cache
      return result
    }
  }
}

// Exemplos
console.log("\n Exercício 6: Memoization")

// Exemplo de uma função que pode ser memoizada: cálculo de Fibonacci (recursivo)
// Esta função é computacionalmente cara para números grandes sem otimização
function fibonacci(n) {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// Cria uma versão memoizada da função fibonacci
const fibonacciMemoized = memoize(fibonacci)

console.log(`Fibonacci(10): ${fibonacciMemoized(10)}`) // Primeira chamada, calcula
console.log(`Fibonacci(10): ${fibonacciMemoized(10)}`) // Segunda chamada, retorna do cache
console.log(`Fibonacci(5): ${fibonacciMemoized(5)}`)   // Primeira chamada com novos argumentos
console.log(`Fibonacci(5): ${fibonacciMemoized(5)}`)   // Retorna do cache
console.log(`Fibonacci(10): ${fibonacciMemoized(10)}`) // Retorna do cache novamente

// Exemplo com múltiplos argumentos
function somaMultiplica(a, b) {
  console.log(`Calculando somaMultiplica(${a}, ${b})`)
  return (a + b) * a
}

const somaMultiplicaMemoized = memoize(somaMultiplica)

console.log(`\nSoma Multiplica (2, 3): ${somaMultiplicaMemoized(2, 3)}`)
console.log(`Soma Multiplica (2, 3): ${somaMultiplicaMemoized(2, 3)}`)
console.log(`Soma Multiplica (5, 1): ${somaMultiplicaMemoized(5, 1)}`)
console.log(`Soma Multiplica (2, 3): ${somaMultiplicaMemoized(2, 3)}`) 