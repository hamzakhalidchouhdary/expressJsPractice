const router = require('express').Router()
const {V1Controllers} = require('../../controllers')
const {body, validationResult, checkSchema} = require('express-validator')

const loginSchema = () => {
  // usemname : {
  //   in : ['body'],
  //   isEmpty : false,
  //   exists : true,
  //   errorMessage : 'username is missing',
  // },
  // password : {
  //   isLength : {
  //     options : {min : 25},
  //     errorMessage : 'Min length must be 25'
  //   }
  // }
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
const requestValidator = (req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
}

router.post('/login', loginSchema(), (req, res) => {
  requestValidator(req, res)
  V1Controllers.userAuth.login(req, res)
})
router.post('/join', V1Controllers.userAuth.join)
router.post('/resetpassword', V1Controllers.userAuth.resetPassword)


module.exports = router