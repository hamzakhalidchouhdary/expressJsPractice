const { body } = require('express-validator');
const passwordSize = 10;

const loginValidationSchema = () => {
  return [
    body('username').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null'),
    body('password').
    exists().withMessage('required').
    notEmpty().withMessage('can not be empty').
    isLength({min : passwordSize}).withMessage(`min length ${passwordSize}`)
  ]
}

const newUserSchema = () => {
  return [
    body('username').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null').
    custom(value => {
      if (!(/^[a-zA-Z0-9_]+$/).test(value)) throw 'Invaild username'
      if (value === 'hamzakhalidchouhdary') throw 'username already in use';
      return true
    }),
    body('password').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null').
    isLength({min : passwordSize}).withMessage(`min length ${passwordSize}`).
    custom(value => {
      const regEx = new RegExp(`(^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])?)|((?=.*?[A-Z])(?=.*?[a-z]{1,})(?=.*?[0-9])?(?=.*?[#?!@$%^&*-]))).{${passwordSize},}$`);
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

const changePasswordScheme = () => {
  return [
    body('password').
    exists().withMessage('required').
    notEmpty().withMessage('cannot be null').
    isLength({min : passwordSize}).withMessage(`min length ${passwordSize}`).
    custom(value => {
      const regEx = new RegExp(`(^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])?)|((?=.*?[A-Z])(?=.*?[a-z]{1,})(?=.*?[0-9])?(?=.*?[#?!@$%^&*-]))).{${passwordSize},}$`);
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
  newUserSchema,
  changePasswordScheme
}