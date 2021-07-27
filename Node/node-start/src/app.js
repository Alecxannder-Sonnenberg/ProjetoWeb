const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router()

//Conecta ao banco
mongoose.connect(config.connectionString)

//Carrega os models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//Carrega as rotas
const index = require('./routes/index.js');
const products = require('./routes/products.js');
const customers = require('./routes/customers.js');
const orders = require('./routes/orders.js');
//Parsers
app.use(bodyParser.json());//convert o request para js o n
app.use(bodyParser.urlencoded({ extended : false }));

// Associa rota ao app ?
app.use('/', index);
app.use('/products', products);
app.use('/customers', customers);
app.use('/orders', orders);

module.exports = app;
