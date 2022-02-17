const router = require('express').Router();
const {V2Controllers} = require('../../controllers');

router.get('/', V2Controllers.author.all)
router.get('/:id', V2Controllers.author.get)
router.post('/', V2Controllers.author.add)
router.put('/:id', V2Controllers.author.update)
router.delete('/:id', V2Controllers.author.remove)

module.exports = router;