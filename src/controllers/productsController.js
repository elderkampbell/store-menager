const { productsService } = require('../services');
const { mapError } = require('../utils/errorMap');

const listAllProducts = async (_req, res) => {
  const { message } = await productsService.listAllProducts();

  res.status(200).json(message);
};

const listProductsById = async (req, res) => {
  const { type, message } = await productsService.listProductsById(req.params.id);
  if (type) {
    return res.status(mapError(type)).json({ message });
  }
  res.status(200).json(message);
};

const addProduct = async (req, res) => {
  const { name } = req.body;

  const product = await productsService.addProduct(name);

  if (product.type) {
    return res.status(mapError(product.type)).json(product);
  }
  return res.status(201).json(product.message);
};

module.exports = {
  listAllProducts,
  listProductsById,
  addProduct,
};
