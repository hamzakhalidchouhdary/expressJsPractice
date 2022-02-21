const { body } = require('express-validator');

const loginValidationSchema = () => {
  return [
    body('username')
    .exists().withMessage('username required')
    .notEmpty().withMessage('username cannot be null'),
    body('password')
    .exists().withMessage('password required')
    .notEmpty().withMessage('password can not be empty')
    .isLength({min : 8}).withMessage('min length 15')
  ]
}

module.exports = {
  loginValidationSchema
}