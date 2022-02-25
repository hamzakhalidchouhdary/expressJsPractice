const { body } = require('express-validator');

const loginValidationSchema = () => {
  return [
    body('username').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null'),
    body('password').
    exists().withMessage('required').
    notEmpty().withMessage('can not be empty').
    isLength({min : 8}).withMessage('min length 8')
  ]
}

const newUserSchema = () => {
  return [
    body('username').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null').
    custom(value => {
      if (value === 'hamzakhalidchouhdary') throw 'username already in use';
      return true
    }),
    body('password').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null').
    isLength({min : 8}).withMessage('min length 8').
    custom(value => {
      const regEx = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
      if (!regEx.test(value)) throw 'Week password'
      return true
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

module.exports = {
  loginValidationSchema,
  newUserSchema
}