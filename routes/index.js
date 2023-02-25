const express = require('express')
const router = express.Router()

const vocabularyController = require('../controllers/vocabulary-controller')

router.get('/', vocabularyController.getVocabularies)

module.exports = router
