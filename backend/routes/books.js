const express = require('express');
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const { getAllBooks, getBookById, createBook, bookUpdate, deleteBook } = require('../controllers/bookController');


router.get('/', getAllBooks);

router.get('/:id', getBookById);

router.post('/', verifyTokenAndAdmin, createBook);

router.put('/:id', verifyTokenAndAdmin, bookUpdate);

router.delete('/:id', verifyTokenAndAdmin, deleteBook)



module.exports = router;

