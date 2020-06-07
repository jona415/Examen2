//Importamos las depedencias
 const express = require("express");
 const hbs = require("hbs");
 const mongoose = require("mongoose");
 //Creamos una constante para el valor del puerto
 const PUERTO = process.env.PORT // 3000;

 //Emplear las rutas
 let pintoresRouter = require("./routes/pintor");
 const app = express();
 app.set("view engine", "hbs");
 hbs.registrerPartials(directory:__dirname + '/views/partials');
 app.use(express.static(__dirname + '/public'));

 //vamos a decirle a express la ruta a emplear
 app.use(fn: '/', pintoresRouter);

 /*La conexion con Mongo DB*/
 mongoose.Promise = global.Promise;
 const cadena= 'mongodb+srv://jonathan12:<Jona12345>@cluster0-hy7st.mongodb.net/<dbname>?retryWrites=true&w=majority'
 mongoose.connect(cadena,options:¨{useNewUrlParser:true, useUnifiedTopology: true})
   .then(()=>{})
   console.log('Conexion establecida= oD');
   })
   .catch(err=> console.log(err));

   /*Arrancar el servidor web*/
   app.listen(PUERTO, ()=>{
       console.log('Escuchando el puerto...');
       });
       {
           nombre:"Vicent Van Gogh"
           nacionalidad:"Holandes"
           corriente:"Impresionismo"
           pintura:"noche.jpg"
