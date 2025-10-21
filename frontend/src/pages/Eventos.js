import React, { useEffect, useState } from "react";
import { getEventos } from "../services/api";

const Eventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    getEventos()
      .then((res) => setEventos(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!eventos.length) return <p>Cargando eventos...</p>;

  return (
    <div>
      <h1>Eventos Universitarios</h1>
      {eventos.map((evento) => (
        <div
          key={evento.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h2>{evento.nombre}</h2>
          <p>{evento.descripcion}</p>
          <p>Lugar: {evento.lugar}</p>
          <p>Tipo: {evento.tipo}</p>
          <p>Fecha: {new Date(evento.fecha).toLocaleDateString()}</p>
          <p>Hora: {evento.hora}</p>
        </div>
      ))}
    </div>
  );
};

export default Eventos;
