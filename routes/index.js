const router = require('express').Router();
const book = require('./book');
const author = require('./author');
const root = require('./root')

router.use('/book', book);
router.use('/author', author);
router.use('/', root);

module.exports = router;