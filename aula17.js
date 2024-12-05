// //sincrona e assincrona
// //sincrona uma tarefe apos a outra (apos terminar uma tarefa começa a outra)
// //assincrona multiplas açoes de uma vez

// //setTimeout
// // setTimeout(fn, time)

// // setTimeout(()=>{
// //     console.log('Processo assincrono')
// // }, 3000)

// // console.clear()


// // for (let letra of "olá"){
// //     setTimeout(()=>{
// //         console.log(letra)
// //     }, 2000)
    
// // }

// // Call Stack (pilha)
// //Event Loop (fila) Callback queue

// //setInterval (intervalo até a próxima execução)

// // for (let letra of "olá"){
// //     setInterval(()=>{
// //         console.log(letra)
// //     }, 2000)
    
// // }

// // clearInterval() precisa atribuir a uma variável
// // clearTimeout() precisa atribuir a uma variável


// //promise (evento futuro - promessa (assincrona)) pending, filfilled e rejected

// new Promise((resolve, reject) => {
//     // scopo da promessa
// })

// const eventoFuturo = () =>{
//     return new Promise((resolve, reject) =>{
//         resolve({nome: "Antonio"})
//     })
// }

// console.log(eventoFuturo())




const BD = [
    {id: 1, nome: 'Produto 1', preco: 1500},
    {id: 2, nome: 'Produto 2', preco: 1300},
    {id: 3, nome: 'Produto 3', preco: 1400},
]

const pedirProdutos = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(BD)
        }, 5000)
    })
}

let produtos = []

const carregando = setInterval(()=>{
    console.log("carregando...")
}, 1000)

const renderProdutos = (arr) =>{
    console.log(produtos)
}

pedirProdutos()
    .then((res)=>{
        produtos = res
        clearInterval(carregando)
        renderProdutos(produtos)
    })