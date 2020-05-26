// Importar los modulos de express.js
const express = require("express");

// Crear un servidor de express
const app = express();

// Inicializar el servidor en un puerto en especifico
app.listen(7000, () => {
  console.log("Servidor Inicializado en el puerto 7000");
});
