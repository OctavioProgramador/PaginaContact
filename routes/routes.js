/*jshint esversion: 6 */

//importar modulos 
const express = require('express');
const path = require('path');

const sueldo = 5000;
const escuela = 'ITT'
const datosPersonales = [
    {
        name: "Jose",
        edad: 42,
        escuela: escuela
    },
    {"texto": "test"},
    99.99
]

// Creamos un objeto de Router Express
const router = express.Router();

// Exportar nuestro modulo ROUTES 
module.exports = router;

router.get('/', (req, res) =>{
   // res.send("Hola mundo");
   //res.json({message : "Hola mundo"});
   res.render('pages/home',{school:escuela,materia :"Web",dP:datosPersonales })
});

const users = [
    {name: "Holy", email: 'holy.gmail.com', avatar: 'http://placekitten.com/300/300'},
    {name: "Chris", email: 'chris.gmail.com', avatar: 'http://placekitten.com/400/400'},
    {name: "Aldo", email: 'aldo.gmail.com', avatar: 'http://placekitten.com/500/500'},
    {name: "Sam", email: 'sam.gmail.com', avatar: 'http://placekitten.com/700/700'},
];

router.get('/about', (req, res)=>{
   // res.send("Hola mundo desde la página about");
    res.render('pages/about',{usuarios:users});
});
router.get('/blog', (req, res)=>{
   // res.send("Hola mundo desde la página about");
    res.render('pages/blog');
});
router.get('/resources', (req, res)=>{
   // res.send("Hola mundo desde la página about");
    res.render('pages/resources');
});

router.get('/contact', (req, res)=>{
   // res.send("Hola mundo desde la página about");
    res.render('pages/contact');
});

router.post('/contact', (req,res)=>{
    console.log(req.body.nombre);
    console.log(req.body.correo);
    console.log(req.body.mensaje);
    res.render('pages/contact');
});
