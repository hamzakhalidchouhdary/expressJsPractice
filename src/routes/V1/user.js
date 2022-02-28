const router = require('express').Router();
const { V1Controllers: V1 } = require('../../controllers');
const { sendParamMissingError: throwError } = require('../../utiliti/errorResponses');
const { userSchema } = require('../../utiliti/validationSchemas/authSchemas');
const { requestValidator } = require('../../utiliti/validationSchemas/requestValidator');

router.get('/', V1.user.all)
router.get('/:id', V1.user.get)
router.post('/', V1.user.add)
router.put('/', userSchema(), (req, res) => {
  try {
    requestValidator(req)
    V1.user.update(req, res)
  } catch (error) {
    throwError(error, res)
  }
})
router.delete('/', V1.user.remove)

module.exports = router;