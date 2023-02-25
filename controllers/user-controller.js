const bcrypt = require('bcryptjs')
const { User } = require('../models')

const userController = {
  signUpPage: (req, res) => {
    res.render('signup')
  },
  signUp: (req, res, next) => {
    console.log('req:', req.body)
    const { name, email, password, confirmPassword } = req.body
    if (!name | !email | !password || !confirmPassword) throw new Error('請填寫必填欄位!')
    if (password !== confirmPassword) throw new Error('密碼輸入不同!')
    return User.findOne({ where: { email } })
      .then(user => {
        if (user) throw new Error('此信箱已註冊過!')
        return bcrypt.hash(password, 10)
      })
      .then(hash => User.create({
        name,
        email,
        password: hash
      }))
      .then(() => {
        res.redirect('/signin')
      })
      .catch(error => next(error))
  },
  signInPage: (req, res) => {
    res.render('signin')
  },
  signIn: (req, res) => {
    res.redirect('/')
  }
}

module.exports = userController
