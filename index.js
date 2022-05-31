// Require modules
const ejsLayouts = require('express-ejs-layouts');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Motor de vistas EJS
app.set('view engine','ejs');
app.use(ejsLayouts);

//uso del body parser
app.use(express.urlencoded({extended:true}));

//Cargar modulo de ROUTES
const router = require('./routes/routes');
app.use('/',router);

// Recursos públicos
app.use(express.static('public'));

app.listen(port, ()=>{
    console.log("Servidor activo en puerto 8081");
});
