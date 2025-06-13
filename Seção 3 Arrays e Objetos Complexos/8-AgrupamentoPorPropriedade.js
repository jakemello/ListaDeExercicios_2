// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.


/**
 * @param {Array<Object>} vendas - Um array de objetos de venda, cada um com 'cliente' e 'total'.
 * @returns {Object} Um objeto onde as chaves são os nomes dos clientes e os valores são seus totais de vendas.
 */
function agruparVendasPorCliente(vendas) {
  // O método 'reduce' itera sobre o array 'vendas'
  // 'acumulador' é o objeto que estamos construindo (o resultado final)
  // 'venda' é o item atual do array sobre o qual estamos iterando
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda // Desestrutura o objeto 'venda' para obter 'cliente' e 'total'

    // Se o cliente já existe no acumulador, adiciona o total atual
    // Senão, inicializa o total do cliente com o valor da venda atual
    acumulador[cliente] = (acumulador[cliente] || 0) + total

    return acumulador // Retorna o acumulador atualizado para a próxima iteração
  }, {}) // O segundo argumento de reduce é o valor inicial do acumulador (um objeto vazio neste caso)
}

// Exemplos
console.log("\n Exercício 8: Agrupamento por Propriedade")

const vendas = [
  { cliente: "Jakeline", total: 100 },
  { cliente: "Maria", total: 250 },
  { cliente: "Jakeline", total: 150 },
  { cliente: "Ronildo", total: 50 },
  { cliente: "Maria", total: 300 },
  { cliente: "Jakeline", total: 75 }
]

console.log("Vendas originais:")
console.log(vendas)

const vendasPorCliente = agruparVendasPorCliente(vendas)
console.log("\nVendas agrupadas por cliente:")
console.log(vendasPorCliente)

// Teste com array vazio
console.log("\nTestando com array vazio:")
console.log(agruparVendasPorCliente([]))

// Teste com um único cliente
const vendas2 = [
  { cliente: "Jacques", total: 500 }
]
console.log("\nTestando com um único cliente:")
console.log(agruparVendasPorCliente(vendas2))