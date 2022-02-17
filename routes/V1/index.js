/* YOU ARE IN V1 ROUTER */
const router = require('express').Router();
const V1bookResourse = require('./book');
const V1authorResourse = require('./author');

router.use('/book', V1bookResourse);
router.use('/author', V1authorResourse);

module.exports = router;