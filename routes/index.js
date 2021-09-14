const express = require('express');
const router = express.Router();

const customerRoutes = require('./customers.routes');
const indexRoutes = require('./index.routes');
const pageNotFoundRoutes = require('./404.routes');

router.use('/customers', customerRoutes);
router.use('/index',     indexRoutes);
router.use(pageNotFoundRoutes);

module.exports = router;