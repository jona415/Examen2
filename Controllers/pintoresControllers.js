let mongoose = require ("mongoose");
//Vamos a unirlo al modelo 
Let Pintores = require ("../models/Pintores")

let pintoresController = {};
/*LISTAR -> FIND()*/
pintoresController.list = (req,res)=>{
    Pintores.find({})
    .limit(20)
    .skip(num:0)
    .exec(callback:(err, pintor)=>{
        if(err){
            console.log("Error:", err)
        }
        res.render(view:"../views/index", options{
            pintores: pintor,
            titulo: "Listado de pintores",
            year: new Date().getDate()
        })
    })
   };

   module.exports = pintoresController;
