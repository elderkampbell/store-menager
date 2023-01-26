const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.post('/products', productsController.addProduct);
router.put('/products/:id', productsController.updateSalesById);
router.get('/products', productsController.listAllProducts);
router.get('/products/:id', productsController.listProductsById);
router.get('/sales', productsController.listAllSales);
router.get('/sales/:id', productsController.listSalesById);
router.delete('/products/:id', productsController.deleteSalesById);

module.exports = router;
