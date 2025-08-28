const express = require('express');
const { addCategory, getCategories, deleteCategory, addStrength, getStrengths, deleteStrength, addUnit, getUnits, deleteUnit } = require('../controllers/stockTags.controller');

const router = express.Router();

// Category Routes
router.post('/add-category', addCategory);
router.get('/get-categories', getCategories);
router.delete('/delete-category/:id', deleteCategory);

// Strength Routes
router.post('/add-strength', addStrength);
router.get('/get-strengths', getStrengths);
router.delete('/delete-strength/:id', deleteStrength);

// Unit Routes
router.post('/add-unit', addUnit);
router.get('/get-units', getUnits);
router.delete('/delete-unit/:id', deleteUnit);

module.exports = router;