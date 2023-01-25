const { productsModel } = require('../models');

const listAllProducts = async () => {
  const products = await productsModel.listAllProducts();
  return { type: null, message: products };
};

const listProductsById = async (id) => {
  const product = await productsModel.listProductsById(id);
  if (product === undefined) {
    return {
      type: 'NOT_FOUND',
      message: 'Product not found',
    };
  }
  return { type: null, message: product };
};

module.exports = {
  listAllProducts,
  listProductsById,
};
