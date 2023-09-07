import React, { useState, useEffect } from "react";

function Inicio() {
  const images = ["producto1.jpg", "producto2.jpg", "producto3.jpg"]; // Rutas de tus imágenes
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inicio">
      <div className="Bientitulo">
        <h1 className="estilo">Tu Destino de Compras Online</h1>
      </div>

      <div className="carousel">
        <img src={images[currentImage]} alt={`Imagen ${currentImage + 1}`} />
      </div>

      <div className="info">
        <div className="seccion">
          <h2>Cómo Empezar:</h2>
          <p>
            Inicia Sesión: Si ya tienes una cuenta en TC.COM, inicia sesión. Si
            no, regístrate para crear una cuenta gratuita. Explora y Agrega:
            Explora nuestra tienda, encuentra tus productos favoritos y
            agrégalos a tu lista de compras. Administra Tu Lista: Accede a tu
            cuenta para ver, editar y administrar tu lista de compras en
            cualquier momento. ¡Comienza a disfrutar de una experiencia de
            compra aún más conveniente con la función de lista de compras en
            TC.COM!
          </p>
        </div>

        <div className="seccion">
          <h2>Explora Nuestros Productos:</h2>
          <p>
            Descubre una selección única de productos cuidadosamente elegidos
            para ti: Electrónica: Desde teléfonos inteligentes de última
            generación hasta dispositivos electrónicos esenciales, tenemos lo
            que necesitas. Moda y Accesorios: Mantente a la moda con nuestra
            colección de ropa, calzado y accesorios para todas las edades. Hogar
            y Decoración: Transforma tu espacio con nuestras opciones de
            decoración para el hogar. Juguetes y Entretenimiento: Encuentra
            juguetes educativos y opciones de entretenimiento para todas las
            edades.
          </p>
        </div>
      </div>

      <div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <p className="letra">
              En TC.COM, queremos hacer que tu experiencia de compra sea aún más
              conveniente. Por eso, te ofrecemos la opción de crear y guardar tu
              propia lista de compras personalizada. Ya sea que estés
              planificando tus compras futuras o simplemente quieras mantener un
              registro de tus productos favoritos, nuestra función de lista de
              compras está aquí para ti.
            </p>
            <p className="como">
              <h2>Cómo Funciona:</h2>
               Explora Nuestra Tienda: Navega por nuestra amplia
              gama de productos y encuentra los artículos que te interesen.
              Desde electrónica hasta moda y hogar, tenemos todo lo que
              necesitas. Agrega a tu Lista de Compras: Cuando encuentres un
              producto que te guste, simplemente haz clic en el botón "Agregar a
              la Lista de Compras". El producto se guardará automáticamente en
              tu lista personalizada. Administra Tu Lista: Accede a tu cuenta
              para ver y administrar tu lista de compras en cualquier momento.
              Puedes agregar o eliminar productos según tus preferencias.
              Planifica Tus Compras: Utiliza tu lista de compras como una
              herramienta de planificación. Añade productos que desees comprar
              en el futuro y organiza tus compras de manera eficiente. Compra
              con Facilidad: Cuando estés listo para realizar tu compra,
              simplemente selecciona los productos de tu lista y agrégales al
              carrito de compras. No más búsquedas repetidas ni olvidos.
            </p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Imagen: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <image
                href="https://img.freepik.com/vector-gratis/ilustracion-concepto-pagina-web-comercio-electronico_114360-8204.jpg?w=2000"
                width="100%"
                height="100%"
              />
            </svg>
          </div>
        </div>

        <hr className="featurette-divider" />

        {/* Repite el mismo patrón para las siguientes secciones */}

        {/* ... */}

        <hr className="featurette-divider" />
      </div>
    </div>
  );
}

export default Inicio;
