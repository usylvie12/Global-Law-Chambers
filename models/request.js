const mongoose = require('mongoose')


const requestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  
  email: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('Request', requestSchema)