// function nome(){
//     var resultado = "antonio";
//     console.log(resultado)
// }
// nome()

var frase = "teste"

function exibir(){
    var frase = "Olá"
    
    console.log(this.frase)
    console.log(frase)
}

exibir()