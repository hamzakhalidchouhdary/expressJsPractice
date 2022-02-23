const router = require('express').Router()
const {V1Controllers: V1} = require('../../controllers')
const { sendParamMissingError: throwError } = require('../../utiliti/errorResponses')
const { loginValidationSchema } = require('../../utiliti/validationSchemas/authSchemas')
const { requestValidator } = require('../../utiliti/validationSchemas/requestValidator')

router.post('/login', loginValidationSchema(), (req, res) => {
  try {
    requestValidator(req);
    V1.userAuth.login(req, res)
  } catch (error) {
    throwError(error, res);
  }
})
router.post('/join', V1.userAuth.join)
router.post('/resetpassword', V1.userAuth.resetPassword)


module.exports = router