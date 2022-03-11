const { body } = require('express-validator');
const User = require('../../models/user')
const passwordSize = 10;
const usernameRegExp = /^[a-zA-Z0-9_]+$/;
const passwordRegExp = new RegExp(`(^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])?)|((?=.*?[A-Z])(?=.*?[a-z]{1,})(?=.*?[0-9])?(?=.*?[#?!@$%^&*-]))).{${passwordSize},}$`);

const validateUsername = async (username) => {
  if (!usernameRegExp.test(username)) throw 'Invaild username'
  const user = await User.findByUsername(username)
  if (user) throw 'username already in use'
  return true
}

const loginValidationSchema = () => {
  return [
    body('username').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null'),
    body('password').
    exists().withMessage('required').
    notEmpty().withMessage('can not be empty')
  ]
}

const newUserSchema = () => {
  return [
    body('username').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null').
    custom(validateUsername),
    body('fullName').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null'),
    body('password').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null').
    isLength({min : passwordSize}).withMessage(`min length ${passwordSize}`).
    custom(value => {
      if (passwordRegExp.test(value)) return true
      throw 'Week password'
    }),
    body('confirm_password').
    exists().withMessage('requied').
    notEmpty().withMessage('cannot be null').
    custom((value, {req}) => {
      if (value !== req.body.password) throw "Password does not match"
      return true
    })
  ]
}

const userSchema = () => {
  return [
    body('username').
    exists().optional().withMessage('required').
    notEmpty().optional().withMessage('cannot be null').
    custom(validateUsername)
  ]
}

const changePasswordScheme = () => {
  return [
    body('old_password').
    exists().optional().withMessage('required').
    notEmpty().optional().withMessage('cannot be null').
    isLength({min : passwordSize}).withMessage(`min length ${passwordSize}`).
    custom(value => {
      if (!passwordRegExp.test(value)) throw 'Week password'
      return true
    }),
    body('new_password').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null').
    isLength({min : passwordSize}).withMessage(`min length ${passwordSize}`).
    custom(value => {
      if (!passwordRegExp.test(value)) throw 'Week password'
      return true
    }),
    body('confirm_password').
    exists().withMessage('requied').
    notEmpty().withMessage('cannot be null').
    custom((value, {req}) => {
      if (value !== req.body.new_password) throw "Password does not match"
      return true
    })
  ]
}

module.exports = {
  loginValidationSchema,
  newUserSchema,
  userSchema,
  changePasswordScheme
}