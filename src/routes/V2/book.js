const router = require('express').Router();
const {V2Controllers} = require('../../controllers')

router.get('/', V2Controllers.book.all)
router.post('/', V2Controllers.book.add)
router.get('/:id', V2Controllers.book.get)
router.put('/:id', V2Controllers.book.update)
router.delete('/:id', V2Controllers.book.remove)

module.exports = router;