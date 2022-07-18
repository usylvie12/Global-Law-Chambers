const express = require('express');

const router = express.Router();

const Consultation = require('../models/Consultations');



router.get('/', (req, res) => {

    Consultation.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newConsultation = new Consultation(data);

    newConsultation.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, server errors' });
            return;
        }
        
        return res.json({
            msg: 'Your Message has been saved!!!!!!'
        });
    });
});


router.get('/name', (req, res) => {
    const data =  {
        name: 'peterson',
        email:'peter@gmail.com',
        message: 'Divorce'
    };
    res.json(data);
});



module.exports = router;