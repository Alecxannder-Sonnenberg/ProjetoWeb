'use strict'

const express = require('express');
const router = express.Router();  //Como o usuario acessa

//Primeira rota
const route = router.get('/', (req, res, next) => {
    //Se a requisição for bem sucedida?
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.0.1"
    });
});

module.exports = router;