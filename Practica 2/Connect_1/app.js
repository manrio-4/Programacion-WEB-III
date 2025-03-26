const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'con1'
});

// Iniciar medición de tiempo
console.time("Tiempo de ejecución");

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');

  console.time("Consulta SQL"); // Medir solo la consulta
  connection.query('SELECT * FROM users', (err, results, fields) => {
    if (err) throw err;
    console.timeEnd("Consulta SQL");

    console.log(results);

    connection.end(() => {
      console.timeEnd("Tiempo de ejecución"); // Finaliza la medición global
    });
  });
});
//Tiempo: 4.808ms