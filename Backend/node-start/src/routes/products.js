'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controllers');


//Controllers
router.get('/', controller.get);
router.get('/:slug',controller.getBySlug);
router.get('/admin/:id',controller.getByID);
router.get('/tag/:tag',controller.getByTags);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;