const express = require( 'express' );
const app = express(); 
const nunjucks = require("nunjucks")
app.use(express.urlencoded({extended:false}))
//tres lineas para configurar nunjucks
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates
//middlewares static: archivos estaticos 
ap.use(express.static("./public"))

app.use(express.urlencoded({extended:true}));
var fs= require("fs")//
var path = require("path")

  
  app.listen(3000, function () {
    console.log('on port 3000!');
  });

  app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });
  
  app.use(require("./routers/index"))
