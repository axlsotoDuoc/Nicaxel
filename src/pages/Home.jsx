import React from "react";
import "../styles/main.css";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div className="banner-div">
        <span className="banner">
          Aprovecha solo por esta semana hasta un <span>60%</span> en productos
          seleccionados.{" "}
          <a href="catalogo.html" className="pincha">
            Pincha aquí para más info.
          </a>{" "}
        </span>
      </div>

      {/* Navbar Mobile */}
      <nav className="navbar-mobile">
        {/* Título */}
        <a href="index.html" className="tittle">
          NICAXEL
        </a>

        {/* Links */}
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="nosotros.html" className="nav-link">
              Sobre nosotros
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="catalogo.html" className="nav-link">
              Catálogo
            </a>
          </li>
          <li className="nav-item">
            <a href="contacto.html" className="nav-link">
              Contacto
            </a>
          </li>
          <li className="nav-item">
            <div className="login-flex">
              <a href="login.html" className="nav-link">
                Iniciar sesión
              </a>
              <img src="./Img/login.svg" alt="Login icon" />
            </div>
          </li>
          <li className="nav-item">
            <a href="carrito.html" className="nav-link">
              Ver carrito 🛒(2)
            </a>
          </li>
        </ul>

        {/* Burger */}
        <div className="burger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Navbar Desktop */}
      <nav className="navbar-dekstop">
        <a href="index.html" className="tittle">
          NICAXEL
        </a>

        <div className="nav-medio">
          <a href="nosotros.html">Sobre nosotros</a>
          <a href="#">Blog</a>
          <a href="contacto.html" className="navbar-contacto">
            Contacto
          </a>
        </div>

        <div className="nav-derecha">
          <a href="login.html">
            <img src="./Img/login.svg" alt="Icono de login" />
          </a>
          <div className="carrito-flex">
            <a href="carrito.html">
              <img src="./Img/carrito.svg" alt="Icono de carrito" />
            </a>
            <span>(1)</span>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main>
        {/* HEADER */}
        <header>
          <img src="Img/perfume02.jpg" alt="" className="header-img-01" />
          <div className="header-contenido">
            <h1>Fragancias de clase mundial</h1>
            <p>Ven y conoce cada una de nuestras líneas.</p>
            <p>
              Elegida la casa perfumera más elegante del continente por{" "}
              <strong>5 años </strong> consecutivos.
            </p>
            <a href="catalogo.html" className="header-button">
              Ver catálogo →
            </a>
          </div>
          <img src="Img/perfume.jpg" alt="" className="header-img-02" />
        </header>

        {/* BANNER LANZAMIENTO */}
        <section>
          <article className="banner-lanzamiento">
            <div className="banner-lanzamiento-flex">
              <img src="/Img/check.svg" alt="" />
              <div className="banner-lanzamiento-text">
                <span>Autenticidad Garantizada</span>
                <span>100% Productos Originales</span>
              </div>
            </div>
          </article>

          <article className="lanzamiento">
            <img
              src="//www.eliteperfumes.cl/cdn/shop/files/Banner_V_-ME.png?v=1756531485&amp;width=980"
              className="lanzamiento-img-01"
              alt="Banner"
            />
            <img
              srcSet="//www.eliteperfumes.cl/cdn/shop/files/Banner_H_-_ME.png?v=1756531489&amp;width=480 480w, //www.eliteperfumes.cl/cdn/shop/files/Banner_H_-_ME.png?v=1756531489&amp;width=980 980w, //www.eliteperfumes.cl/cdn/shop/files/Banner_H_-_ME.png?v=1756531489&amp;width=1200 1200w, //www.eliteperfumes.cl/cdn/shop/files/Banner_H_-_ME.png?v=1756531489&amp;width=1400 1400w, //www.eliteperfumes.cl/cdn/shop/files/Banner_H_-_ME.png?v=1756531489&amp;width=1600 1600w, //www.eliteperfumes.cl/cdn/shop/files/Banner_H_-_ME.png?v=1756531489&amp;width=1920 1920w, //www.eliteperfumes.cl/cdn/shop/files/Banner_H_-_ME.png?v=1756531489&amp;width=2560 2560w"
              className="lanzamiento-img-02"
              alt=""
            />
          </article>
        </section>

        {/* LOS MÁS VENDIDOS */}
        <section>
          <article className="mas-vendidos">
            <h3>🌟Los más vendidos</h3>
            <a href="catalogo.html">Ver catálogo completo</a>
          </article>

          <article className="perfumes-carrusel">
            {/* PERFUME 01 */}
            <div className="perfume">
              <div className="perfume-card">
                <img src="./Img/Yara-Lattafa.jpeg" alt="Perfume Yara Lattafa" />
                <div className="perfume-card-contenido">
                  <div className="descripcion-div">
                    <span className="marca">Lattafa</span>
                    <span className="descripcion">
                      Lattafa Lattafa Yara Mujer EDP 100 ML (M)
                    </span>
                  </div>
                  <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span>(372)</span>
                  </div>
                  <div className="precio">
                    <span>$23.740</span>
                    <span>$59.990</span>
                  </div>
                </div>
                <button className="addCarrito">Añadir al carrito</button>
              </div>
            </div>

            {/* PERFUME 02 */}
            <div className="perfume">
              <div className="perfume-card">
                <img
                  src="./Img/Versace-Eros-Flame.jpeg"
                  alt="Perfume Versace Eros Flame"
                />
                <div className="perfume-card-contenido">
                  <div className="descripcion-div">
                    <span className="marca">Lattafa</span>
                    <span className="descripcion">
                      Versace Versace Eros Flame Men EDP 100 ML (H)
                    </span>
                  </div>
                  <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span>(36)</span>
                  </div>
                  <div className="precio">
                    <span>$59.990</span>
                    <span>$89.990</span>
                  </div>
                </div>
                <button className="addCarrito">Añadir al carrito</button>
              </div>
            </div>

              {/* PERFUME 02 */}
            <div className="perfume">
              <div className="perfume-card">
                <img
                  src="./Img/Versace-Eros-Flame.jpeg"
                  alt="Perfume Versace Eros Flame"
                />
                <div className="perfume-card-contenido">
                  <div className="descripcion-div">
                    <span className="marca">Lattafa</span>
                    <span className="descripcion">
                      Versace Versace Eros Flame Men EDP 100 ML (H)
                    </span>
                  </div>
                  <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span>(36)</span>
                  </div>
                  <div className="precio">
                    <span>$59.990</span>
                    <span>$89.990</span>
                  </div>
                </div>
                <button className="addCarrito">Añadir al carrito</button>
              </div>
            </div>

              {/* PERFUME 02 */}
            <div className="perfume">
              <div className="perfume-card">
                <img
                  src="./Img/Versace-Eros-Flame.jpeg"
                  alt="Perfume Versace Eros Flame"
                />
                <div className="perfume-card-contenido">
                  <div className="descripcion-div">
                    <span className="marca">Lattafa</span>
                    <span className="descripcion">
                      Versace Versace Eros Flame Men EDP 100 ML (H)
                    </span>
                  </div>
                  <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span>(36)</span>
                  </div>
                  <div className="precio">
                    <span>$59.990</span>
                    <span>$89.990</span>
                  </div>
                </div>
                <button className="addCarrito">Añadir al carrito</button>
              </div>
            </div>

              {/* PERFUME 02 */}
            <div className="perfume">
              <div className="perfume-card">
                <img
                  src="./Img/Versace-Eros-Flame.jpeg"
                  alt="Perfume Versace Eros Flame"
                />
                <div className="perfume-card-contenido">
                  <div className="descripcion-div">
                    <span className="marca">Lattafa</span>
                    <span className="descripcion">
                      Versace Versace Eros Flame Men EDP 100 ML (H)
                    </span>
                  </div>
                  <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span>(36)</span>
                  </div>
                  <div className="precio">
                    <span>$59.990</span>
                    <span>$89.990</span>
                  </div>
                </div>
                <button className="addCarrito">Añadir al carrito</button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
