const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/products', productsController.listAllProducts);
router.get('/products/:id', productsController.listProductsById);
router.post('/products', productsController.addProduct);
router.get('/sales', productsController.listAllSales);
router.get('/sales/:id', productsController.listSalesById);
router.put('/products/:id', productsController.updateSalesById);

module.exports = router;
