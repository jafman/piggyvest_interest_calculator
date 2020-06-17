const express = require('express');

const router = express.Router();

const controller = require('../controller/calculate');

router.post('/calculate_interest',controller.calculateInterest);
 
module.exports = router;
