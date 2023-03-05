const express = require("express");
const router = express.Router();
const catalController = require("../controllers/catalogueController");
const userController = require("../controllers/userController");


router.get("/users/", userController.getAllUsers);
router.get("/users/edit/:id", userController.getUserById);
router.get("/users/:email", userController.getUserByEmail);
router.delete("/users/:id", userController.deleteUser);
router.put("/users/:id", userController.updateUser);

router.post("/categories/", catalController.addCategory);
router.put("/categories/:id", catalController.updateCategoryById);
router.delete("/categories/:id", catalController.deleteCategoryById);

router.post("/books/", catalController.addBook);
router.put("/books/:id", catalController.updateBookById);
router.delete("/books/:id", catalController.deleteBookById);

module.exports = router;
