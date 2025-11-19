let queryString = location.search
let queryStringObj = new URLSearchParams(queryString) 
let busqueda_usu = queryStringObj.get("busqueda")
let formulario = document.querySelector(".busqueda")
let inputBusqueda = document.querySelector("#busqueda")

formulario.addEventListener("submit", function(event){
    event.preventDefault()
    if(inputBusqueda.value.length < 3){
        return alert("No puede tener menos de tres caracteres, volver a intentar")
    }
    this.submit()
})

let article = document.querySelector(".randomp")
let URL = `https://dummyjson.com/products/search?q=${busqueda_usu}`
let error = document.querySelector(".error")
let main = document.querySelector(".mainresultados")
let titulo = document.querySelector(".titulo-resultado")
titulo.innerText = `Resultado de ${busqueda_usu}`



fetch(URL)
.then(function(res){
    return res.json()
})
.then(function(data){
    let resultado = data.products
    if (resultado.length === 0){
        error.style.display = "block"
        titulo.style.display = "none"
    }
    for(let i = 0; i < resultado.length && i < 10; i++){
    article.innerHTML += `
    <article class="imadiv estructura-busqueda">
        <img src="${resultado[i].thumbnail}" class="imgin">
        <h3>${resultado[i].title}</h3>
        <div class="cajas">
            <p>${resultado[i].category}</p>
            <p>${resultado[i].price}</p>
            <a href="./product.html?producto=${resultado[i].id}">ver detalles</a>
        </div>
    </article>`
    }
})
.catch(function(err){
    console.log(err);
})

if (inputBusqueda.value != resultado){
    error.style.display = "block" 
}
