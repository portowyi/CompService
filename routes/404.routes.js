const express = require('express');
const path = require('path');

const router = express.Router();

router.use((req, res) => {
    res.render('404');
});

module.exports = router;