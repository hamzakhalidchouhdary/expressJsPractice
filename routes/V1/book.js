const router = require('express').Router();
const {V1Controllers} = require('../../controllers');
const {tokenAuthenticationV1} = require('../../utiliti/tokenAuthentication');

router.get('/', tokenAuthenticationV1 , V1Controllers.book.all)
router.post('/', V1Controllers.book.add)
router.get('/:id', V1Controllers.book.get)
router.put('/:id', V1Controllers.book.update)
router.delete('/:id', V1Controllers.book.remove)

module.exports = router;