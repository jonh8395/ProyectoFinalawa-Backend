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
   let quer;
   let ver = ``;
   
    if(req.query.Bandera > 0 && (req.query.Bandera <= 1)){
        
     quer =  `SELECT prueba.apariciones, prueba.nombre, prueba.sexo , prueba.editorial,prueba.primera_aparicion,prueba.historia,prueba3.poderes FROM  prueba, prueba3 where (prueba.idprueba = prueba3.idprueba) and (poderes like '%${req.query.array}%') and prueba.editorial = '${req.query.Editorial}' and prueba.sexo = '${req.query.Sexo}'`    ;
    }else{
        
        for (let index = 0; index < req.query.array.length; index++) {
           ver = ver + `and (poderes like '%${req.query.array[index]}%')` 
        }

        quer =  `SELECT prueba.apariciones, prueba.nombre, prueba.sexo , prueba.editorial,prueba.primera_aparicion,prueba.historia,prueba3.poderes FROM  prueba, prueba3 where (prueba.idprueba = prueba3.idprueba) ` +  ver  +`and prueba.editorial = '${req.query.Editorial}' and prueba.sexo = '${req.query.Sexo}'`    ;
    }
    conn.query(quer,(error,heroes, cols)=>{
        if(error) resp.status(500).json({status: 0 , message: "Error en conexion a la tabla"});
        else resp.json({status: 1 , message: "Se obtuvo informacion satisfactoriamente", heroes});
    });

});


app.get(`/heros`,  (req,resp,next) =>{
    let ver = ``;
    let quer;
    
    if(req.query.Bandera > 0 && (req.query.Bandera <= 1)){
        
     quer =  `SELECT prueba.apariciones,prueba.nombre, prueba.sexo , prueba.editorial,prueba.primera_aparicion,prueba.historia,prueba3.poderes FROM  prueba, prueba3 where (prueba.idprueba = prueba3.idprueba) and (poderes like '%${req.query.array}%')  and prueba.sexo = '${req.query.Sexo}'`    ;
    }else{
        
        for (let index = 0; index < req.query.array.length; index++) {
            ver = ver + `and (poderes like '%${req.query.array[index]}%')` 
         }
        quer =  `SELECT prueba.apariciones,prueba.nombre, prueba.sexo , prueba.editorial,prueba.primera_aparicion,prueba.historia,prueba3.poderes FROM  prueba, prueba3 where (prueba.idprueba = prueba3.idprueba)` + ver + ` and prueba.sexo = '${req.query.Sexo}'`    ;   
    }
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
    let query = `SELECT  nombre FROM Usuario WHERE email='${req.body.user}' AND password = '${req.body.password}'`;
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
  let query = `INSERT INTO Usuario (nombre,email,password) VALUES ('${req.body.nombre}' ,'${req.body.email}' ,'${req.body.password}' )`;
    conn.query(query, (error,filas,col) =>{
            if(error) resp.status(500).json({status:0, message:"No se pudo insertar el usuario"});
            else resp.json({status: 1 , message: `Se insertó usuario satisfactoriamente ${filas.insertId}`});
    });
});



app.post('/power' , (req,resp,next)=>{
    let query = `INSERT INTO prueba (editorial,historia,sexo,primera_aparicion,nombre,apariciones) VALUES ('${req.body.editorial.toUpperCase()}' ,'${req.body.historia}' ,'${req.body.sexo}','${req.body.primera}','${req.body.nombre}','${req.body.aparicion}' )`;
      conn.query(query, (error,filas,col) =>{
              if(error) resp.status(500).json({status:0, message:"No se pudo insertar el usuario"});
              else resp.json({status: 1 , message: `Se insertó usuario satisfactoriamente ${filas.insertId}`});
      });
  });


  app.get('/max' ,(req,resp,next) =>{
    let query =  `SELECT max(idprueba) as maximo from prueba`;
    conn.query(query,(error,heroes, cols)=>{
        if(error) resp.status(500).json({status: 0 , message: "Error en conexion a la tabla"});
        else resp.json({status: 1 , message: "Se obtuvo informacion satisfactoriamente", heroes});
    });

});


app.post('/insert' , (req,resp,next)=>{
    
    let query = `INSERT INTO prueba3 (idprueba,poderes) VALUES (${req.body.id} ,'${req.body.poderes}')`;
      conn.query(query, (error,filas,col) =>{
              if(error) resp.status(500).json({status:0, message:"No se pudo insertar el poder"});
              else resp.json({status: 1 , message: `Se insertó usuario satisfactoriamente ${filas.insertId}`});
      });
  });


}