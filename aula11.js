// const array = [22, 31, 88, 12, 1]
// const array2 = [27, 34, 78, 42, 11]

// const maximo = Math.max(...array)
// const minimo = Math.min(...array)

// console.log(maximo)
// console.log(minimo)

// const num = 5.5

// console.log (Math.ceil(num)) // arredonda pra cima
// console.log (Math.floor(num)) // arredonda para baixo
// console.log (Math.round(num)) // arredonda para o numero mais próximo cima/baixo
// console.log (Math.sqrt(num)) // raiz quadrada

// const aleatorio = Math.random() // aleatório

// console.log (Math.ceil(aleatorio * 10)) //

// function numeroAleatorio(){
//     const aleatorio = Math.random()
//     return(console.log (Math.round(aleatorio * 30 + 20)))
// }
// numeroAleatorio()

// function recebeNumero(){
//     const numero = parseInt(prompt("digite um numero"))
//     const array = []
//     for(let i = 0; i < numero; i ++){
//         console.log(array.push(numeroAleatorio()))
//     }
// }

// recebeNumero()

// function numeroAleatorio20a50() {
//     return Math.round(Math.random() * 30 + 20);
// }

// function arrayNumerosAleatorio(num) {
//     let array = [];

//     for (let i = 0; i < num; i++) {
//         array.push(numeroAleatorio20a50());
//     }

//     return array;
// }

// const arrayAleatorio = arrayNumerosAleatorio(15);
// const arrayRaiz = arrayAleatorio.map((numero) => Math.sqrt(numero));

// console.log(arrayAleatorio);
// console.log(arrayRaiz);

// console.log (new Date(1983, 6, 17, 8, 24, 32))
// console.log (new Date("julho 17, 1983"))

function recebeData() {
  const data = prompt("digite a data de nacimento");
  const formatData = new Date(data);

  console.log(formatData.toLocaleString());
  console.log(formatData.toDateString());
  console.log(formatData.toLocaleDateString());
}

// recebeData();


function faltaParaAniversario(dataAniversario){
    const aniversario = new Date (dataAniversario)
    const dataAtual = new Date()

    const milesimoSegundosPorDia = 86400000

    return Math.floor(( aniversario - dataAtual) / milesimoSegundosPorDia)
}

console.log(faltaParaAniversario("julho 17 2025"))