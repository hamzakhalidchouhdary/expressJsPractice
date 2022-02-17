const router = require('express').Router();
const { author } = require('../controllers');

router.get('/', author.all)
router.get('/:id', author.get)
router.post('/', author.add)
router.put('/:id', author.update)
router.delete('/:id', author.remove)

module.exports = router;