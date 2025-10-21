// src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Configurar variables de entorno
dotenv.config();

// Crear app
const app = express();

// Middlewares
app.use(cors()); // Permite que el frontend acceda a la API
app.use(express.json()); // Para recibir datos en formato JSON

// Rutas
import eventosRoutes from "./routes/eventos.routes.js";
import ganadoresRoutes from "./routes/ganadores.routes.js";


app.use("/api/eventos", eventosRoutes);
app.use("/api/ganadores", ganadoresRoutes);

// Ruta raíz de prueba
app.get("/", (req, res) => {
  res.send("API DE EVENTOS UNIVERSITARIOS FUNCIONANDO");
});

// Puerto
const PORT = process.env.PORT || 4000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
