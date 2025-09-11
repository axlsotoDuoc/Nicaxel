function validarRegistro() {
    let password1 = document.getElementById("password1").value.trim();
    let password2 = document.getElementById("password2").value.trim();

    let errorPassword = document.getElementById("error-password");
    let errorRepeat = document.getElementById("error-repeat");

    // Limpiar mensajes previos
    errorPassword.textContent = "";
    errorRepeat.textContent = "";

    // Expresión para validar contraseña (mín 6, una mayúscula y un número)
    let regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!regexPassword.test(password1)) {
        errorPassword.textContent = "La contraseña debe tener mínimo 6 caracteres, al menos una mayúscula y un número.";
        return false;
    }

    if (password1 !== password2) {
        errorRepeat.textContent = "Las contraseñas no coinciden.";
        return false;
    }

    // Si todo está bien → redirigir a login.html
    window.location.href = "login.html";
    return false; // evita envío por defecto
}