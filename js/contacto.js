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