let primer_article_index = document.querySelector(".randomp")
let segundo_article_index = document.querySelector(".masp")
let url = 'https://dummyjson.com/products'

fetch(url)
.then(function(res){
    return res.json()

})
.then(function(data){
    let productos= data.products
    
    for(let i = 0; i < 10; i ++)
        primer_article_index.innerHTML +=
        `<article class="imadiv">
            <img src='${productos[i].thumbnail}'  class="imgin">
            <h3  class = "limite">${productos[i].title}</h3>
            <div class="cajas">
                <p>${productos[i].category} </p>
                <p>${productos[i].price}</p>
                <a href="./product.html?producto=${productos[i].id}">ver detalles</a>
            </div>

        </article>`

})
.catch(function(error){
    console.log(error)
})

fetch(url)
.then(function(res){
    return res.json()

})
.then(function(data){
    let productos= data.products
    
    for(let i = 10; i < 20; i ++)
        segundo_article_index.innerHTML +=
        `<article class="imadiv">
            <img src='${productos[i].thumbnail}'  class="imgin">
            <h3  class = "limite">${productos[i].title}</h3>
            <div class="cajas">
                <p>${productos[i].category} </p>
                <p>${productos[i].price}</p>
                <a href="./product.html?producto=${productos[i].id}">ver detalles</a>
            </div>

        </article>`

})
.catch(function(error){
    console.log(error)
})

let url1 = "https://dummyjson.com/products/category-list"




