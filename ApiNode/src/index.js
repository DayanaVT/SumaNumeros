/*const express = require('express');
const app = express();
const morgan = require('morgan');

//configuración del servidor en el puerto 3000

app.set('port', process.env.PORT || 3000);
app.set('json spaces',2)


//tarea middleware es una función que intercomunica a dos funciones
//recibe la salida de la info la procesa y la manda de nuevo
//transforma datos para que otra funcion la pueda recibir 

app.use(morgan('dev'));
app.use(express.urlencodd({extended:false}))
app.use(express.json());

//nuestro primer web service
app.get('/',(req, res)=>{
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})

//iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log('Server listening on pport $(app.get('port')');
})*/

// Importación de módulos

const express = require("express");
const morgan = require("morgan");

const app = express();

// Configuración del servidor
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.json({
    mensaje: "Esta es mi primera API",
  });
});

// Iniciando el servidor //estas rutas se conocen como end
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});

//Endpoint para sumar dos múmeros
app.post('/sumar', (req, res)=>{ //http://localhost/sumar
    const {num1, num2} = req.body;//se declaran los datos de entrada

    //validar que se hayan enviado los dos números que no esten vacio
    if (!num1 || !num2){
        return res.status(400).send({error: 'Faltan números para sumar'});
    }

    //sumar los números
    const resultado = num1 +num2;

    //enviar el resultado
    res.send({resultado});
});

//Inniciando 

 /*
// Importación de módulos
const express = require("express");
const morgan = require("morgan");

const app = express();

// Configuración del servidor
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.json({
    mensaje: "Esta es mi primera API",
  });
});

// Iniciando el servidor //estas rutas se conocen como end
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});

//Endpoint para sumar dos múmeros
app.post('/nombre', (req, res)=>{ //http://localhost/sumar
    const {nombre, apellido} = req.body;//se declaran los datos de entrada

    //validar que se hayan enviado los dos números que no esten vacio
    if (!nombre || !apellido){
        return res.status(400).send({error: 'Falta apellido o nombre por poner'});
    }

    //sumar los números
    const mostrar = nombre + apellido;

    //enviar el resultado
    res.send({mostrar});
});
*/