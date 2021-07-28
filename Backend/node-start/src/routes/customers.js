'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controllers');

//Controllers
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;