module.exports = app => {
  const productController = require('../controllers/product-controller')

  app.route('/products').get(productController.getProducts)
  app.route('/products/:id').get(productController.getProduct)
  app.route('/categories/:categoryId/products').get(productController.getProductsByCategory)
}
