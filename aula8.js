// let xicara = {
//     cor: "branca",
//     forma: "redonda",
//     peso: 5,
//     capacidade: 10
// }

// console.log(xicara)


// const fruta = {
//     nome: "Banana",
//     cor: "Amarela",
//     peso: 100,
//     tipo: "fruta"
// }

// fruta.cor = "azul";
// fruta["peso"] = 50;

// console.log(fruta.cor);
// console.log(fruta["peso"]);

// console.log(fruta);




function fruta (nome, cor, peso, tipo){
    this.nome = nome;
    this.cor = cor;
    this.peso = peso;
    this.tipo = tipo;

    this.falar = function(){
        console.log("olá eu sou uma " + this.nome)
    }
}


let banana = new fruta ("banana", "amarela", 50, "fruta")
let maca = new fruta ("maça", "vermelha", 40, "fruta")
let uva = new fruta ("uva", "verde", 30, "fruta")


console.log(banana.nome.length);
console.log(banana.tipo.toLowerCase());
console.log(banana.cor.toUpperCase());


for (const propriedade in banana){
    console.log(`${propriedade} = ${banana[propriedade]}`)
}



class Alimento{
    constructor(nome, cor, peso, tipo){
        this.nome = nome.toUpperCase();
        this.cor = cor;
        this.peso = peso;
        this.tipo = tipo;
        
    }

    descricao(){
        console.log(`Nome = ${this.nome} Cor = ${this.cor} Peso = ${this.peso} Tipo = ${this.tipo}`)
    }
    
}

const alimento1 = new Alimento("Banana", "Amarela", 50, "fruta");



alimento1.descricao()