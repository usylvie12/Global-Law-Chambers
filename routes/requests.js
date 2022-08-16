const express = require('express')
const request = require('../models/request')
const router = express.Router()
const Request = require('../models/request')

router.get('/', async (req,res) => {
    const requests = await Request.find()
    res.render('requests/index',{ requests: requests })
})

router.get('/new', (req,res) => {
    res.render('requests/new', { request: new Request()})
})

router.post('/', async (req,res) => {
    const request = new Request({
        title: req.body.title,
        email: req.body.email,
        details: req.body.details
    })
    try{
        const newRequest = await request.save()
        res.redirect(`requests`)


    } catch {
        res.render('requests/new', {
            request : request,
            errorMessage: 'Error creating Request'
        })

    }
})
    

module.exports = router