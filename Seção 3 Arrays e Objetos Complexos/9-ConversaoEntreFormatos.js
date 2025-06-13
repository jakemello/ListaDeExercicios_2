// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.


/**
 * @param {Array<Array>} pares - Um array de arrays, onde cada sub-array é um par [chave, valor].
 * @returns {Object} O objeto equivalente.
 */
function paresParaObjeto(pares) {
  const obj = {} // Inicializa um objeto vazio

  // Itera sobre cada par no array
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i] // Desestrutura o par em chave e valor
    obj[chave] = valor // Atribui o valor à chave correspondente no objeto
  }

  return obj
}

/**
 * @param {Object} obj - O objeto a ser convertido.
 * @returns {Array<Array>} Um array de arrays, onde cada sub-array é um par [chave, valor].
 */
function objetoParaPares(obj) {
  const pares = [] // Inicializa um array vazio para armazenar os pares

  // Itera sobre as chaves do objeto
  // Object.keys(obj) também pode ser usado, mas o 'for...in' é mais tradicional para iterar sobre propriedades
  for (const chave in obj) {
    // Garante que a propriedade pertence ao próprio objeto e não à sua cadeia de protótipos
    if (Object.prototype.hasOwnProperty.call(obj, chave)) {
      pares.push([chave, obj[chave]]) // Adiciona o par [chave, valor] ao array
    }
  }

  return pares
}

// Exemplos
console.log("\n Exercício 9: Conversão Entre Formatos")

// Exemplo de paresParaObjeto
const meusPares = [
  ["nome", "João"],
  ["idade", 30],
  ["cidade", "São Paulo"],
  ["ativo", true]
]
const objetoConvertido = paresParaObjeto(meusPares)
console.log("Pares para Objeto:", objetoConvertido)


// Exemplo de objetoParaPares
const meuObjeto = {
  produto: "Laptop",
  preco: 4500.00,
  estoque: 50,
  disponivel: true
}
const paresConvertidos = objetoParaPares(meuObjeto)
console.log("Objeto para Pares:", paresConvertidos)

// Testando com objetos e arrays vazios
console.log("\nTestando com vazios:")
console.log("Pares vazios para Objeto:", paresParaObjeto([])) 
console.log("Objeto vazio para Pares:", objetoParaPares({})) 