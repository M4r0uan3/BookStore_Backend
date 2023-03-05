const catalServices = require("../services/catalogueServices");

const getAllBooks = async (req, res) => {
  try {
    const books = await catalServices.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(err.code).json(err.message);
  }
};

// const getAllBooks = async (req, res) => {
//   try {
//     const page = parseInt(req.query.currentPage) || 1;
//     const pageSize = parseInt(req.query.limit) || 4;
//     const startIndex = (page - 1) * pageSize;
//     const endIndex = page * pageSize;
//     const books = await catalServices.getAllBooks();
//     const paginatedData = books.slice(startIndex, endIndex);

//     const response = {
//       books: paginatedData,
//       totalRecords: books.length,
//       currentPage: page,
//       pageSize: pageSize,
//     };

//     res.status(200).json(response);
//   } catch (err) {
//     res.status(err.code).json(err.message);
//   }
// };


const getBookById = async (req, res) => {
  try {
    const books = await catalServices.getBookById(req.params.id);
    res.status(200).json(books);
  } catch (err) {
    res.status(err.code).json(err.message);
  }
};

const deleteBookById = async (req, res) => {
  try {
    const books = await catalServices.deleteBookById(req.params.id);
    res.status(200).json(books);
  } catch (err) {
    res.status(err.code).json(err.message);
  }
};

const updateBookById = async (req, res) => {
  try {
    const books = await catalServices.updateBookById(req.body);
    res.status(200).json({message: "Book has been updated successfully"});
  } catch (err) {
    res.status(err.code).json(err.message);
  }
};

const addBook = async (req, res) => {
  try {
    const books = await catalServices.addBook(req.body);
    res.status(201).json(books);
  } catch (err) {
    res.status(err.code).json(err.message);
  }
};

const addCategory = async (req, res) => {
  try {
    const category = await catalServices.addCategory(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(err.code).json(err.message);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await catalServices.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    res.status(err.code).json(err.message);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await catalServices.getCategoryById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(err.code).json(err.message);
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const category = await catalServices.deleteCategoryById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(err.code).json(err.message);
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const category = await catalServices.updateCategoryById(req.body);
    res.status(200).json({message: "Category has been updated successfully"});
  } catch (err) {
    res.status(err.code).json(err.message);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  deleteBookById,
  updateBookById,
  addBook,
  addCategory,
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  updateCategoryById,
};
