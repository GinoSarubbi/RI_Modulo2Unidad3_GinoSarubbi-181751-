import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const destino = location.state?.from?.pathname || "/";

  const manejarLogin = () => {
    if (!nombre.trim()) return;
    onLogin(nombre);
    navigate(destino, { replace: true }); 
  };

  return (
    <section className="login">
      <h1>Iniciar sesión</h1>
      <p>Ingresá un nombre para simular el login.</p>

      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={manejarLogin}>Entrar</button>
    </section>
  );
}

export default Login;
