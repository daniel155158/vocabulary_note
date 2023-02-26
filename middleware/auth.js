const { ensureAuthenticated } = require('../helpers/auth-helpers')

const authenticated = (req, res, next) => {
  if (ensureAuthenticated(req)) {
    next()
  }
  res.redirect('/signin')
}

module.exports = {
  authenticated
}
