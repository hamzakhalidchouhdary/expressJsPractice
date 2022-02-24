const { V1Controllers: V1 } = require('../../controllers');
const router = require('express').Router();

router.get('/', V1.noteItem.all)
router.get('/:id', V1.noteItem.get)
router.post('/', V1.noteItem.add)
router.put('/:id', V1.noteItem.update)
router.delete('/:id', V1.noteItem.remove)
router.delete('/', V1.noteItem.removeAll)

module.exports = router