const express = require('express');

const readEntryController = require('../controllers/readEntryController');

const router = express.Router();

router.get('/readEntry', readEntryController.getEntries);
router.post('/readEntry/create', readEntryController.createReadEntry);
router.get('/readEntry/delete', readEntryController.deleteReadEntry);


module.exports = router;