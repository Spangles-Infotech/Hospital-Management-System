const express = require('express');
const { addCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } = require('../controllers/category.controller');
const router = express.Router();

// router.post('/add-category', addCategory);
// router.get('/get-all-category', getAllCategories);
// router.get('/get-only-category/:id', getCategoryById);
// router.put('/update-category/:id', updateCategory);
// router.delete('/delete-category/:id', deleteCategory);

module.exports = router;