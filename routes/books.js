var express = require('express');
var router = express.Router();
const Book = require("../models/Books");

/* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });

//CREATE POST
router.post("/", async (req, res) => {
    const newBook = new Book(req.body);
    console.log(newBook)

    try {
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;