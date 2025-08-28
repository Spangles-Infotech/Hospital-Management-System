const { Category, Strength, Unit, GST, Pack } = require('../models/stockTags.model');

// Category Controllers
const addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new Category({ name });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await Category.findByIdAndDelete(id);
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Strength Controllers
const addStrength = async (req, res) => {
    try {
        const { name } = req.body;
        const newStrength = new Strength({ name });
        await newStrength.save();
        res.status(201).json(newStrength);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getStrengths = async (req, res) => {
    try {
        const strengths = await Strength.find();
        res.status(200).json(strengths);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteStrength = async (req, res) => {
    try {
        const { id } = req.params;
        await Strength.findByIdAndDelete(id);
        res.status(200).json({ message: 'Strength deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Unit Controllers
const addUnit = async (req, res) => {
    try {
        const { name } = req.body;
        const newUnit = new Unit({ name });
        await newUnit.save();
        res.status(201).json(newUnit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUnits = async (req, res) => {
    try {
        const units = await Unit.find();
        res.status(200).json(units);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteUnit = async (req, res) => {
    try {
        const { id } = req.params;
        await Unit.findByIdAndDelete(id);
        res.status(200).json({ message: 'Unit deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    addCategory, getCategories, deleteCategory,
    addStrength, getStrengths, deleteStrength,
    addUnit, getUnits, deleteUnit
};