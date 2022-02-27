const { V1Controllers: V1 } = require('../../controllers');
const { sendErrorResponseV1: throwError } = require('../../utiliti/errorResponses');
const { noteItemSchema } = require('../../utiliti/validationSchemas/noteItemSchema');
const { requestValidator } = require('../../utiliti/validationSchemas/requestValidator');
const router = require('express').Router();

router.get('/', V1.noteItem.all)
router.get('/:id', V1.noteItem.get)
router.post('/', noteItemSchema(), (req, res) => {
  try{
    requestValidator(req)
    V1.noteItem.add(req, res)
  } catch (error) {
    throwError(error, res)
  }
})
router.put('/:id', noteItemSchema(), (req, res) => {
  try{
    requestValidator(req)
    V1.noteItem.add(req, res)
  } catch (error) {
    throwError(error, res)
  }
})
router.delete('/:id', V1.noteItem.remove)
router.delete('/', V1.noteItem.removeAll)

module.exports = router