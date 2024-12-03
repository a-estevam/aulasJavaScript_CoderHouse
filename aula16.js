// storage e json

// localStorage.setItem('nome', 'Antonio')
// localStorage.setItem("produto", "Curso")

// sessionStorage.setItem("idade", 41)

// const nomes = localStorage.getItem('nome')
// console.log(nome)

// const idades = sessionStorage.getItem("idade")
// console.log(idade)

// console.clear()

// for (let i=0; i<localStorage.length; i++){
//     const chave = localStorage.key(i)
//     console.log(`${localStorage.getItem(chave)}`)
// }


// localStorage.removeItem('nome')
// sessionStorage.removeItem("idade")


const item = document.querySelector("#item")
const btnSalvar = document.querySelector("#salvar_item")
const btnVisualizar = document.querySelector("#visualizar_item")
const btnDeletar = document.querySelector("#delete_item")

btnSalvar.addEventListener("click", function(){
    localStorage.setItem("item", item.value);
})

btnDeletar.addEventListener("click", function() {
    localStorage.removeItem("item");
});



btnVisualizar.addEventListener("click", function() {
    const itemValue = localStorage.getItem("item");
    if (itemValue) {
        
        document.querySelector("#output").innerHTML = itemValue;
    } else {
        document.querySelector("#output").innerHTML = "";
        alert("Nenhum item encontrado no armazenamento.");
    }
});

 const produto = localStorage.setItem("produtos", {id: 1, nome: "ANtonio"})

 const produtoJSON = JSON.stringify(produto)

 console.log(produtoJSON)