const express = require('express');
const router = express.Router();


router.use('/', require('./employee.routes'));

module.exports = router;