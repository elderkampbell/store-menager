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

module.exports = {
  listAllProducts,
  listProductsById,
};
