'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
    },
    //Facilita busca, deve ser unico, nao pode ter dois com o mesmo nome
    data_nascimento:{
        type: Date,
    },
    curso:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    credito:{
        type: Number,
    },
    pay_met:{
        type:String,
    },
    active:{
        type: Boolean,
        default: true
    },
});

module.exports = mongoose.model('Customer', schema);
