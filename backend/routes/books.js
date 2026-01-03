const express = require('express');
const router = express.Router();
const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
const {
    getAllBooks,
    getBookById,
    createBook,
    bookUpdate,
    deleteBook
} = require('../controllers/bookController');

// /api/books
router.route("/")
    .get(getAllBooks)
    .post(verifyTokenAndAdmin, createBook);

// /api/books/:id
router.route("/:id")
    .get(getBookById)
    .put(verifyTokenAndAdmin, bookUpdate)
    .delete(verifyTokenAndAdmin, deleteBook);

module.exports = router;

