const express = require("express");
const app = express();
const port= 2500;

app.get("/",(req ,res) =>{
res.send("El server esta corriendo en el puerto $ {port}")
})

app.post("/listaDeCompra",(req,res)=>{
    res.json[{"nombreProducto": "manzanas","precioKg":"100"},
    {"nombreProducto": "naranjas","precioKg":"95"},
    {"nombreProducto":"carneMolida","precioKg":"400"},
    {"nombreProducto":"tomates","precioKg":"150"}
]
})