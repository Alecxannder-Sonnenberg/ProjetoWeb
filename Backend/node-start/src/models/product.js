'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    //Facilita busca, deve ser unico, nao pode ter dois com o mesmo nome
    slug:{
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    description:{
      type: String,
      required: true,
    },
    price:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    active:{
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: false
    }]
});

module.exports = mongoose.model('Product', schema);
