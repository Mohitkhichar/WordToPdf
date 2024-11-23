const express = require('express');
const { uploadDocument, listDocuments } = require('../controllers/documentController');

const router = express.Router();

router.post('/upload', uploadDocument);
router.get('/list', listDocuments);

module.exports = router;
