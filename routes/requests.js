const express = require('express')
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
        res.redirect(`requests/${newRequest.id}`)


    } catch {
        res.render('requests/new', {
            request : request,
            errorMessage: 'Error creating Request'
        })

    }
})
router.get('/:id', async (req,res) => {
    try{
        const request = await Request.findById(req.params.id)
        res.render('requests/message',{
            request: request
        })

    } catch (err) {
        console.log(err)
        res.redirect('/')

    }
    res.render('requests/message')

})

router.delete('/:id',(req,res) => {
    res.send('Delete Request' + req.params.id)
})

module.exports = router