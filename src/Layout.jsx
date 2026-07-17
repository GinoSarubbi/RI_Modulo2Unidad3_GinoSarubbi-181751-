import { Outlet } from "react-router-dom";
import Header from "@/components/Header.jsx";

function Layout({ usuario, onLogout }) {
  return (
    <>
      <Header usuario={usuario} onLogout={onLogout} />
      <main className="contenido">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
