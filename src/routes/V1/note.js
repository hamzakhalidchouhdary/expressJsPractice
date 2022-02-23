const router = require('express').Router();
const noteItemRouter = require('./noteItem');
const {V1Controllers: V1} = require('../../controllers');

const setNoteId = (req, res, next) => {
  req.noteId = req.params.id
  next();
}

router.get('/', V1.note.all)
router.post('/', V1.note.add)
router.get('/:id', V1.note.get)
router.put('/:id', V1.note.update)
router.delete('/:id', V1.note.remove)
router.use('/:id/item', setNoteId, noteItemRouter)

module.exports = router;