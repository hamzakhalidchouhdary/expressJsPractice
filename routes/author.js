const router = require('express').Router();
const { author } = require('../controllers');

router.get('/', (req, res, next) => author.all(req, res))
router.get('/:id', (req, res, next) => author.get(req, res))
router.post('/', (req, res, next) => author.add(req, res))
router.put('/:id', (req, res, next) => author.update(req, res))
router.delete('/:id', (req, res, next) => author.remove(req, res))

module.exports = router;