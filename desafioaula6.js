

function emprestimo() {
  let taxaDeJuros = 1.49 / 100

  let nome = prompt("qual é o seu nome")
  let desejaContinuar = prompt("deseja simular um empréstimo? sim/não")

  while(desejaContinuar.toLowerCase() != "não"){
    let valorSolicitado = parseFloat(prompt("Valor do empréstimo"));

  
  if(isNaN(valorSolicitado) || valorSolicitado <= 0){
    alert('digite um valor válido')
    return 
    
  }

  let quantidadeDeParcelas = parseInt(prompt("Quantidade de parcelas"));
  if(isNaN(quantidadeDeParcelas) || quantidadeDeParcelas < 1 || quantidadeDeParcelas > 12){
    alert("digite de 1 à 12x")
    return
  
  }

  let valorComJuros = valorSolicitado * (1 + (taxaDeJuros * quantidadeDeParcelas))
  let valorPorParcelaComJuros = valorComJuros / quantidadeDeParcelas

    console.log(`R$${valorSolicitado.toLocaleString('pt-br', {minimumFractionDigits: 2})} parcelado em ${quantidadeDeParcelas}x`)


    for(let i = 1; i <= quantidadeDeParcelas; i++){
  
      console.log(`Parcela ${i} - R$${valorPorParcelaComJuros.toLocaleString('pt-br', {minimumFractionDigits: 2})}`)
    
   }
   console.log(`${nome}, você irá pagar: R$${valorComJuros.toLocaleString('pt-br', {minimumFractionDigits: 2})}!`)
   desejaContinuar = prompt("deseja fazer uma nova simulação? sim/não")
  }

}

emprestimo();
