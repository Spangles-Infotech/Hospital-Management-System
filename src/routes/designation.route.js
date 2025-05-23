const express = require('express');
const router = express.Router();
const designation = require('../controllers/designation.controller');

// Designation routes
router.route('/designation')
    .get(designation)
    .post(designation);

router.route('/designation/:designationId')
    .get(designation)
    .put(designation)
    .patch(designation);

module.exports = router;