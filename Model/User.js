const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({

    nome: {
        type: String
    },
    email: {
        type: String
    },
    senha:  {
        type: String
    }


}, {
    collection: 'user'
})

module.exports = mongoose.model('User', User);