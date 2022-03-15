const { body } = require('express-validator')

const noteSchema = () => {
  return [
    body('title').
    exists().withMessage('required').
    notEmpty().withMessage('can not be null').
    custom(value => {
      if(!(/^[a-zA-Z0-9_:-\s]+$/).test(value)) throw 'Invalid format'
      return true
    })
  ]
}

module.exports = {
  noteSchema
}