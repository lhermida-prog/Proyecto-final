let url = "https://dummyjson.com/products"
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let query = queryStringObj.get("id")
let section = document.querySelector(".padre-product")



fetch(url)

.then(function(res){
    return res.json()
})
.then(function(data){
   console.log(data);
   let productos = data.productos
   for(i=0; productos.lenth; i++){
    section.innerHTML +=
   `<section>
   
   `


   }



})
.catch(function(err){
    return err 
})

