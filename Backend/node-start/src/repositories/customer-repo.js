'use strict'
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async() => {
    const res = await Customer
        .find({ active: true }) //Busca tudo
    return res;
}

exports.create = async(data) => {

    var customer = new Customer();

    customer.nome = data.nome;
    customer.password = data.password;
    customer.data_nascimento = data.data_nascimento;
    customer.curso = data.curso;
    customer.email = data.email;

    await customer
        .save()
}

exports.update = async(id, data) => {
    await Customer
        .findByIdAndUpdate(id, {
            $set: {
                nome : data.nome,

                password: data.password,
                data_nascimento: data.data_nascimento,
                curso: data.curso,
                email: data.email,
                //credito: credito + data.credito, //Ver se isso da erro depois
                pay_met: data.pay_met
            }
        });

}

exports.delete = async(id) => {
    await Customer
        .findByIdAndRemove(id)

}