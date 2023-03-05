const express = require("express");
const router = express.Router();
const catalController = require("../controllers/catalogueController");

router.get('/', catalController.getAllCategories);
router.get('/:id', catalController.getCategoryById);
// router.post('/', catalController.addCategory);
// router.put('/:id', catalController.updateCategoryById);
// router.delete('/:id', catalController.deleteCategoryById);

module.exports = router;