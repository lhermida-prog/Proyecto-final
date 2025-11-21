
let catalogo = location.search
let catalogoObj = new URLSearchParams(catalogo)
let querry = catalogoObj.get("idtag")

let titulo = document.querySelector(".tituloproducto")
let productos = document.querySelector(".prod")

fetch(`https://dummyjson.com/products/category/${querry}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let contenido = ``
        let producto = data.products;
        for (let i = 0; i < producto.length; i++) {
            contenido += `
            <article class = "producto">
                <h1>${producto[i].title}</h2>
                <h3>Precio: ${producto[i].price}</h1>
                <a href="./product.html?producto=${producto[i].id}">Ver detalle</a>
            </article>`
        }
        productos.innerHTML = contenido

        if (producto.length ==- 0) {
            titulo.innerHTML = `No hay productos de ${querry}`
        }else{
            titulo.innerHTML = `productos con categoria: ${querry}`
        }
                
        }
    )
    .catch(function (error) {
        console.log('El error es: ' + error);
    })

