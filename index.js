const express = require('express');
const app = express();
const mongoose = require("mongoose");
const ConsultationModel = require('./models/Consultations');
require ('dotenv').config();

const cors = require('cors');

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://sylvie12:Sylvie123@cluster0.heiy897.mongodb.net/lawchamber?retryWrites=true&w=majority");


app.get("/getConsultations", (req, res) => {
    ConsultationModel.find({}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      } 
    });
  });
  app.post("/createConsultation", async (req, res) => {
    const consultation = req.body;
    const newConsultation = new ConsultationModel(consultation);
    await newConsultation.save();
  
    res.json(consultation);
  });

app.listen(process.env.PORT  || 3001, () => {
    console.log('server runs perfectly');
}); 

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('globallawchambers/build'));
}