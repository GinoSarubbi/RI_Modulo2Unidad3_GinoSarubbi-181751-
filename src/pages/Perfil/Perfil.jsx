import "./Perfil.css";

function Perfil({ usuario }) {
  return (
    <section className="perfil">
      <h1>Perfil</h1>
      <p>
        Hola <strong>{usuario.nombre}</strong>. Esta es una ruta protegida:
        solo la ves porque iniciaste sesion
      </p>
    </section>
  );
}

export default Perfil;
