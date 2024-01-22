// SELECCION DE ELEMENTOS
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnValidar = document.querySelector(".btn-enviar");
const aviso = document.querySelector(".texto-aviso");

const correoRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]))+$/;
const contraseñaRegex = /^.{1,5}$/;

//----------- Validación --------------//
btnValidar.addEventListener("click", e=>{
    e.preventDefault();
    let correo = email.value.trim();
    let contraseña = password.value.trim();

    if(!correo){
        mostrarAviso("Ingresa una dirección de correo válida");
    }

    else if(!contraseña){
        mostrarAviso("Ingresa una contraseña válida");
    }

    else if(!correoRegex.test(correo)){
        mostrarAviso("Ingrese un correo electrónico válido");
    }

    else if(!contraseñaRegex.test(contraseña)){
        mostrarAviso("Ingrese una contraseña válida debe contener 5 caracteres");
    }

    else if(autenticarUsuario(correo, contraseña)){
        window.location = "Bienvenida.html"
    }

    else{
        mostrarAviso("El correo electrónico o contraseña que ingresaste no están asociados a una cuenta");
        email.value = "";
        password.value = "";
    }


});
function autenticarUsuario(correo, contraseña){
    return correo === "Alejandroj@Alejandroj" && contraseña === "12345";
}


function mostrarAviso(mensaje){
    aviso.style.color = "#FF2020";
    aviso.style.fontWeight = "800";
    aviso.textContent = mensaje;
    aviso.style.visibility = "inherit";
}