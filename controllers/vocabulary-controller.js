const { Language } = require('../models')

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
  }
}

module.exports = vocabularyController
