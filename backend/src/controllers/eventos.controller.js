import pool from "../config/db.js";

// Obtener todos los eventos
export const obtenerEventos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM eventos ORDER BY fecha ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener eventos" });
  }
};

// Obtener un evento por ID
export const obtenerEventoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM eventos WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener evento" });
  }
};

// Crear un nuevo evento
export const crearEvento = async (req, res) => {
  const { nombre, descripcion, lugar, tipo, fecha, hora } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO eventos (nombre, descripcion, lugar, tipo, fecha, hora) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [nombre, descripcion, lugar, tipo, fecha, hora]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al crear evento" });
  }
};

// Actualizar un evento
export const actualizarEvento = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, lugar, tipo, fecha, hora } = req.body;
  try {
    const result = await pool.query(
      `UPDATE eventos 
       SET nombre=$1, descripcion=$2, lugar=$3, tipo=$4, fecha=$5, hora=$6 
       WHERE id=$7 RETURNING *`,
      [nombre, descripcion, lugar, tipo, fecha, hora, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al actualizar evento" });
  }
};

// Eliminar un evento
export const eliminarEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM eventos WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    res.json({ mensaje: "Evento eliminado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al eliminar evento" });
  }
};
