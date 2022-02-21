const router = require('express').Router();
const { V1Controllers: V1 } = require('../../controllers');

router.get('/', V1.user.all)
router.get('/:id', V1.user.get)
router.post('/', V1.user.add)
router.put('/:id', V1.user.update)
router.delete('/:id', V1.user.remove)

module.exports = router;