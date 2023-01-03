var express = require('express');
var router = express.Router();

const { createBook, getAllBooks } = require('../controllers/bookControllers');

router.post('/', createBook);
router.get('/', getAllBooks);


//CREATE POST


module.exports = router;