const mysql = require('mysql2/promise');

async function main() {
  try {
    console.time("Tiempo de ejecución"); // Iniciar medición total

    // Conectar a la base de datos
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'con1'
    });
    
    console.log('Connected to MySQL Database!');
    
    console.time("Consulta SQL"); // Medir solo la consulta
    
    // Ejecutar la consulta
    const [rows, fields] = await connection.execute('SELECT * FROM users');
    
    console.timeEnd("Consulta SQL"); // Fin de medición de consulta
    
    console.log('Query Result:', rows);
    
    // Cerrar la conexión
    await connection.end();
    
    console.timeEnd("Tiempo de ejecución"); // Fin de medición total
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
//Tiempo: 6.994ms