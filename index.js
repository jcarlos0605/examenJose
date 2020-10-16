//importar express 
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser =require("body-parser");
const {InteresCompuesto} = require("./InteresCompuesto")

// Crear un servidor
const app = express();

// Indicar a express, utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Habilitar body parser para leer los datos del cuerpo de las peticions POST
app.use(bodyParser.urlencoded({ extended: true }));


/*
contenido
*/

//informacion sobre los verbos HTTP
app.get("/", (req,res,next) =>{
 

    res.render("formulario");
});
app.post("/capital", (req, res, next) => {
  // Asignacion por distructuring
  const { monto, tasaInteres, periodo } = req.body;

  const cuotas = InteresCompuesto(monto, tasaInteres, periodo);

  if (
    Number.isInteger(monto) &&
    Number.isInteger(tasaInteres) &&
    Number.isInteger(periodo)
  ) {
    res.render("tabla", { cuotas, tasaInteres });
  } else {
    res.render("problema");
  }
});
// Inicializar el servidor en un puerto en especifico
app.listen(5000, () => {
  console.log("Servidor trabajando en el puerto 5000");
});
