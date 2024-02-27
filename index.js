let cool = require("cool-ascii-faces");
let express = require("express");
let bodyParser = require("body-parser");


let app = express();

app.use(bodyParser.json());


const PORT = (process.env.PORT || 10000); //process.env.PORT; para leer la variable de entorno PORT (hay que definirla en cmd)

app.use("/",express.static("./public"));

app.get("/hola", (req,res) => {
    res.send("<html><body><h1>Hola mundo!</h1></body></html>")
});

//L05

const API_BASE = "/api/v1";

var contacts = [
    {
        name: "pepe",
        phone: 12345
    },
    {
        name: "luis",
        phone: 6789
    },
];


app.get(API_BASE+"/contacts",(req,res) => {res.send(JSON.stringify(contacts))});

app.post(API_BASE+"/contacts",(req,res)=>{
    let contact = req.body;
    contacts.push(contact);
    res.sendStatus(201,"Created");
});

app.listen(PORT);

console.log(cool());
console.log(`Server listening on port ${PORT}.`);