import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Inicio.css";

function Inicio() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const respuesta = await fetch("https://fakestoreapi.com/products");
        if (!respuesta.ok) throw new Error("Error al obtener los productos");
        const data = await respuesta.json();
        setProductos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return (
    <section className="inicio">
      <h1>El e-commerce que necesitas</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Productos destacados</h3>
        <button className="btn-contacto" onClick={() => navigate("/contacto")}>
          Ir a Contacto
        </button>
      </div>

      {loading && <p>Cargando productos...</p>}
      {error && <p>Error: {error}</p>}

      <div className="grid-productos">
        {productos.map((prod) => (
          <div key={prod.id} className="card-producto">
            <img src={prod.image} alt={prod.title} />
            <span className="card-titulo">{prod.title}</span>
            <button onClick={() => navigate(`/producto/${prod.id}`)}>
              Ver detalle
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Inicio;
