// funções de ordem superior

function maiorQue(n) {
  return (m) => m > n;
}

let maiorQueDez = maiorQue(10);

console.log(maiorQueDez(12));
console.log(maiorQueDez(8));

////////////////////////////////

function somarNumero(n1) {
  return (n2) => n1 + n2;
}
//n1
let soma = somarNumero(10);

//n2
console.log(soma(12));

////////////////////////////////

function atribuirOperacao(op) {
  if (op == "somar") {
    return (a, b) => a + b;
  } else if (op == "subtrair") {
    return (a, b) => a - b;
  }
}

let somar = atribuirOperacao("somar");
let subtrair = atribuirOperacao("subtrair");

console.log(somar(10, 2));
console.log(subtrair(10, 2));

////////////////////////////////

// let total = 0;
// const numeros = [1, 2, 3, 4];

// function porCadaUm(array, funcao) {
//   for (const item of array) {
//     funcao(item);
//   }
// }

// const triplo = []

// porCadaUm(numeros,(valor) => triplo.push(valor*3))

// console.log(triplo)

// function mostrarConsole(mensagem){
//     console.log(mensagem)
// }

// porCadaUm(triplo,(valor) => mostrarConsole('sss'))

// console.log(porCadaUm)


////////////////////////////////


const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((num) => {
    console.log(num)
})

const cursos = [
    {nome: 'javascript', preco: 1500},
    {nome: 'javascript', preco: 2500},
    {nome: 'react', preco: 1400},
    {nome: 'reactJS', preco: 1500},
    {nome: 'angularJS', preco: 2000}
]

cursos.push({nome: 'nodeJS', preco: 2000});


//find
const resultado = cursos.find((curso)=> curso.nome ==="react")
const resultado2 = cursos.find((curso)=> curso.nome ==="javascript")

//filter
const resultado3 = cursos.filter((curso)=> curso.nome.includes("JS"))
const resultado4 = cursos.filter((curso)=> curso.preco >= 2000)
const resultado5 = cursos.filter((curso)=> curso.nome.includes("node"))

console.log(cursos)

// console.log("find", resultado)
// console.log("find", resultado2)
console.log("filter", resultado3)
// console.log("filter", resultado4)
console.log("filter", resultado5)


////////////////////////////////



//reduce()

const total = numeros.reduce((acumulador, elemento)=> acumulador + elemento, 0)
console.log(total)


const carrinho = [
    {nome: 'javascript', preco: 150, quantidade: 2},
    {nome: 'javascript', preco: 250, quantidade: 5},
    {nome: 'react', preco: 140, quantidade: 2},
    {nome: 'reactJS', preco: 150, quantidade: 2},
    {nome: 'angularJS', preco: 200, quantidade: 2}
]
carrinho.push({nome: 'Figma', preco: 230, quantidade:3})

const totalCarrinho = carrinho.reduce((acumulador, produto)=> acumulador + (produto.preco * produto.quantidade),0)
console.log(totalCarrinho)

carrinho.unshift ({nome: 'react', preco: 230, quantidade:8})

const resultado6 = carrinho.find((curso) => curso.nome =="react")
const resultado7 =carrinho.filter((curso) => curso.nome.includes("react"))

// console.log(resultado6)

console.log(carrinho[0])
console.log(resultado7)



function operacoes(op){
    if(op =="somar"){
        return(a,b) => a + b;
    } else if (op =="subtrair"){
        return(a,b) => a - b;
    }else if (op =="multiplicar"){
        return(a,b) => a * b;
    }else if (op =="dividir"){
        return(a,b) => a / b;
    }
}


let novaSoma = operacoes("somar")
let novaSubitracao = operacoes("subtrair")
let novaMutiplicacao = operacoes("multiplicar")
let novaDividir = operacoes("dividir")

console.log(novaSoma(10, 2))
console.log(novaSubitracao(10, 2))
console.log(novaMutiplicacao(10, 2))
console.log(novaDividir(10, 2))


console.log(novaSoma(18, 2))