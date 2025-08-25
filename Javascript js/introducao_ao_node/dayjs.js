const dayjs = require ('dayjs')

const dataAtual = dayjs()

console.log(dataAtual.toString())
console.log(dataAtual.add(1, 'month').toString())