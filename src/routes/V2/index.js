/* YOU ARE IN V2 ROUTER */
const router = require('express').Router();
const V2bookResourse = require('./book');
const V2authorResourse = require('./author');

router.use('/book', V2bookResourse);
router.use('/author', V2authorResourse);

module.exports = router;