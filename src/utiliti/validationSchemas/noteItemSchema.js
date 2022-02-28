const { body } = require('express-validator')

const noteItemSchema = () => {
  return [
    body('item').
    exists().withMessage('required').
    notEmpty().withMessage('can not be null')
  ]
}

module.exports = {
  noteItemSchema
}