import React from "react";

const EventoCard = ({ evento }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{evento.nombre}</h3>
      <p>{evento.descripcion}</p>
      <p>Lugar: {evento.lugar}</p>
      <p>Tipo: {evento.tipo}</p>
      <p>Fecha: {new Date(evento.fecha).toLocaleDateString()}</p>
      <p>Hora: {evento.hora}</p>
    </div>
  );
};

export default EventoCard;
