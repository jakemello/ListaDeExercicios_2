// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

/**
 * @param {Function} fn - A função a ser "debounced".
 * @param {number} delay - O tempo em milissegundos para aguardar.
 * @returns {Function} Uma nova função que, quando chamada, aplica o debounce.
 */
function debounce(fn, delay) {
  let timeoutId // Armazena o ID do temporizador para poder limpá-lo

  // Retorna uma nova função que encapsula a lógica do debounce
  return function(...args) {
    // Limpa qualquer temporizador anterior. Isso "reinicia" o contador
    clearTimeout(timeoutId)

    // Define um novo temporizador. A função 'fn' será executada após o 'delay'
    // se 'clearTimeout' não for chamado antes disso (ou seja, se a função debounced não for chamada novamente)
    timeoutId = setTimeout(() => {
      fn.apply(this, args) // Executa a função original com o contexto e argumentos corretos
    }, delay)
  }
}

// Exemplos
console.log("\n Exercício 5: Debounce")

// Exemplo simples: uma função que apenas loga
const minhaFuncao = () => {
  console.log("Função 'minhaFuncao' executada!")
}

// Cria uma versão debounced da minhaFuncao com um delay de 500ms
const funcaoDebounced = debounce(minhaFuncao, 500)

console.log("Chamando funcaoDebounced várias vezes rapidamente...")
funcaoDebounced() // Primeira chamada, inicia um timer de 500ms
funcaoDebounced() // Segunda chamada, cancela o timer anterior e inicia um novo de 500ms
funcaoDebounced() // Terceira chamada, cancela o timer anterior e inicia um novo de 500ms

// Após um curto período, a função 'minhaFuncao' será executada apenas uma vez
setTimeout(() => {
  console.log("Esperando... a função debounced deve ter sido executada uma vez.")
}, 600) // Espera um pouco mais que o delay para ver o resultado

// Outro exemplo: testando com diferentes delays
const logComDelay = (mensagem) => {
  console.log(`Log: ${mensagem}`)
}

const logDebouncedCurto = debounce(logComDelay, 100)
const logDebouncedLongo = debounce(logComDelay, 1000)

console.log("\nTestando debounce com delays diferentes:")
logDebouncedCurto("primeiro (curto)")
logDebouncedCurto("segundo (curto)") // Esta deve ser a única a disparar após 100ms
setTimeout(() => logDebouncedCurto("terceiro (curto)"), 50) // Dispara antes do primeiro 100ms

logDebouncedLongo("primeiro (longo)")
setTimeout(() => logDebouncedLongo("segundo (longo)"), 200) // Dispara antes do primeiro 1000ms
setTimeout(() => logDebouncedLongo("terceiro (longo)"), 1500) // Dispara após o segundo 1000ms, então esta também será executada