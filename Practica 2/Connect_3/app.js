const mysql = require('mysql2');

// Crear un pool de conexiones
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'con1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Iniciar medición de tiempo
console.time("Tiempo de ejecución");

pool.getConnection((err, connection) => {
  if (err) throw err;
  
  console.time("Consulta SQL"); // Medir solo la consulta
  connection.query('SELECT * FROM users', (err, results, fields) => {
    if (err) throw err;
    console.timeEnd("Consulta SQL"); // Fin de la medición de consulta
    
    console.log(results);
    
    connection.release(); // Liberar la conexión
    
    console.timeEnd("Tiempo de ejecución"); // Fin de la medición total
  });
});
//tiempo: 3.86ms