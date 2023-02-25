const express = require('express')
const router = express.Router()

const vocabularyController = require('../controllers/vocabulary-controller')
const userController = require('../controllers/user-controller')

router.get('/signin', userController.signInPage)
router.post('/signin', userController.signIn)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)

router.get('/', vocabularyController.getVocabularies)

module.exports = router
