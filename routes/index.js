const express = require('express')
const router = express.Router()

const vocabularyController = require('../controllers/vocabulary-controller')
const userController = require('../controllers/user-controller')
const passport = require('../config/passport')
const { generalErrorHandler } = require('../middleware/error-handler')
const { authenticated } = require('../middleware/auth')

router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin' }), userController.signIn)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/logout', userController.logout)

router.get('/', authenticated, vocabularyController.getVocabularies)
router.use('/', generalErrorHandler)

module.exports = router
