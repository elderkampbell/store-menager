const { productsModel } = require('../models');
const { newProductValidation } = require('../validations/validationsInputValues');

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

const addProduct = async (name) => {
  const error = newProductValidation(name);
  if (error.type) return error;
  console.log(error);
  const newProductId = await productsModel.addProduct(name);
  const newProduct = await productsModel.listProductsById(newProductId);

  return { type: null, message: newProduct };
};

module.exports = {
  listAllProducts,
  listProductsById,
  addProduct,
};
