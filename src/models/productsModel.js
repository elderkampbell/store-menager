const camelize = require('camelize');
const connection = require('./connection');

const listAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );

  return camelize(products);
};

const listProductsById = async (id) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;', [id],
  );

  return camelize(products);
};
// listProductsById().then((e) => console.log(e));

module.exports = {
  listAllProducts,
  listProductsById,
};
