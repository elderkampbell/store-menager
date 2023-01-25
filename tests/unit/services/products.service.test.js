const { expect } = require("chai");
const sinon = require("sinon");
const { productsService } = require('../../../src/services');

const connection = require("../../../src/models/connection");
const { products } = require('../mocks/products.model.mock')

describe('Testes service', function () {
  afterEach(sinon.restore);

  it('All', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productsService.listAllProducts();
    expect(result).to.be.deep.equal(products);
  });

  it('ID', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productsService.listProductsById(1);
    expect(result).to.be.deep.equal(products[0]);
  });

  it('Missing', async function () {
    sinon.stub(connection, 'execute').resolves([[products[99]]]);
    const result = await productsService.listProductsById(99);
    expect(result).to.be.deep.equal({message: "Product not found"})
  });
});
