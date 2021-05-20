const express = require ('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req,res){

    res.sendFile(path.join(__dirname + '/Views/home.html'))

})

router.get('/login.html', function(req,res){

    res.sendFile(path.join(__dirname + '/Views/login.html'))

})

app.use(express.static( __dirname + '/Views/'));

router.get('/sobre.html', function(req,res){

    res.sendFile(path.join(__dirname + '/Views/sobre.html'))

})

app.use(express.static( __dirname + '/Views/'));


app.use('/', router);
app.listen(process.env.port || 3000);

console.log("Server rodando, listening at dor :3000 ")