import { useSearchParams } from "react-router-dom";
import "./Contacto.css";

const MENSAJES = [
  { id: 1, asunto: "Consulta de precios", tipo: "ventas" },
  { id: 2, asunto: "Problema con mi pedido", tipo: "soporte" },
  { id: 3, asunto: "Quiero trabajar con ustedes", tipo: "rrhh" },
  { id: 4, asunto: "Error en el pago", tipo: "soporte" },
];

function Contacto() {

  const [searchParams, setSearchParams] = useSearchParams();
  const tipo = searchParams.get("tipo") || "todos";

  const mensajesFiltrados =
    tipo === "todos" ? MENSAJES : MENSAJES.filter((m) => m.tipo === tipo);

  return (
    <section className="contacto">
      <h1>Contacto</h1>
      <p>Filtrá los mensajes por tipo (se refleja en la URL):</p>

      <div className="filtros">
        {["todos", "ventas", "soporte", "rrhh"].map((t) => (
          <button
            key={t}
            className={tipo === t ? "activo" : ""}
            onClick={() => setSearchParams({ tipo: t })}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="lista-mensajes">
        {mensajesFiltrados.map((m) => (
          <li key={m.id}>
            <strong>{m.asunto}</strong> — <em>{m.tipo}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contacto;
