const categoryDataPath = '../data/categories.json'
const productDataPath = '../data/products.json'

const getProducts = (req, res) => res.send(require(productDataPath))

const getProduct = (req, res) => {
  const id = req.params.id
  const products = require(productDataPath)

  res.send(products.find(product => product.itemId === id))
}

const getProductsByCategory = (req, res) => {
  const categoryId = parseInt(req.params.categoryId, 10)
  const categories = require(categoryDataPath)
  const products = require(productDataPath)
  const category = categories.find(category => category.id === categoryId)
  const pattern = new RegExp(`^${category.path}`)

  res.send(products.filter(product => pattern.test(product.category)))
}

module.exports = {
  getProducts,
  getProduct,
  getProductsByCategory
}
