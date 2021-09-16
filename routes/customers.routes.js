const express = require('express');
const path = require('path');

const testData = require('../data/test.data');

const router = express.Router();

router.get('/add', (req, res) => {
    console.log('123456')
    res.render('add-customer');
});

router.post('/add', (req, res) => {
    testData.push({'id' : testData.length, 'name' : req.body.name, 'street': req.body.street});
    res.redirect('/customers');
});

router.get('/', (req, res) => {
    res.render('customers', {'customers' : testData});
    //res.render('customers');
});

module.exports = router;