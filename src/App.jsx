import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/Layout.jsx";
import ProtectedRoute from "@/components/ProtectedRoute.jsx";
import Inicio from "@/pages/Inicio/Inicio.jsx";
import Nosotros from "@/pages/Nosotros/Nosotros.jsx";
import Contacto from "@/pages/Contacto/Contacto.jsx";
import Producto from "@/pages/Producto/Producto.jsx";
import Login from "@/pages/Login/Login.jsx";
import Perfil from "@/pages/Perfil/Perfil.jsx";
import "@/App.css";

function App() {
  const [usuario, setUsuario] = useState(null);

  const login = (nombre) => setUsuario({ nombre });
  const logout = () => setUsuario(null);

  return (
    <Routes>
      <Route path="/" element={<Layout usuario={usuario} onLogout={logout} />}>
        <Route index element={<Inicio />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="contacto" element={<Contacto />} />

        <Route
          path="producto/:id"
          element={
            <ProtectedRoute usuario={usuario}>
              <Producto />
            </ProtectedRoute>
          }
        />

        <Route path="login" element={<Login onLogin={login} />} />

        <Route
          path="perfil"
          element={
            <ProtectedRoute usuario={usuario}>
              <Perfil usuario={usuario} />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={
            <h2 style={{ padding: "2rem" }}>404 — Página no encontrada</h2>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
