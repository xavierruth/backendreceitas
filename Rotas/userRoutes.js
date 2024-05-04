const express = require('express');
const app = express();
const userRoutes = express.Router();

let User = require('../Model/User');

userRoutes.route('/cadastro').post(function (req, res){
    let user = new User(req.body);
    user.save()
        .then  (user => res.status(200).json({ 'status': 'sucess', 'mssg': 'usuário cadastrado com sucesso'}
    ))
    .catch(err => {res.status(409).send({ 'status': 'failure', 'mssg': 'impossível cadastrar usuário'})
});
});

userRoutes.route('/user/:id').get(function (req, res){
    let id = req.params.id;
    User.findById(id, function (err, user){
        if (err)  {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Erro ao encontrar usuário'});
        }
        else {
            res.status(200).json({ 'status': 'sucess', 'user': user});
        }
    
    });
  
});

userRoutes.route('/update/:id').put(function(req, res) {
    User.findById(req.params.id, function(err, user){
        if (!user){
            res.status(400).send({ 'status': 'failure', 'mssg': 'erro em alterar o usuário'})
    } else {
        user.nome = req.body.nome;
        user.email = req.body.email;
        user.senha = req.body.senha;
    
        user.save().then(user => {res.status(200).json ({ 'status': 'sucess', 'mssg': 'Usuário atualizado com sucesso'})
    })
    }
    });
});

userRoutes.route('/delete/:id').delete(function (req, res){
    user.findByIdAndRemove({ _id: req.params.id}, function(err,){

        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'ERRO ao excluir usuário.'});
        }
        else {
            res.status(200).json({ 'status': 'sucess', 'mssg': 'Usuário excluído com sucesso!'});
        }
    })
})

module.exports = userRoutes;