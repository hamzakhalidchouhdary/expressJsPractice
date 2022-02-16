const router = require('express').Router();
const {book} = require('../controllers')

router.get('/', (req, res) => book.all(req, res))
router.post('/', (req, res) => book.add(req, res))
router.get('/:id', (req, res) => book.get(req, res))
router.put('/:id', (req, res) => book.update(req, res))
router.delete('/:id', (req, res) => book.remove(req, res))

module.exports = router;