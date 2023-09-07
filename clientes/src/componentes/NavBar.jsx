import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user} = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to="/" src>
        <img className="log" src="https://cdn.pixabay.com/photo/2016/09/30/17/22/ecommerce-1705788_640.png" alt="Logo" />
        </Link>
      </h1>
    
      <ul className="navegador flex gap-x-4">
        {isAuthenticated ? (
          <>
            <li className="especial">Bienvenido {user.username }</li>
            
              <li><Link to="/add-pendiente">Crear lista</Link></li>
              
              <li><Link to="/pendientes">Mi lista</Link></li>

              <li><Link to="/productos">Productos</Link></li>
              
            
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Salir
              </Link>
            </li>
          </>
        ) : (
          <>
          <p className="haz"> Haz tus mejores compras </p>
            <li>
              <Link to="/login">Inicia sesión</Link>
            </li>
            <li>
              <Link to="/register">Registrate</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Navbar