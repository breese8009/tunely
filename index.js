const express = require("express");
const app = express();

app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(require("./resources"));



app.get('/', (req, res)=>{
res.sendFile('views/index.html', {root: __dirname});
});





app.listen(4000, ()=>{
	console.log("server started!");
});
