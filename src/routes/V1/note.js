const router = require('express').Router();
const {V1Controllers: V1} = require('../../controllers');

router.get('/', V1.note.all)
router.post('/', V1.note.add)
router.get('/:id', V1.note.get)
router.put('/:id', V1.note.update)
router.delete('/:id', V1.note.remove)

module.exports = router;