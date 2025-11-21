let formulario = document.querySelector(".regg")
if (formulario) {
  formulario.addEventListener("submit", function (event) {

    event.preventDefault();
    let inputmail = formulario.querySelector("#mail");
    let contraseniainput = formulario.querySelector("#cont");
    let repetircontraseniainput = formulario.querySelector("#rcont");
    let aceptarterminos = formulario.condd;
    let email = inputmail.value;
    let contrasenia = contraseniainput.value;
    let repetircontrasenia = repetircontraseniainput.value;

    if (email === "") {
      alert("Completar el mail.");
      return;
    }

    if (contrasenia === "") {
      alert("Completar la contraseña.");
      return;
    }

    if (contrasenia.length < 6) {
      alert("La contraseña debe tener mas de 6 caracteres.");
      return;
    }

    if (repetircontrasenia === "") {
      alert("Repetir contraseña.");
      return;
    }

    if (contrasenia !== repetircontrasenia) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    if (aceptarterminos.checked === false) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }
    
    formulario.action = "./login.html";
    formulario.submit();
  });
} 