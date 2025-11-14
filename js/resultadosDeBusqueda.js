let queryString = location.search
let queryStringObj = new URLSearchParams(queryString) 
let busqueda_usu = queryStringObj.get("busqueda")
let url = "https://dummyjson.com/products/search?q=phone"


