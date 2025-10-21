import React, { useEffect, useState } from "react";
import { getUltimos5Ganadores } from "../services/api";

const deportes = [
  "Fútbol Varones",
  "Fútbol Mujeres",
  "Futsal Varones",
  "Futsal Mujeres",
  "Vóley Mujeres",
  "Vóley Varones",
  "Basketball Varones",
  "Basketball Mujeres",
];

const Ganadores = () => {
  const [ganadores, setGanadores] = useState([]);
  const [deporte, setDeporte] = useState(deportes[0]);

  const fetchGanadores = (d) => {
    getUltimos5Ganadores(d)
      .then((res) => setGanadores(res.data))
      .catch((err) => console.error(err));
    setDeporte(d);
  };

  useEffect(() => {
    fetchGanadores(deporte);
  }, [deporte]);

  return (
    <div>
      <h1>Últimos 5 Ganadores</h1>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {deportes.map((d) => (
          <button key={d} onClick={() => fetchGanadores(d)}>
            {d}
          </button>
        ))}
      </div>

      {ganadores.length === 0 && <p>No hay ganadores para {deporte}</p>}

      {ganadores.map((g) => (
        <div
          key={g.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h3>{g.deporte}</h3>
          <p>1°: {g.primer_lugar}</p>
          <p>2°: {g.segundo_lugar}</p>
          <p>3°: {g.tercer_lugar}</p>
          <p>Fecha: {new Date(g.fecha).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Ganadores;
