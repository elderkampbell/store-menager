const { expect } = require("chai");
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { productsController } = require('../../../src/controllers');

const connection = require("../../../src/models/connection");
const { productsService } = require("../../../src/services");
const { products } = require('../mocks/products.model.mock');
chai.use(sinonChai)

describe('Testes controllers', function () {
  const req = {};
  const res = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  })

  afterEach(sinon.restore);

  it('All', async function () {
    sinon.stub(productsService, 'listAllProducts').resolves({ type: null, message: products });
    await productsController.listAllProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithExactly(products)
  });

  it('ID', async function () {
    req.params = { id: 1 };
    sinon.stub(productsService, 'listProductsById').resolves({ type: null, message: products[0] });
    await productsController.listProductsById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithExactly(products[0])
  });

  it('Missing', async function () {
    req.params = { id: 99 };
    sinon.stub(productsService, 'listProductsById').resolves({ type: 'NOT_FOUND', message: 'Product not found' });
    await productsController.listProductsById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWithExactly({ message: 'Product not found' })
  });
});
