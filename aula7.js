// 1. (Par ou ímpar) Crie uma funcionalidade que recebe um número e verifica se ele é par ou ímpar.

let numero;

function ehpar(numero) {
  if (numero % 2 == 0) {
    console.log("o número " + numero + " é par");
  } else {
    console.log("o número " + numero + " é impar");
  }
}

ehpar(4);

// 2. (Estações do ano) Faça um sistema que receba um mês e informe a qual estação esse mês pertence.

// Primavera: Começa em 22 de setembro e termina em 21 de dezembro
// Verão: Começa em 21 de dezembro e termina em 20 de março
// Outono: Começa em 20 de março e termina em 20 de junho
// Inverno: Começa em 20 de junho e termina em 22 de setembro

let qualMes;

function estacaoDoAno(mes) {
  if (mes >= 9 && mes <= 12) {
    console.log("Primavera");
  } else if (mes >= 1 && mes <= 3) {
    console.log("Verão");
  } else if (mes >= 4 && mes <= 6) {
    console.log("Outono");
  } else {
    console.log("Inverno");
  }
}

estacaoDoAno(7);

// 3. (Temperatura) Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).

let tempF;

function convertTemp(tempF){
   let resultado = (tempF - 32) / 1.8
    return resultado
}
console.log('temperatura é: '+ convertTemp(65).toFixed(2) +' Cº');

// 4. (Número primo) Crie uma funcionalidade que solicita para que o usuário informe um número até que o número informado seja primo.

let primo;

function numeroPrimo(primo){
    if (primo < 2){
        console.log ('não é primo')
    }
}

numeroPrimo(4)



// 5. (Somatório) Faça um sistema que receba um número e calcule seu somatório (somar todos os valores entre 1 e o número escolhido).
// 6. (Cubo) Crie uma função que retorne o cubo de um número fornecido pelo usuário.
// 7. (Divisível) Crie uma funcionalidade que recebe dois números e verifica se o primeiro número é ou não divisível pelo segundo número.
// 8. (Mês) Receba um número do usuário. Se este número estiver entre 1 e 12, deve exibir o nome do mês correspondente. Se for digitado um número fora desta faixa, imprimir a mensagem: “valor de mês incorreto”. Faça um loop até que o usuário digite 0.
// 9. (Potência) Faça um programa que peça dois números (base e expoente) calcule e mostre o primeiro número elevado ao segundo número.
// 10. (Idade) Faça um sistema que receba o ano, mês e dia de nascimento de uma pessoa, calcule e mostre a idade dessa pessoa em anos, meses e dias.
