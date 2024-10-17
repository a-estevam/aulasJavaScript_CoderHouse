

//função 01
function solicitarNumeros(){
    var numero1 = parseInt(prompt("digite um número"))
    var numero2 = parseInt(prompt("digite outro número"))
    return {numero1, numero2}

}
var numeros = solicitarNumeros()

//função 02
var verificar = (num1, mult) => {
    if (num1 % mult === 0){
        return "é multiplo"
    } else{
        return "não é multiplo"
    }
    
}
var resultado = verificar(numeros.numero1, numeros.numero2);

//função 03
var exibirResultado = function(){
   return alert(numeros.numero1 + " " + resultado + " de " + numeros.numero2)
}

exibirResultado()