const { Language, Vocabulary } = require('../models')

const vocabularyController = {
  getVocabularies: (req, res, next) => {
    return Vocabulary.findAll({
      raw: true,
      where: { userId: req.user.id }
    })
      .then(vocabularies => res.render('vocabularies', { vocabularies }))
      .catch(err => next(err))
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
    const { languageId, vocabularyName, meaning, note } = req.body
    if (!vocabularyName) throw new Error('Vocabulary name is required!')
    if (!meaning) throw new Error('Meaning is required!')
    return Vocabulary.findOne({
      where: {
        name: vocabularyName,
        userId: req.user.id
      }
    })
      .then(vocabulary => {
        if (vocabulary) throw new Error(`"${vocabulary.name}" already exist!`)
        return Vocabulary.create({
          name: vocabularyName,
          meaning,
          note,
          userId: req.user.id,
          languageId
        })
      })
      .then(vocabulary => {
        req.flash('success_messages', `"${vocabulary.name}" successfully created!`)
        res.redirect('/')
      })
      .catch(err => next(err))
  },
  editVocabularyPage: (req, res, next) => {
    return Promise.all([
      Vocabulary.findByPk(req.params.id, {
        raw: true
      }),
      Language.findAll({
        raw: true
      })
    ])
      .then(([vocabulary, languages]) => {
        if (!vocabulary) throw new Error("Vocabulary didn't exit!")
        res.render('edit-vocabulary', { vocabulary, languages })
      })
      .catch(err => next(err))
  },
  putVocabulary: (req, res, next) => {
    const { languageId, vocabularyName, meaning, note } = req.body
    if (!vocabularyName) throw new Error('vocabulary name is required!')
    if (!meaning) throw new Error('Meaning is required!')
    return Vocabulary.findByPk(req.params.id)
      .then(vocabulary => {
        if (!vocabulary) throw new Error("Vocabulary didn't exit!")
        return vocabulary.update({
          name: vocabularyName,
          meaning,
          note,
          languageId
        })
      })
      .then(vocabulary => {
        req.flash('success_messages', `"${vocabulary.name}" successfully updated!`)
        res.redirect(`/vocabularies/${req.params.id}/edit`)
      })
      .catch(err => next(err))
  },
  deleteVocabulary: (req, res, next) => {
    return Vocabulary.findByPk(req.params.id)
      .then(vocabulary => {
        if (!vocabulary) throw new Error("Vocabulary didn't exit!")
        return vocabulary.destroy()
      })
      .then(vocabulary => {
        req.flash('success_messages', `"${vocabulary.name}" successfully deleted!`)
        res.redirect('/')
      })
      .catch(err => next(err))
  }
}

module.exports = vocabularyController
