const router = require('express').Router()
const {V1Controllers} = require('../../controllers')
const { loginValidationSchema } = require('../../utiliti/validationSchemas/authSchemas')
const { requestValidator } = require('../../utiliti/validationSchemas/requestValidator')

router.post('/login', loginValidationSchema(), (req, res) => {
  try {
    requestValidator(req);
    V1Controllers.userAuth.login(req, res)
  } catch (error) {
    res.status(400).json(error)
  }
})
router.post('/join', V1Controllers.userAuth.join)
router.post('/resetpassword', V1Controllers.userAuth.resetPassword)


module.exports = router