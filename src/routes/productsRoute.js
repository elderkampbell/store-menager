const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.listAllProducts);
router.get('/:id', productsController.listProductsById);
router.post('/', productsController.addProduct);

module.exports = router;
