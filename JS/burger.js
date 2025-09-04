document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.body;

    // Abrir / cerrar menú al clickear burger
    burger.addEventListener("click", () => {
        const isActive = burger.classList.toggle("active");
        navMenu.classList.toggle("active");
        body.classList.toggle("no-scroll", isActive);
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            burger.classList.remove("active");
            navMenu.classList.remove("active");
            body.classList.remove("no-scroll");
        });
    });

    // Cerrar menú si haces clic fuera del menú y el burger
    document.addEventListener("click", (e) => {
        const clickInsideMenu = navMenu.contains(e.target);
        const clickOnBurger = burger.contains(e.target);

        if (!clickInsideMenu && !clickOnBurger) {
            burger.classList.remove("active");
            navMenu.classList.remove("active");
            body.classList.remove("no-scroll");
        }
    });
});

