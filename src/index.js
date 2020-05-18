const app = require('./configuration/server');
require('./app/rutas/formulario')(app);
app.listen(app.get("port"),()=> console.log(`El servidor esta corriendo en ${app.get("port")}`));