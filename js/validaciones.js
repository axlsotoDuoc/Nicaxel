/*VALIDACIÓN DE FORMULARIO DE CONTACTO*/ 
function validarNombre() {
    const nombre = document.getElementById('nombre').value.trim();
    const errorNombre = document.getElementById('error-nombre');

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (nombre.length < 3 || nombre.length > 100) {
        errorNombre.textContent = 'El nombre debe tener entre 3 y 100 caracteres.';
        return false;
    }

    if (!regex.test(nombre)) {
        errorNombre.textContent = 'El nombre solo puede contener letras y espacios.';
        return false;
    }

    const partes = nombre.split(' ').filter(p => p !== '');
    if (partes.length < 2) {
        errorNombre.textContent = 'Por favor, ingresa al menos un apellido.';
        return false;
    }

    errorNombre.textContent = '';
    return true;
}

function actualizarContador() {
    const textarea = document.getElementById('mensaje');
    const contador = document.getElementById('contador');
    const max = textarea.maxLength;
    const actual = textarea.value.length;
    contador.textContent = `${max - actual} caracteres restantes`;
}

/*------------------------------------------------------------------------------------------------*/ 

/*VALIDACIÓN DE LOGIN*/ 

function validarFormulario() {
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorCorreo = document.getElementById('error-correo');
    const errorPassword = document.getElementById('error-password');

    let valido = true;

    // Validar correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        errorCorreo.textContent = 'Ingresa un correo electrónico válido.';
        valido = false;
    } else {
        errorCorreo.textContent = '';
    }

    // Validar contraseña: mínimo 6 caracteres, una mayúscula y un número
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regexPassword.test(password)) {
        errorPassword.textContent = 'La contraseña debe tener al menos 6 caracteres, una mayúscula y un número.';
        valido = false;
    } else {
        errorPassword.textContent = '';
    }

    // Si todo es válido, redirigir
    if (valido) {
        window.location.href = 'index.html';
    }

    return false; // evita que el formulario se envíe
}

/*------------------------------------------------------------------------------------------------*/ 

/*VALIDACIÓN DE REGISTRO */ 

function validarRegistro() {
    const correo = document.getElementById('correo').value.trim();
    const password1 = document.getElementById('password1').value.trim();
    const password2 = document.getElementById('password2').value.trim();

    const errorCorreo = document.getElementById('error-correo');
    const errorPassword = document.getElementById('error-password');
    const errorRepeat = document.getElementById('error-repeat');

    let valido = true;

    // Validar correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        errorCorreo.textContent = 'Ingresa un correo electrónico válido.';
        valido = false;
    } else {
        errorCorreo.textContent = '';
    }

    // Validar contraseña segura
    const regexPassword = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regexPassword.test(password1)) {
        errorPassword.textContent = 'La contraseña debe tener al menos 6 caracteres, una mayúscula y un número.';
        valido = false;
    } else {
        errorPassword.textContent = '';
    }

    // Validar repetición de contraseña
    if (password1 !== password2) {
        errorRepeat.textContent = 'Las contraseñas no coinciden.';
        valido = false;
    } else {
        errorRepeat.textContent = '';
    }

    // Si todo es válido, redirigir a index.html
    if (valido) {
        window.location.href = 'index.html';
    }

    return false; // evitar envío por defecto
}


