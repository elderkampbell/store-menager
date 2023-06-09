const { expect } = require("chai");
const sinon = require("sinon");
const { productsModel } = require('../../../src/models');

const connection = require("../../../src/models/connection");
const { products } = require('../mocks/products.model.mock')

describe('Testes model', function () {
  afterEach(sinon.restore);

  it('All', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productsModel.listAllProducts();
    expect(result).to.be.deep.equal(products);
  });

  it('ID', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productsModel.listProductsById(1);
    expect(result).to.be.deep.equal(products[0]);
  });
});
