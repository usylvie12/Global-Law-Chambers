if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()

const bodyParser = require ('body-parser')

const indexRouter = require('./routes/index')
const requestRouter = require('./routes/requests')
const methodOverride = require('method-override')
 

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views')

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const mongoose = require ('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/requests',requestRouter)

app.listen(process.env.PORT || 3000)