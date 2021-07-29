'use strict'
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async() => {
    const res = await Order
        .find({}).populate('customer').populate('items.product') //Busca tudo
    return res;
}

exports.create = async(data) => {

    var order = new Order();

    order.customer = data.customer;
    order.number = data.number;
    order.items = data.items;

    await order
        .save()
}

exports.update = async(id, data) => {
    await Order
        .findByIdAndUpdate(id, {
            $set: {
                items : data.items
            }
        });
}

exports.delete = async(id) => {
    await Order
        .findByIdAndRemove(id)

}