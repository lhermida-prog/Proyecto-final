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

fetch(URLproductos)
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
    console.log(data.tags);
    h1.innerText = data.title
    h2.innerText = data.brand
    img.src = data.images[0]
    h3.innerText = data.description
    categoria.innerHTML = ` Categoría:<a class="categoriaa" href="./category.html?categoria=${data.category}"> ${data.category}</a>` 
    stock.innerHTML = `Stock: ${data.stock}`
    tags.innerHTML = `
    <li class="tags2">${data.tags[0]}</li>
    <li class="tags2">${data.tags[1]}</li>
    <li class="tags2">${data.tags[2]}</li>
    `

})
.catch(function(err){
    return err
})


