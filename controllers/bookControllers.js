const Book = require("../models/Books");

/**
 * @method POST
 * @param {*} req 
 */
exports.createBook = async (req, res) => {
    const newBook = new Book(req.body);
    try {
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (err) {
        res.status(500).json(err);
    }
}


/**
 * @method GET
 * fETCH ALL BOOKS
 */
exports.getAllBooks = async (req, res) => {
    Book.find({}, (err, results) => {
        if (err) { res.send(err) }
        else {
            res.send(results)
        }
    })
}


