const { validationResult } = require('express-validator')

exports.requestValidator = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw errors
  }
  return
}