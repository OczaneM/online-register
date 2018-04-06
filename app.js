const express = require('expres')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const path = require('path')
const PORT = (process.env.PORT || 4001)

app.se(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use(express.static(path.join(__dirname, '.')))

app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

const server = app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
