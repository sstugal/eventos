import express from "express";
import {
  obtenerGanadores,
  obtenerUltimos5Ganadores,
  agregarGanador,
  actualizarGanador,
  eliminarGanador
} from "../controllers/ganadores.controller.js";

const router = express.Router();

// Rutas CRUD
router.get("/", obtenerGanadores);                    // Todos los ganadores
router.get("/ultimos5/:deporte", obtenerUltimos5Ganadores); // Últimos 5 de un deporte
router.post("/", agregarGanador);                     // Crear nuevo ganador
router.put("/:id", actualizarGanador);               // Actualizar ganador
router.delete("/:id", eliminarGanador);              // Eliminar ganador

export default router;
