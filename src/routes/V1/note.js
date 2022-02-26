const router = require('express').Router();
const noteItemRouter = require('./noteItem');
const {V1Controllers: V1} = require('../../controllers');
const { sendParamMissingError: throwError } = require('../../utiliti/errorResponses')
const { noteSchema } = require('../../utiliti/validationSchemas/noteSchemas');
const { requestValidator } = require('../../utiliti/validationSchemas/requestValidator');

const setNoteId = (req, res, next) => {
  req.noteId = req.params.id
  next();
}

router.get('/', V1.note.all)
router.post('/', noteSchema(), (req, res) => {
  try{
    requestValidator(req)
    V1.note.add(req, res)
  } catch (error) {
    throwError(error,res)
  }
})
router.get('/:id', V1.note.get)
router.put('/:id', noteSchema(), (req, res) => {
  try{
    requestValidator(req)
    V1.note.update(req, res)
  } catch (error) {
    throwError(error,res)
  }
})
router.delete('/:id', V1.note.remove)
router.use('/:id/item', setNoteId, noteItemRouter)

module.exports = router;