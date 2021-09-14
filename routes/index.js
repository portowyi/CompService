const express = require('express');
const router = express.Router();

const customerRoutes = require('./customers.routes');
const indexRoutes = require('./index.routes');

router.use('/customers', customerRoutes);
router.use('/index', indexRoutes);

module.exports = router;