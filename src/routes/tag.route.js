const express = require('express');
const { addTag, getTags, deleteTag } = require('../controllers/tag.controller');

const tagrouter = express.Router();

router.post('/add-tag', addTag);
router.get('/get-tags', getTags);
router.post('/delete-tag/:tag', deleteTag);

// module.exports = router;
module.exports = tagrouter