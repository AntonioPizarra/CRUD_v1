/*********************************************************
 *      js functions for CRUD Login&Inserction
 *      author: Antonio González Mayorga
 *      version: 1.0
 *      date March 2024
 *      comment: functions
 * *******************************************************/

const btnSignIn = document.getElementById("sign-in"),
    btnSignUp = document.getElementById("sign-up"),
    formRegister = document.querySelector(".register"),
    formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})


btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})

/************************************* VALIDACIONES *************************************/

/*** NOMBRE COMPLETO ***/
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".form").addEventListener("submit", function(event) {
        // Validación del nombre completo
        const nombreCompletoInput = document.querySelector("input[placeholder='Nombre Completo']");
        const nombreCompleto = nombreCompletoInput.value.trim();
        // Verificar si el campo está vacío
        if (nombreCompleto === "") {
            alert("Por favor, ingrese su nombre completo.");
            event.preventDefault();
            return;
        }
        // Verificar si contiene solo letras y espacios
        const soloLetrasEspacios = /^[a-zA-Z\s]+$/;
        if (!soloLetrasEspacios.test(nombreCompleto)) {
            alert("El nombre completo solo puede contener letras y espacios.");
            event.preventDefault();
            return;
        }
        // Verificar la longitud del nombre completo
        if (nombreCompleto.length < 2 || nombreCompleto.length > 30) {
            alert("El nombre completo debe tener entre 2 y 20 caracteres.");
            event.preventDefault();
            return;
        }
    });
});

/*** NOMBRE DE USUARIO ***/
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".form").addEventListener("submit", function(event) {
        // Validación del nombre de usuario
        const nombreUsuarioInput = document.querySelector("input[placeholder='Nombre de Usuario']");
        const nombreUsuario = nombreUsuarioInput.value.trim();
        // Verificar si el campo está vacío
        if (nombreUsuario === "") {
            alert("Por favor, ingrese un nombre de usuario.");
            event.preventDefault();
            return;
        }
        // Verificar si contiene solo letras y números
        const soloLetrasNumeros = /^[a-zA-Z0-9]+$/;
        if (!soloLetrasNumeros.test(nombreUsuario)) {
            alert("El nombre de usuario solo puede contener letras y números.");
            event.preventDefault();
            return;
        }
        // Verificar la longitud del nombre de usuario
        if (nombreUsuario.length < 7 || nombreUsuario.length > 15) {
            alert("El nombre de usuario debe tener entre 7 y 15 caracteres.");
            event.preventDefault();
            return;
        }
    });
});

/*** NÚMERO DE MÓVIL ***/
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".form").addEventListener("submit", function(event) {
        // Validación del número móvil
        const numeroMovilInput = document.querySelector("input[placeholder='Número Móvil']");
        const numeroMovil = numeroMovilInput.value.trim();
        // Verificar si el campo está vacío
        if (numeroMovil === "") {
            alert("Por favor, ingrese su número móvil.");
            event.preventDefault();
            return;
        }
        // Verificar si contiene solo números
        const soloNumeros = /^\d+$/;
        if (!soloNumeros.test(numeroMovil)) {
            alert("El número móvil solo puede contener números.");
            event.preventDefault();
            return;
        }
        // Verificar la longitud del número móvil
        if (numeroMovil.length !== 9) {
            alert("El número móvil debe tener exactamente 9 números.");
            event.preventDefault();
            return;
        }
    });
});

/*** CORREO ELECTRÓNICO ***/
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".form").addEventListener("submit", function(event) {
        // Validación del correo electrónico
        const correoInput = document.querySelector("input[placeholder='Correo Electronico']");
        const correo = correoInput.value.trim();
        // Verificar si el campo está vacío
        if (correo === "") {
            alert("Por favor, ingrese su correo electrónico.");
            event.preventDefault();
            return;
        }
        // Verificar si es un correo electrónico válido
        const correoRegExp = /^\S+@\S+\.\S+$/;
        if (!correoRegExp.test(correo)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            event.preventDefault();
            return;
        }
    });
});

/*** CONTRASEÑA ***/
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".form").addEventListener("submit", function(event) {
        // Validación de la contraseña
        const contrasenaInput = document.querySelector("input[placeholder='Contraseña']");
        const contrasena = contrasenaInput.value.trim();
        // Verificar si el campo está vacío
        if (contrasena === "") {
            alert("Por favor, ingrese una contraseña.");
            event.preventDefault();
            return;
        }
        // Verificar si cumple con los requisitos
        if (!(/[A-ZÑ]+/.test(contrasena) && /[a-zñ]+/.test(contrasena) && /[0-9]+/.test(contrasena) && /[.,;+\-_&%$!?]+/.test(contrasena) && (contrasena.length >= 8 && contrasena.length <= 15))) {
            alert("La contraseña debe tener al menos una mayúscula, una minúscula, un número, un carácter especial y tener una longitud entre 8 y 15 caracteres.");
            event.preventDefault();
            return;
        }
    });
});

/*** GÉNERO ***/
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var maleChecked = document.getElementById('male').checked;
    var femaleChecked = document.getElementById('female').checked;

    if (!maleChecked && !femaleChecked) {
        event.preventDefault(); // Detiene el envío del formulario
        alert('Por favor, seleccione su género.'); // Muestra un mensaje de alerta
    }
});

/*** LOGIN ***/
document.getElementById('loginForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var usernamePattern = /^.{8,12}$/;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;

    if (!usernamePattern.test(username)) {
        alert("El nombre de usuario debe tener entre 8 y 12 caracteres.");
        event.preventDefault();
    }

    if (!passwordPattern.test(password)) {
        alert("La contraseña debe tener entre 8 y 15 caracteres, incluir al menos una mayúscula, una minúscula y un dígito.");
        event.preventDefault();
    }
});