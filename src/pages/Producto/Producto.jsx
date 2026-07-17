import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Producto.css";

function Producto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        setCargando(true);
        setError(null);
        const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!respuesta.ok) throw new Error("No se pudo obtener el producto");
        const data = await respuesta.json();
        setProducto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerProducto();
  }, [id]);


  if (cargando) return <p className="producto-estado">Cargando producto...</p>;
  if (error) return <p className="producto-estado">Error: {error}</p>;
  if (!producto) return null;

  return (
    <section className="producto">
      <img src={producto.image} alt={producto.title} className="producto-img" />
      <div className="producto-info">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p className="producto-id">ID en la URL: {id}</p>
        <button onClick={() => navigate(-1)}>Volver</button>
        </div>
        <h1>{producto.title}</h1>
        <p className="producto-categoria">{producto.category}</p>
        <p className="producto-precio">${producto.price}</p>
        <p className="producto-desc">{producto.description}</p>
      </div>
    </section>
  );
}

export default Producto;