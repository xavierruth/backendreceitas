var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Ruth')
.then (() => {
    console.log('Database Conectado!');
})
.catch (err => { console.log('Não foi possível se conectar com o database' + err);
});

const userRoutes = require('./Rotas/userRoutes');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes);

app.get('/', function (req, res){
    res.send("Bem vindo ao Caderninho de Sabores");
});

app.listen(3000, function(){
    console.log('Listening on port 3000!')
})

// eu fiz um novo nome para esse projeto, pois o anterior estava muito feio kkkkk