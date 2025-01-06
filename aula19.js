//MAP - REDUCE - FILTER

const numeros = [2, 15, 35, 26];

let operador = 2;

const dobro = numeros.map((numero) => {
  return numero * operador;
});

console.log(numeros);
console.log(dobro);

console.clear();

const produtos = [
  {
    id: 1,
    nome: "TV marca 1",
    preco: 5481.25,
    temDesconto: true,
    quantidade: 12,
  },
  {
    id: 2,
    nome: "TV marca 2",
    preco: 881.21,
    temDesconto: false,
    quantidade: 4,
  },
  {
    id: 3,
    nome: "TV marca 3",
    preco: 2451.55,
    temDesconto: true,
    quantidade: 5,
  },
  {
    id: 4,
    nome: "TV marca 4",
    preco: 5431.22,
    temDesconto: false,
    quantidade: 35,
  },
  {
    id: 5,
    nome: "TV marca 5",
    preco: 5456.1,
    temDesconto: true,
    quantidade: 2,
  },
  {
    id: 6,
    nome: "TV marca 6",
    preco: 4731.55,
    temDesconto: false,
    quantidade: 5,
  },
  {
    id: 7,
    nome: "TV marca 7",
    preco: 5481.25,
    temDesconto: true,
    quantidade: 1,
  },
  {
    id: 8,
    nome: "TV marca 8",
    preco: 1471.27,
    temDesconto: true,
    quantidade: 2,
  },
];

produtos.push({
  id: 9,
  nome: "TV marca 9",
  preco: 1471.27,
  temDesconto: true,
  quantidade: 2,
});

const novosProdutos = produtos.map((produto) => {
  const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco;
  novoPreco;

  return {
    id: produto.id,
    nome: produto.nome,
    preco: novoPreco.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
    quantidade: produto.quantidade,
  };
});

console.log(novosProdutos);
console.clear();

const soma = numeros.reduce((acumulador, atual) => {
  const total = acumulador + atual;
  return total;
}, 10);

console.log(soma);
console.clear();

const totalVendas = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.preco * produto.quantidade;
}, 0);

console.log(
  totalVendas.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);


const itensPromo = produtos.filter(produto =>{
    return produto.temDesconto
})

console.log(itensPromo)
console.clear()



const faturamentoTotal = produtos.map(produto =>{
    return{...produto, quantidade: produto.quantidade + 10}
})
    .filter( produto => produto.temDesconto)
    .reduce(
        (acumulador, produto)=> acumulador + produto.quantidade * produto.preco, 0,)


console.log(faturamentoTotal.toLocaleString("pt-br", { style: "currency", currency: "BRL" }))