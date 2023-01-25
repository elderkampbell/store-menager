const { expect } = require("chai");
const sinon = require("sinon");
const { productsController } = require('../../../src/controllers');

const connection = require("../../../src/models/connection");
const { productsService } = require("../../../src/services");
const { products } = require('../mocks/products.model.mock')

describe('Testes controllers', function () {
  const req = {};
  const res = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  })

  afterEach(sinon.restore);

  it('All', async function () {
    sinon.stub(productsService, 'listAllProducts').resolves(products);
    await productsController.listAllProducts(req, res);
    expect(res.status).to.be.deep.equal(200);
    expect(res.json).to.be.deep.equal(products)
  });


});
