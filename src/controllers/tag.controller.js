const { Tag } = require('../models/pharmacy.model');

exports.addTag = async (req, res) => {
    try {
        const { name, type } = req.body;
        const newTag = new Tag({ name, type });
        await newTag.save();
        res.status(201).json({ message: 'Tag added successfully', tag: newTag });
    } catch (error) {
        res.status(500).json({ message: 'Error adding tag', error: error.message });
    }
};

exports.getTags = async (req, res) => {
    try {
        const { type } = req.query;
        const query = type ? { type } : {};
        const tags = await Tag.find(query);
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tags', error: error.message });
    }
};

exports.deleteTag = async (req, res) => {
    try {
        const { id, type } = req.body;
        await Tag.findOneAndDelete({ _id: id, type });
        res.status(200).json({ message: 'Tag deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting tag', error: error.message });
    }
};