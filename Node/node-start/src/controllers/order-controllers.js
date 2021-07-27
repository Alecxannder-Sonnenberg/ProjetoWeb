'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const ValidationContract = require('../validation/fluent-validator');
const repository = require('../repositories/order-repo');
const guid = require('guid');

//Importante
// Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.
mongoose.set('useFindAndModify', false);

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    }
    catch(e) {
        res.status(500).send({
            message: 'Falha ao processar a requisicao'
        })
    }
}

exports.post = async(req, res, next) => {

    try{
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(201).send({message : `Pedido cadastrado com sucesso.`});
    }
    catch(e) {
        res.status(500).send({
            message: 'Falha ao processar a requisicao'
        })
    }

}

exports.delete = async(req, res, next) => {
    try{
        await repository.delete(req.params.id)
        res.status(200).send({message : `Pedido removido com sucesso.`})
    }
    catch(e) {
        res.status(500).send({
            message: 'Falha ao processar a requisicao'
        })
    }

};