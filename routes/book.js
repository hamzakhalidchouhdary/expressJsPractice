const router = require('express').Router();
const {book} = require('../controllers')

router.get('/', book.all)
router.post('/', book.add)
router.get('/:id', book.get)
router.put('/:id', book.update)
router.delete('/:id', book.remove)

module.exports = router;