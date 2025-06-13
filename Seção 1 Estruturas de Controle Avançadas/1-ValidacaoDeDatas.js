// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

const prompt = require("prompt-sync")()

/**
 * Função que verifica se uma data é válida.
 * @param {number} dia - Dia do mês
 * @param {number} mes - Mês do ano (1 a 12)
 * @param {number} ano - Ano (positivo)
 * @returns {boolean} - true se a data for válida, false caso contrário
 */
function ehDataValida(dia, mes, ano) {
  // Validação inicial de inputs numéricos e positivos
  if (
    !Number.isInteger(dia) ||
    dia <= 0 ||
    !Number.isInteger(mes) ||
    mes <= 0 ||
    !Number.isInteger(ano) ||
    ano <= 0
  ) {
    return false
  }

  // Validação do mês (1 a 12)
  if (mes < 1 || mes > 12) {
    return false
  }

  // Lógica para ano bissexto
  const ehBissexto = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)

  // Dias em cada mês, ajustando fevereiro para ano bissexto
  const diasNoMes = [
    31,
    ehBissexto ? 29 : 28,31,30,31,30,31,31,30,31,30,31,]

  if (dia > diasNoMes[mes - 1]) {
    return false
  }

  return true 
}

console.log("\n Validador de Datas")

const dia = parseInt(prompt("Digite o dia: "), 10)
const mes = parseInt(prompt("Digite o mês: "), 10)
const ano = parseInt(prompt("Digite o ano: "), 10)

if (ehDataValida(dia, mes, ano)) {
  console.log(`\nA data ${dia}/${mes}/${ano} é Válida!`)
} else {
  console.log(`\nA data ${dia}/${mes}/${ano} é Inválida!`)
}
