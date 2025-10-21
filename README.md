# 🎓 Eventos Universitarios

[![Frontend](https://img.shields.io/badge/Frontend-React-blue)](https://reactjs.org/) 
[![Backend](https://img.shields.io/badge/Backend-Node.js-green)](https://nodejs.org/) 
[![Database](https://img.shields.io/badge/Database-PostgreSQL-blue)](https://www.postgresql.org/) 
[![Docker](https://img.shields.io/badge/Docker-Containers-lightblue)](https://www.docker.com/)

---

## 📌 Descripción

**Eventos Universitarios** es una aplicación web para gestionar eventos deportivos en entornos universitarios, incluyendo el registro de ganadores por disciplina.  

El proyecto está compuesto por tres servicios principales:

- **Frontend**: React.js consumiendo la API del backend.
- **Backend**: Node.js con Express exponiendo endpoints REST para eventos y ganadores.
- **Base de datos**: PostgreSQL para almacenar la información de manera persistente.

El proyecto está listo para ser ejecutado de manera local mediante **Docker Compose**, lo que facilita la instalación y la configuración.

---

## 🗂 Estructura del proyecto
```
eventos_universitarios/
├── backend/                  # Servidor Node.js + Express
│   ├── src/
│   │   ├── controllers/     # Lógica de eventos y ganadores
│   │   ├── routes/          # Rutas API
│   │   ├── config/          # Configuración DB
│   │   └── app.js           # Archivo principal
│   ├── package.json
│   └── Dockerfile
├── frontend/                 # Aplicación React
│   ├── src/
│   │   ├── pages/           # Páginas: Eventos, Ganadores
│   │   ├── components/      # Componentes reutilizables
│   │   └── services/        # Servicio API
│   ├── package.json
│   └── Dockerfile
└── docker-compose.yml        # Orquestación de contenedores
```
---

## ⚙️ Requisitos

- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)
- Git
- Navegador moderno (Chrome, Firefox, Edge)

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/sstugal/eventos.git
cd eventos_universitarios

2️⃣ Levantar los servicios con Docker
sudo docker compose up --build


Esto iniciará:

PostgreSQL: eventos_db

Backend Node.js: http://localhost:4000/api

Frontend React: http://localhost:3000

3️⃣ Acceder al proyecto

Frontend: http://localhost:3000

API Backend:

Eventos: http://localhost:4000/api/eventos

Ganadores: http://localhost:4000/api/ganadores

💻 Uso de Git

Ver cambios locales:

git status


Agregar cambios:

git add .


Crear commit:

git commit -m "Mensaje descriptivo del cambio"


Subir cambios al repositorio remoto:

git push


Volver a una versión anterior (si es necesario):

git log --oneline
git reset --hard <commit_id>
git push --force  # si se requiere actualizar la rama remota

📦 Comandos Docker útiles

Levantar contenedores:

sudo docker compose up --build


Detener contenedores:

sudo docker compose down


Ver logs de un contenedor:

sudo docker logs -f <nombre_contenedor>

🔧 Notas importantes

Cambiar la URL de la API en el frontend si se usa Docker (http://localhost:4000/api funciona localmente).

Separa frontend, backend y base de datos como microservicios usando Docker Compose.

Realiza commits frecuentes para mantener versiones seguras y controladas en GitHub.

📚 Licencia
Este proyecto es de uso educativo y personal

