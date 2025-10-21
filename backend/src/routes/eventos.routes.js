import express from "express";
import {
  obtenerEventos,
  obtenerEventoPorId,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} from "../controllers/eventos.controller.js";

const router = express.Router();

// Rutas CRUD
router.get("/", obtenerEventos);
router.get("/:id", obtenerEventoPorId);
router.post("/", crearEvento);
router.put("/:id", actualizarEvento);
router.delete("/:id", eliminarEvento);

export default router;
