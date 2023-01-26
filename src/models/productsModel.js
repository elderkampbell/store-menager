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

const addProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUE (?)', [name],
  );

  return insertId;
};

const listAllSales = async () => {
  const [products] = await connection.execute(
    `SELECT sp.sale_id AS saleId, s.date, 
    sp.product_id AS productId, 
    sp.quantity FROM StoreManager.sales AS s
    RIGHT JOIN StoreManager.sales_products AS sp
    ON s.id = sp.product_id`,
  );

  return camelize(products);
};

const listSalesById = async (id) => {
  const [products] = await connection.execute(
    `SELECT sp.sale_id AS saleId, s.date, 
    sp.product_id AS productId, 
    sp.quantity FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id WHERE s.id = ?`, [id],
  );

  const newArray = products.map(({ date, productId, quantity }) => (
    {
      date,
      productId,
      quantity,
    }));
  
  return newArray;
};

module.exports = {
  listAllProducts,
  listProductsById,
  addProduct,
  listAllSales,
  listSalesById,
};
