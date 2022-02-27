const { body } = require('express-validator')

const noteItemSchema = () => {
  return [
    body('item').
    exists().withMessage('required').
    notEmpty().withMessage('can not be null').
    custom(vaule => {
      // if ('/^[a-zA-Z0-9\s]+$/'.test(vaule)) return true
      // throw 'invalid format'
    })
  ]
}

module.exports = {
  noteItemSchema
}