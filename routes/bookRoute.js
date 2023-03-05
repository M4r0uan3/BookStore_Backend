const express = require("express");
const router = express.Router();
const catalController = require("../controllers/catalogueController");

router.get('/', catalController.getAllBooks);
router.get('/:id', catalController.getBookById);
// router.post('/', catalController.addBook);
// router.put('/:id', catalController.updateBookById);
// router.delete('/:id', catalController.deleteBookById);

module.exports = router;