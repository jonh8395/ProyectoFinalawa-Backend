const conn = require('../../configuration/serverdb');
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
module.exports = (app) =>{

app.get('/heroe' ,(req,resp,next) =>{
let query = "Select * FROM prueba";
conn.query(query,(error,heroes, cols)=>{
    if(error) resp.status(500).json({status: 0 , message: "Error en conexion a la tabla"});
    else resp.json({status: 1 , message: "Se obtuvo informacion satisfactoriamente", heroes});
});
});

app.get(`/hero`,  (req,resp,next) =>{
   
    
    let quer =  `SELECT prueba.nombre, prueba.sexo , prueba.editorial,prueba.primera_aparicion,prueba.historia,prueba3.poderes FROM  prueba, prueba3 where (prueba.idprueba = prueba3.idprueba) and (poderes like '%${req.query.array}%') and prueba.editorial = '${req.query.Editorial}' and prueba.sexo = '${req.query.Sexo}'`    ;
    conn.query(quer,(error,heroes, cols)=>{
        if(error) resp.status(500).json({status: 0 , message: "Error en conexion a la tabla"});
        else resp.json({status: 1 , message: "Se obtuvo informacion satisfactoriamente", heroes});
    });

});


app.get(`/heros`,  (req,resp,next) =>{
    
    let quer =  `SELECT prueba.nombre, prueba.sexo , prueba.editorial,prueba.primera_aparicion,prueba.historia,prueba3.poderes FROM  prueba, prueba3 where (prueba.idprueba = prueba3.idprueba) and (poderes like '%${req.query.array}%')  and prueba.sexo = '${req.query.Sexo}'`    ;
    conn.query(quer,(error,heroes, cols)=>{
        if(error) resp.status(500).json({status: 0 , message: "Error en conexion a la tabla"});
        else resp.json({status: 1 , message: "Se obtuvo informacion satisfactoriamente", heroes});
    });

});






app.get('/editorial' ,(req,resp,next) =>{
    let query =  `Select distinct editorial FROM prueba`;
    conn.query(query,(error,heroes, cols)=>{
        if(error) resp.status(500).json({status: 0 , message: "Error en conexion a la tabla"});
        else resp.json({status: 1 , message: "Se obtuvo informacion satisfactoriamente", heroes});
    });

});

app.get('/poderes' ,(req,resp,next) =>{
    let query =  `Select * FROM prueba2`;
    conn.query(query,(error,heroes, cols)=>{
        if(error) resp.status(500).json({status: 0 , message: "Error en conexion a la tabla"});
        else resp.json({status: 1 , message: "Se obtuvo informacion satisfactoriamente", heroes});
    });

});


app.post('/login', (req,resp,next)=>{
    let query = `SELECT  nombre FROM USUARIO WHERE email='${req.body.user}' AND password = '${req.body.password}'`;
    conn.query(query , (error,resultado,col)=>{
        if(error) resp.status(500).json({status:0 , message: "Error al intentar obtener datos"});
        else if(resultado.length > 0){
            resp.json({status: 1 , message: "Usuario y password correctos"});
        }else{
            resp.json({status: 0 , message: "No coincide usuario o password"});
        }
    });
});

app.post('/registro' , (req,resp,next)=>{
  let query = `INSERT INTO USUARIO (nombre,email,password) VALUES ('${req.body.nombre}' ,'${req.body.email}' ,'${req.body.password}' )`;
    conn.query(query, (error,filas,col) =>{
            if(error) resp.status(500).json({status:0, message:"No se pudo insertar el usuario"});
            else resp.json({status: 1 , message: `Se insertó usuario satisfactoriamente ${filas.insertId}`});
    });
});

}