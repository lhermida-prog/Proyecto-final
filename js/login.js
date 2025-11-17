let formulario = document.querySelector("form")
let mail = document.querySelector('#mail')
let contraseña = document.querySelector("#cont")
formulario.addEventListener("submit",function(evento){
    evento.preventDefault()
    if (mail.value.length< 8){
        return alert("El mail no es valido")
    }
    else if (contraseña.value.length <= 6){
        return alert ("La contraseña debe tener mas de 6 caracteres")
    }
    localStorage.setItem("mail",mail.value)
    this.submit()
    
})