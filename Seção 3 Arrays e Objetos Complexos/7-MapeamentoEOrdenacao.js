// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

/**
 * @param {Array<Object>} produtos - Um array de objetos de produto, cada um com 'nome' e 'preco'.
 * @returns {string[]} Um novo array contendo apenas os nomes dos produtos, ordenados pelo preço.
 */
function obterNomesOrdenadosPorPreco(produtos) {
  // 1. Cria uma cópia do array e ordena por preço crescente
  // O spread operator (...) cria uma nova array para não modificar a original
  // A função sort compara 'a.preco' com 'b.preco'
  const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco)

  // 2. Mapeia o array ordenado para extrair apenas os nomes dos produtos
  const nomes = produtosOrdenados.map(produto => produto.nome)

  return nomes
}

// Exemplos
console.log("\n Exercício 7: Mapeamento e Ordenação")

const produtos = [
  { nome: "TV", preco: 1500 },
  { nome: "Smartphone", preco: 2500 },
  { nome: "Notebook", preco: 3000 },
  { nome: "Fones de ouvido", preco: 300 },
  { nome: "Mouse", preco: 80 }
]

console.log("Produtos originais:")
console.log(produtos)

const nomesOrdenados = obterNomesOrdenadosPorPreco(produtos)
console.log("\nNomes de produtos ordenados por preço crescente:")
console.log(nomesOrdenados) // Saída esperada: ["Mouse", "Fones de ouvido", "TV", "Smartphone", "Notebook"]

// Teste com array vazio
console.log("\nTestando com array vazio:")
console.log(obterNomesOrdenadosPorPreco([])) // Saída esperada: []

// Teste com produtos de mesmo preço
const produtos2 = [
  { nome: "Morango", preco: 2.0 },
  { nome: "Banana", preco: 1.5 },
  { nome: "Bergamota", preco: 2.0 }
]
console.log("\nProdutos com preços iguais:")
console.log(produtos2)
console.log("Nomes ordenados:", obterNomesOrdenadosPorPreco(produtos2)) // Ordem de "Morango" e "Bergamota" pode variar mas ambos virão após "Banana"