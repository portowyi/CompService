const express = require('express');
const path = require('path');

const customersController = require('./customersController');

const router = express.Router();

router.get('/add', customersController.getAddCustomer);
router.post('/add', customersController.postAddCustomer);
router.get('/:customerId', customersController.getEditCustomer);
router.get('/', customersController.getCustomers);

module.exports = router;