let CustomerModel = require('../models/customer.model');
const express = require('express');
const router = express.Router();

//Create a new customer
//POST localhost:3000/customer
//CREATE
router.post('/customer', (req, res) => {
    if(!req.body) {
        return res.status(400).send('Request body is missing');
    }

    let model = new CustomerModel(req.body);
    model.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }
            //Resource was created
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err);;
        });
});

//GET
router.get('/customer', (req, res) => {
    //Check if an email is present
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter: email');
    }

    CustomerModel.findOne({
        email: req.query.email
    })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

//UPDATE
router.put('/customer', (req, res) => {
    //Check if an email is present
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter: email');
    }

    CustomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.delete('/customer', (req, res) => {
    //Check if an email is present
    if(!req.query.email) {
        return res.status(400).send('Missing URL parameter: email');
    }

    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = router;