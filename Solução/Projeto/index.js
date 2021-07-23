const express = require ('express');
const app = express();
const path = require('path');
const router = express.Router();

const filePath = path.join(__dirname, 'content', file)

router.get('/', function(req,res){

    res.sendFile(path.join(__dirname + '/Views/home.html'))

})

router.get('/login.html', function(req,res){

    res.sendFile(path.join(__dirname + '/Views/login.html'))

})

router.get('/sobre.html', function(req,res){

    res.sendFile(path.join(__dirname + '/Views/sobre.html'))

})

app.use('/', router);
app.listen(process.env.port || 3000);

console.log("Server rodando")