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

const listAllSales = async (_req, res) => {
  const { message } = await productsService.listAllSales();

  res.status(200).json(message);
};

const listSalesById = async (req, res) => {
  const { type, message } = await productsService.listSalesById(req.params.id);
  if (type) {
    return res.status(mapError(type)).json({ message });
  }
  res.status(200).json(message);
};

const updateSalesById = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const { type, message } = await productsService.updateSalesById(id, name);
  if (type) {
    return res.status(mapError(type)).json({ message });
  }
  res.status(200).json(message);
};

module.exports = {
  listAllProducts,
  listProductsById,
  addProduct,
  listAllSales,
  listSalesById,
  updateSalesById,
};
