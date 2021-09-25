const express = require ('express');
const router = express.Router();
//Requiero el método del objeto literal que quiero usar
const {about} = require('../controllers/aboutController')

router.get('/about', about);

module.exports = router;