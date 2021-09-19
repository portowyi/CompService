const express = require('express');
const path = require('path');

const indexController = require('../controllers/index');

const router = express.Router();

router.get( '/index', indexController.getIndex);
router.get( '', indexController.getIndex);

module.exports = router;