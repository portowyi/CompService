const express = require('express');
const router = express.Router();

const customerRoutes = require('../customers/customersRoutes');

router.use('/api/v1/customers', customerRoutes);

module.exports = router;