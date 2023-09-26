const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'containers-us-west-111.railway.app', 
  database: 'railway',
  password: 'GXjeg3RwUP1SrrYkfGwb',
  port: 7083, 
});

// Ruta de prueba 
app.get('/', (req, res) => {
  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.send(`La fecha actual es: ${result.rows[0].now}`);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
