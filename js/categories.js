let categorias = document.querySelector(".todas_categorias")

fetch('https://dummyjson.com/products/category-list')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let contenido = "";
        for (let i = 0; i < data.length ; i++) {
            contenido += `
            
            <li> <a class = "categoria" href="./category.html?idtag=${data[i]}">${data[i]}</li></a>`
        }
        categorias.innerHTML += contenido;

    })
    .catch(function (error) {
        console.log('El error es: ' + error);
    })


