//Pain Peko

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./src/config');

const app = express();
const router = express.Router()

//Conecta ao banco
mongoose.connect('mongodb+srv://WebGroup:Password@webclass.juiuh.mongodb.net/WebClass?retryWrites=true&w=majority')

//Carrega os models
const Product = require('./src/models/product');
const Customer = require('./src/models/customer');
const Order = require('./src/models/order');

//Carrega as rotas
const index = require('./src/routes');
const products = require('./src/routes/products.js');
const customers = require('./src/routes/customers.js');
const orders = require('./src/routes/orders.js');
//Parsers
app.use(bodyParser.json());//convert o request para js o n
app.use(bodyParser.urlencoded({ extended : false }));

// Associa rota ao app ?
app.use('/', index);
app.use('/products', products);
app.use('/customers', customers);
app.use('/orders', orders);

module.exports = app;
