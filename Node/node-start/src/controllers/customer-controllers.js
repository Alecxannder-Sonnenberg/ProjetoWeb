'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const ValidationContract = require('../validation/fluent-validator');
const repository = require('../repositories/customer-repo');

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

    //Se for util a gente usa essa validacao nos outros. Por hora vou usar o monogoose
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.nome, 3, 'Nome deve ter ao menos 3 letras')
    contract.hasMinLen(req.body.password, 6, 'Senha deve ter ao menos 6 letras')
    contract.isEmail(req.body.email, 3, 'Email deve ter ao menos 3 letras')

    if(!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try{
        await repository.create(req.body)
        res.status(201).send({message : `Usuario cadastrado com sucesso.`});
    }
    catch(e) {
        res.status(500).send({
            message: 'Falha ao processar a requisicao'
        })
    }

}

exports.put = async(req, res, next) => {
    try{
        await repository.update(req.params.id , req.body)
        res.status(200).send({message : `Usuario atualizado com sucesso.`})
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
        res.status(200).send({message : `Usuario removido com sucesso.`})
    }
    catch(e) {
        res.status(500).send({
            message: 'Falha ao processar a requisicao'
        })
    }

};