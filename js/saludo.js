let mail= localStorage.getItem("mail");

let login = document.querySelector(".login11")
let register= document.querySelector(".login12")
let saludo = document.querySelector(".saludo")
let saludos = document.querySelector(".saludo1")
if (mail ){
    login.style.display="none"
    register.style.display="none"
    saludo.style.display="block"
    saludos.style.display="block"
    saludos.innerText=`BIENVENIDO ${mail}`
    

}