const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 8080

const categoryRoutes = require('./api/routes/category-routes')
const productRoutes = require('./api/routes/product-routes')

app.use(cors())
categoryRoutes(app)
productRoutes(app)

app.listen(port)
