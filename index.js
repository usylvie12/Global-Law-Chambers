const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const path = require('path');




const app = express();
const PORT = process.env.PORT || 5000; 
const routes = require('./routes/api');

const MONGODB_URI ="mongodb+srv://sylvie12:Sylvie123@cluster0.heiy897.mongodb.net/lawchamber?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URI || 'mongodb://localhost/lawchamber', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!');
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(morgan('tiny'));

app.use('/api',routes);

if (process.env.NODE_ENV === 'production'){
  
  app.use(express.static('globallawchambers/build'));

}
app.listen(PORT, console.log(`Server is starting at ${PORT}`));