let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let query = queryStringObj.get("producto");
let URLproductos = `https://dummyjson.com/products/${query}`
let h1 = document.querySelector(".h1-product")
let h2 = document.querySelector(".h2-product")
let img = document.querySelector(".img-product")
let h3 = document.querySelector(".detalles")
let categoria = document.querySelector(".categoriaa")
let stock = document.querySelector(".stock")
let tags = document.querySelector(".tags")
let opiniones = document.querySelector(".opiniones")

fetch(URLproductos)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
    h1.innerText = data.title
    h2.innerText = data.brand
    img.src = data.images[0]
    h3.innerText = data.description
    categoria.innerHTML = ` Categoría:<a class="categoriaa" href="./category.html?categoria=${data.category}"> ${data.category}</a>` 
    stock.innerHTML = `Stock: ${data.stock}`
    for (let i = 0; i < data.tags.length && i < 3; i++) {
        tags.innerHTML += `<li class="tags2">${data.tags[i]}</li>`
    }
    for(let i = 0; i < data.reviews.length; i++){
        opiniones.innerHTML += `
        <h2>Rating: ${data.reviews[i].rating}</h2>
        <p>Comentario: ${data.reviews[i].comment}</p>
        <p>Fecha: ${data.reviews[i].date}</p>
        <p>Usuario: ${data.reviews[i].reviewerName}</p>
        `
    }

})
.catch(function(err){
    return err
})


