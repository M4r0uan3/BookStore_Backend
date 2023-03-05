const Book = require("../models/Book");
const Category = require("../models/Category");

const getAllBooks = async () => {
  return await Book.find({}).populate("category");
};

const getBookById = async (idB) => {
  return await Book.findById({ _id: idB });
};

const addBook = async (b) => {
  return await Book.create(b);
};

const deleteBookById = async (idB) => {
  return await Book.findByIdAndDelete({ _id: idB });
};

const updateBookById = async (b) => {
  return await Book.findByIdAndUpdate(b._id, b);
};

const getAllCategories = async () => {
  return await Category.find();
};

const getCategoryById = async (idC) => {
  return await Category.findById({ _id: idC });
};

const addCategory = async (c) => {
  return await Category.create(c);
};

const deleteCategoryById = async (idC) => {
  return await Category.findByIdAndDelete({ _id: idC });
};

const updateCategoryById = async (c) => {
  return await Category.findByIdAndUpdate(c._id, c);
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBookById,
  deleteBookById,
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategoryById,
  deleteCategoryById,
};
