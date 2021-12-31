const express = require("express");

const productsRouter = require('./product.route');
const usersRouter = require('./user.route');

function routerApi(app) {
  const router = express.Router();
  router.use(express.json());
  router.use(express.urlencoded({ extended: false }));

  app.use('/api', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
