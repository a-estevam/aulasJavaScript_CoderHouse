//ARRAY []

// const numero = [1,2,3,4,5,6];

// for (let i = 0; i < numero.length; i++){
//     console.log(numero[i])
// }

// numero.push(7, 8)
// numero.unshift(0)
// numero.pop()

// console.log(numero)

// const nomes = ["Antonio", "Paloma", "Carlos"]

// console.log(nomes.join())

// const nome2 = nomes.reverse()
// console.log(nomes.includes('carlos'))
// console.log(nomes.indexOf('carlos'))

// console.log(nome2)

// const nomes = []
// let quantidade = 5

// do{
//     let entrada = prompt("digite um nome")
//     nomes.push(entrada.toUpperCase())
//     console.log(nomes.length)
// } while (nomes.length != quantidade)

// const listaCores = [];
// let quantidade = 5;

// do{
//     let entrada = prompt("digite um cor")
//     listaCores.push(entrada.toUpperCase())
// } while (listaCores.length != quantidade)

// console.log(listaCores, listaCores.length)

// let deletar = prompt("delete uma cor")
// const corIndex = listaCores.indexOf(deletar.toLocaleUpperCase());

// if (corIndex != -1){
//     listaCores.splice(corIndex, 1)
// } else{
//     alert ("não encontrei o item")
// }

// console.log(listaCores, listaCores.length)

// const produtos = [
//     {id: 1, nome: "Arroz"},
//     {id: 1, nome: "Feijão"},
//     {id: 1, nome: "Macarrão"}
// ]

// for (const produto of produtos){
//     console.log(produto.nome)
// }

const listaNomes = [];

do {
  let entrada = prompt("digite um nome");
  listaNomes.push(entrada.toLocaleUpperCase());

  
} while (console.log(listaNomes));

