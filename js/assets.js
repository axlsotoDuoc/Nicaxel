function ajustarAlturaImagen() {
    const img = document.getElementById('miImagen');
    if (window.innerWidth >= 1015) {
        img.style.height = '20rem';
    } else {
        img.style.height = '15rem';
    }
    }

window.addEventListener('load', ajustarAlturaImagen);
window.addEventListener('resize', ajustarAlturaImagen);