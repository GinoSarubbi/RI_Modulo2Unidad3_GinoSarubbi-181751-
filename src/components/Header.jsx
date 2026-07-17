import { NavLink, useNavigate, Link } from "react-router-dom";
import "./Header.css";

function Header({ usuario, onLogout }) {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    onLogout();
    navigate("/inicio"); 
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          GinoShop
        </Link>

        <nav className="nav">
    
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <NavLink to="/perfil">Perfil</NavLink>

          {usuario ? (
            <button className="btn-sesion" onClick={cerrarSesion}>
              Cerrar Sesion 
            </button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
