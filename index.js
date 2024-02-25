let cool = require("cool-ascii-faces");
let express = require("express");


let app = express();

const PORT = 10000; //process.env.PORT; para leer la variable de entorno PORT (hay que definirla en cmd)

app.get("/", (req,res) => {
    res.send("<html><body><h1>Hola mundo!</h1></body></html>")
});


app.listen(PORT);

console.log(cool());
console.log(`Server listening on port ${PORT}.`);