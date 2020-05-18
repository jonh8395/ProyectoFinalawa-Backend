const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "18.217.14.101",
    user: "awa_user",
    password: "Abc12345",
    database: "awa"

});


conn.connect((error)=>{
    if(error) console.log("Error en el servidor de Base de datos");
    else console.log("Servidor de db corriendo");

});
module.exports = conn;