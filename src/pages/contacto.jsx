<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewporT" content="width=device-width, initial-scale=1.0">
    <title>Nicaxel | Contacto</title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="Styles/main.css">
    <link rel="stylesheet" href="Styles/contacto.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <script src="https://kit.fontawesome.com/1a2d8e6216.js" crossorigin="anonymous"></script>

    <link rel="icon" href="/Img/perfume.jpg">
</head>
<body>
    <div class="sticky">

        <!-- Banner -->
        <div class="banner-div">
            <span class="banner">Aprovecha solo por esta semana hasta un <span>60%</span> en productos seleccionados. <a href="catalogo.html" class="pincha">Pincha aquí para más info.</a> <i class="fa-solid fa-hand-pointer fa-xs" style="color: #ffffff;"></i></span>
        </div>

        <!-- Navbar Mobile -->
        <nav class="navbar-mobile">
            <!-- Título -->
            <a href="index.html" class="tittle">NICAXEL</a>

            <!-- Links -->
            <ul class="nav-menu">

                <li class="nav-item">
                    <a href="index.html" class="nav-link">Home</a>
                </li>

                <li class="nav-item">
                    <a href="nosotros.html" class="nav-link">Sobre nosotros</a>
                </li>

                <li class="nav-item">
                    <a href="#" class="nav-link">Blog</a>
                </li>

                <li class="nav-item">
                    <a href="catalogo.html" class="nav-link">Catálogo</a>
                </li>

                <li class="nav-item">
                    <div class="login-flex">
                        <a href="login.html" class="nav-link">Iniciar sesión</a>
                        <img src="./Img/login.svg" alt="">
                    </div>
                </li>



                <li class="nav-item">
                    <a href="#" class="nav-link">Ver carrito 🛒(2)</a>
                </li>
            </ul>

            <!-- Burger -->
            <div class="burger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
        <!-- ------------------------------------------- -->

        <!-- Navbar Dekstop -->
        <nav class="navbar-dekstop">
            <!-- Título -->
            <a href="index.html" class="tittle">NICAXEL</a>

            <!-- Navbar medio -->
                <div class="nav-medio">
                            <a href="nosotros.html">Sobre nosotros</a>
                            <a href="#">Blog</a>
                            <span>Contacto</span>
                </div>
            
            <!-- Navbar derecha -->
            <div class="nav-derecha">
                <a href="login.html"><img src="./Img/login.svg" alt="Icono de login"></a>
                <div class="carrito-flex">
                    <a href="carrito.html"><img src="./Img/carrito.svg" alt="Icono de carrito"></a>
                    <span>(1)</span>
                </div>
            </div>
        </nav>
        <!-- ------------------------------------------- -->
    </div> 
    
        <main>
            <h1>Contáctanos</h1>

            <section class="formulario-div">
                <!-- Título del formulario -->
                <h2>Información requerida</h2>

                <!-- Contenido formulario -->
                <form onsubmit="return validarNombre();" id="miFormulario">

                        <!-- Nombre -->
                        <label for="nombre">Nombre y apellido/s*</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre y al menos 1 apellido">
                        <span id="error-nombre" style="color: rgb(179, 56, 56);"></span>

                        <!-- Correo electrónico -->
                        <label for="">Correo electrónico*</label>
                        <input type="email" id="correo" name="correo" placeholder="ejemplo@gmail.com" required>
                        <span id="error-correo" style="color: rgb(179, 56, 56);"></span>

                        <!-- Mensaje -->
                        <label for="mensaje">Mensaje (máx 200 caracteres):</label>
                        <textarea id="mensaje" name="mensaje" placeholder="Déjanos tu mensaje aquí..." maxlength="200" oninput="actualizarContador()" rows="5" cols="30" required></textarea>
                        <span id="error-mensaje" style="color: rgb(179, 56, 56);"></span>
                        <p id="contador">200 caracteres restantes</p>

                        <!-- ENVIAR -->
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </section>
        </main>
        <!-- FOOTER -->

        <footer>

            <div class="seccion-footer">
                <h3>Horario de atención</h3>
                <div class="footer-links">
                    <span>Lunes a Viernes: 09:00 - 20:30</span>
                    <span>Sábados, Domingos y Festivos: 11:00 - 16:30</span>
                </div>
            </div>

            <div class="seccion-footer">
                <h3>Catálogo</h3>
                <div class="footer-links">
                    <span>Perfumes Árabes</span>
                    <span>Rasasi</span>
                    <span>Carolina Herrera</span>
                    <span>Paco Rabanne</span>
                    <span>Y más...!</span>
                </div>
            </div>

            <div class="seccion-footer">
                <h3>Sobre nosotros</h3>
                <div class="footer-links">
                    <a href="nosotros.html">Garantías</a>
                    <a href="nosotros.html">Métodos de pago</a>
                    <a href="nosotros.html">Fundación</a>
                </div>
            </div>

        </footer>
        <p class="licencia">&copy Diseñado y desarrollado por Axel Soto y Nicolás Carvajal.</p>
<script src="./js/contacto.js"></script>
<script src="./js/burger.js"></script>
</body>