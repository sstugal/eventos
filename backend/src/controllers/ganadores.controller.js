import pool from "../config/db.js";

// Obtener todos los ganadores
export const obtenerGanadores = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM ganadores ORDER BY fecha DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener ganadores" });
  }
};

// Obtener últimos 5 ganadores de un deporte
export const obtenerUltimos5Ganadores = async (req, res) => {
  const { deporte } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM ganadores WHERE deporte = $1 ORDER BY fecha DESC LIMIT 5",
      [deporte]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener últimos 5 ganadores" });
  }
};

// Agregar un nuevo ganador
export const agregarGanador = async (req, res) => {
  const { deporte, evento_id, primer_lugar, segundo_lugar, tercer_lugar, fecha } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO ganadores 
       (deporte, evento_id, primer_lugar, segundo_lugar, tercer_lugar, fecha) 
       VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
      [deporte, evento_id, primer_lugar, segundo_lugar, tercer_lugar, fecha]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al agregar ganador" });
  }
};

// Actualizar un ganador
export const actualizarGanador = async (req, res) => {
  const { id } = req.params;
  const { deporte, evento_id, primer_lugar, segundo_lugar, tercer_lugar, fecha } = req.body;
  try {
    const result = await pool.query(
      `UPDATE ganadores 
       SET deporte=$1, evento_id=$2, primer_lugar=$3, segundo_lugar=$4, tercer_lugar=$5, fecha=$6
       WHERE id=$7 RETURNING *`,
      [deporte, evento_id, primer_lugar, segundo_lugar, tercer_lugar, fecha, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Ganador no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar ganador" });
  }
};

// Eliminar un ganador
export const eliminarGanador = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM ganadores WHERE id=$1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Ganador no encontrado" });
    }
    res.json({ mensaje: "Ganador eliminado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al eliminar ganador" });
  }
};
