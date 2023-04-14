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

router.get('/vocabularies/new', authenticated, vocabularyController.createVocabularyPage)
router.get('/vocabularies/search', authenticated, vocabularyController.searchVocabularies)
router.get('/vocabularies/:id/edit', authenticated, vocabularyController.editVocabularyPage)
router.put('/vocabularies/:id', authenticated, vocabularyController.putVocabulary)
router.delete('/vocabularies/:id', authenticated, vocabularyController.deleteVocabulary)
router.post('/vocabularies', authenticated, vocabularyController.postVocabulary)
router.get('/vocabularies', authenticated, vocabularyController.getVocabularies)

router.get('/', (req, res) => res.redirect('/vocabularies'))
router.use('/', generalErrorHandler)

module.exports = router
