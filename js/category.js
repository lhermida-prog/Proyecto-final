let catalogo = location.search
let catalogoObj = new URLSearchParams(catalogo)
let querry = catalogoObj.get("id")
let url = `https://dummyjson.com/products/category/${query}`

