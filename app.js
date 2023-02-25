const express = require('express')
const exphbs = require('express-handlebars')

const router = require('./routes')

const app = express()
const port = 3000

app.engine('.hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
