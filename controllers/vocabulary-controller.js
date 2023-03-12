const { User, Language, Vocabulary } = require('../models')

const vocabularyController = {
  getVocabularies: (req, res) => {
    res.render('vocabularies')
  },
  createVocabularyPage: (req, res, next) => {
    return Language.findAll({
      raw: true
    })
      .then(languages => {
        res.render('new-vocabulary', { languages })
      })
      .catch(err => next(err))
  },
  postVocabulary: (req, res, next) => {
    const { language, vocabulary, meaning, note } = req.body
    if (!vocabulary) throw new Error('Vocabulary is required')
    if (!meaning) throw new Error('Meaning is required')
    return User.findByPk(req.user.id)
      .then(user => {
        if (!user) throw new Error("User didn't exist")
        return Vocabulary.create({
          name: vocabulary,
          meaning,
          note,
          userId: user.id,
          languageId: language
        })
      })
      .then(() => {
        req.flash('success_messages', 'You successfully create a new vocabulary!')
        res.redirect('/')
      })
      .catch(err => next(err))
  }
}

module.exports = vocabularyController
