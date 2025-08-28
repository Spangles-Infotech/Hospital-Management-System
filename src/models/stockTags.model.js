const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const StrengthSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const UnitSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const GSTSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const PackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Category = mongoose.model('Category', CategorySchema);
const Strength = mongoose.model('Strength', StrengthSchema);
const Unit = mongoose.model('Unit', UnitSchema);
const GST = mongoose.model('GST', GSTSchema);
const Pack = mongoose.model('Pack', PackSchema);

module.exports = { Category, Strength, Unit, GST, Pack };