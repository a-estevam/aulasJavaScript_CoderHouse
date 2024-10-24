function emprestimo() {
  //valor à emprestar
  // numero de parcelas
  // juros

  let valorEmprestado = parseFloat(prompt("Qual valor você quer emprestado?"));
  let parcelas = parseInt(prompt("em quantas parcelas você deseja pagar?"));
  let valorParcela = valorEmprestado / parcelas;
  let juros = 0.5;

  let totalJuros = valorEmprestado * juros * parcelas;

  if (parcelas < 1 || parcelas > 12) {
    alert("Somente parcelas de 1 à 12");
  } else {
    console.log(
      `Empréstimo de R$${valorEmprestado} parcelado em ${parcelas}x:`
    );

    do {
      for (let i = 1; i <= parcelas; i++) {
        let resultado = +valorParcela + juros * i;
        console.log(`parcela ${i} R$${resultado.toFixed(2)}`);
        valorEmprestado = parseFloat(
          prompt("Qual valor você quer emprestado?")
        );
      }
    } while (valorEmprestado == "");
  }
}

emprestimo();
