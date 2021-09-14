const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-customer.html'));
});

router.post('/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'customers.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'customers.html'));
});

module.exports = router;