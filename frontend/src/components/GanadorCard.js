import React from "react";

const GanadorCard = ({ ganador }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>{ganador.deporte}</h3>
      <p>Evento ID: {ganador.evento_id}</p>
      <p>1° Lugar: {ganador.primer_lugar}</p>
      <p>2° Lugar: {ganador.segundo_lugar}</p>
      <p>3° Lugar: {ganador.tercer_lugar}</p>
      <p>Fecha: {new Date(ganador.fecha).toLocaleDateString()}</p>
    </div>
  );
};

export default GanadorCard;
