module.exports = app => {
  const categoryController = require('../controllers/category-controller')

  app.route('/categories').get(categoryController.getCategories)
  app.route('/categories/:id').get(categoryController.getCategory)
}
