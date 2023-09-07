import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="conta">
        <div className="row">
          <div className="meta">
            <h3>TC.COM</h3>
            <p>Bueno , Bonito y Barato</p>
          </div>
          <div className="sociales col-md-6">
            <h3>Síguenos en Redes Sociales:</h3>
            <ul className="social-icons">
              <li>
                <a href="https://es-la.facebook.com/">
                  <i className="fab fa-facebook"> Facebook </i>
                  <img className="redes moving-icon"
                    src="https://cdn-icons-png.flaticon.com/128/4494/4494475.png"
                    alt="Texto alternativo de la imagen"
                  ></img>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=es">
                  <i className="fab fa-twitter">Twitter</i>
                  <img className="redes moving-icon"
                    src="https://cdn-icons-png.flaticon.com/128/4494/4494477.png"
                    alt="Texto alternativo de la imagen"
                  ></img>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram">Instagran</i>
                  <img className="redes moving-icon"
                    src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                    alt="Texto alternativo de la imagen"
                  ></img>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram">Linkedln</i>
                  <img className="redes moving-icon"
                    src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                    alt="Texto alternativo de la imagen"
                  ></img>
                </a>
              </li>
            
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contacto</h3>
            <p>¿Tienes preguntas? ¡Contáctanos!</p>
            <p>Email: CT.COM@egmail.com</p>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
