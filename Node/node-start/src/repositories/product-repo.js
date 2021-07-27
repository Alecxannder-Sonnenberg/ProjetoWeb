'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product
        .find({ active: true }) //Busca tudo
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug,
            active: true
        })
    return res;
}

exports.getByID = async(id) => {
    const res = await Product
        .findById(id)
    return res;
}

exports.getByTags = async(tag) => {
    const res = await Product
        .find({
            tags : tag,
            active: true
        })
    return res;
}

exports.create = async(data) => {

    var product = new Product();

    product.title = data.title;
    product.slug = data.slug;
    product.description = data.description;
    product.price = data.price;
    product.rating = data.rating;
    product.active = data.active;
    product.tags = data.tags;

    await product
        .save()
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: { //O que veio da requisicao e vai ser alterado no meu produto
                title : data.title,
                slug: data.slug,
                description: data.description,
                price: data.price
            }
        });

}

exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id)

}