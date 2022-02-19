const router = require('express').Router();
const { V1Controllers } = require('../../controllers');

router.get('/', V1Controllers.author.all)
router.get('/:id', V1Controllers.author.get)
router.post('/', V1Controllers.author.add)
router.put('/:id', V1Controllers.author.update)
router.delete('/:id', V1Controllers.author.remove)

module.exports = router;