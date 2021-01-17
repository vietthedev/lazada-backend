const categoryDataPath = '../data/categories.json'

const getCategories = (req, res) => {
  const { ids } = req.params
  const categories = require(categoryDataPath)

  res.send(ids ? categories.filter(category => ids.indexOf(category.id) > -1) : categories)
}

const getCategory = (req, res) => {
  const id = parseInt(req.params.id, 10)
  const categories = require(categoryDataPath)

  res.send(categories.find(category => category.id === id))
}

module.exports = {
  getCategories,
  getCategory
}
