// operadores avançados - sugar sintax

let num = 10;
num = num + 1; // aumenta o valor em 1
num += 1; // aumenta o valor em 1 formato simplificado (sugar sintax)
num++; // aumenta o valor em 1 outro formato simplificado (sugar sintax)

console.log(num);
console.clear();

// operadores avançados - operador ternário

let temperatura = 30;
temperatura > 30 ? console.log("quente") : console.log("frio");
console.clear();

// operadores avançados - operador lógico "And" - &&

const carrinho = [];

carrinho.length === 0 && console.log("carrinho vazio");
console.clear();

const pessoa = {
  nome: "joao",
  idade: 25,
};

const acesso = pessoa.idade > 18 && new Date();
acesso && console.log(acesso);
console.clear();

// operadores avançados - operador lógico "Or" - ||

console.log(0 || "Falsy (OK)");
console.log(40 || "Falsy (OK)");
console.log("Olá Mundo" || "Falsy (OK)");
console.log(true || "Falsy (OK)");
console.clear();

// operadores avançados - operador lógico "nullish" - ??

console.log(0 ?? "nullish (OK)");
console.log(40 ?? "nullish (OK)");
console.log("Olá Mundo" ?? "nullish (OK)");
console.log(true ?? "nullish (OK)");
console.log(null ?? "nullish (OK)");
console.clear();

// operadores avançados - acesso condicional a um objeto

const pessoa1 = {
  idade: 18,
};
console.log(pessoa1.nome || "sem pessoa");
console.clear();

// Desestruturação

const usuario = {
  nome: "Antonio",
  idade: 40,
  profissao: "design",
  telefone: {
    cel: 11947355989,
    casa: null,
  },
};

let {
  nome,
  idade,
  profissao,
  telefone: { cel },
} = usuario;
console.log(profissao);
console.log(cel);

console.clear();

//Alias "apelido"

const item = {
  item_id: 432,
  product_name: "some product",
};

const { item_id: id, product_name: name } = item;
console.log(name);
console.log(id);

console.clear();

// desestruturação de um Array

const nomes = ["Antonio", "Paloma", "Santos"];
const nomes2 = ["Carlos", "Joaquim"];
const [a, b] = nomes; // o "a" e o "b" são ficticios, só marcam a posição do nome no array
console.log(a);

console.clear();

// spread de array e de objetos
nomes2.push(...nomes);
console.log(nomes2);

const todosNomes = {
  ...nomes2,
};

console.log(todosNomes);
console.clear();

// spread de Objetos

const usuario3 = {
  nome: "Antonio",
  curso: "HTML",
};

const usuario4 = {
  ...usuario3,
  curso: "JavaScript",
  idade: 41,
};

console.log(usuario4);
console.clear();

// Rest Parameters

function somar(...num) {
  console.log(num);
}

somar(1, 2, 3, 4);
console.clear();

function somar2(...num) {
  return num.reduce((acc /*acumulador*/, n /*numero*/) => acc + n, 0);
}

console.log(somar2(1, 2, 3, 4));
console.clear();
