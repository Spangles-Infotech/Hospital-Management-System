const express = require('express');
const { addTag, getTags, deleteTag } = require('../controllers/tag.controller');

const tagrouter = express.Router();

// tagrouter.post('/add-tag', addTag);
tagrouter.get('/get-tags', getTags);
tagrouter.delete('/delete-tag/:name', deleteTag);

// module.exports = router;
module.exports = tagrouter