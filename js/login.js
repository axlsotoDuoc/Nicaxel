// Exclusividad ADMIN / USUARIO
const roles = document.querySelectorAll('.checkbox.rol');
roles.forEach(chk => {
    chk.addEventListener('change', () => {
        if (chk.checked) {
            roles.forEach(other => {
                if (other !== chk) other.checked = false;
            });
        }
    });
});

// Validación de login
function validarLogin() {
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();
    const admin = document.getElementById("admin");
    const usuario = document.getElementById("usuario");

    const errorCorreo = document.getElementById("error-correo");
    const errorPassword = document.getElementById("error-password");
    const errorRol = document.getElementById("error-rol");

    let valido = true;

    // Validar correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        errorCorreo.textContent = "Ingresa un correo electrónico válido.";
        valido = false;
    } else {
        errorCorreo.textContent = "";
    }

    // Validar contraseña: mínimo 6 caracteres, una mayúscula y un número
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regexPassword.test(password)) {
        errorPassword.textContent = "La contraseña debe tener al menos 6 caracteres, una mayúscula y un número.";
        valido = false;
    } else {
        errorPassword.textContent = "";
    }

    // Validar rol
    if (!admin.checked && !usuario.checked) {
        errorRol.textContent = "Debes seleccionar ADMIN o USUARIO.";
        valido = false;
    } else {
        errorRol.textContent = "";
    }

    // Si todo es válido → redirigir
    if (valido) {
        window.location.href = "index.html";
    }

    return false; // evitar envío normal
}