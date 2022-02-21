/* YOU ARE IN V1 ROUTER */
const router = require('express').Router();
const V1NoteResourse = require('./note');
const V1UserResourse = require('./user');
const V1AuthenticationResourse = require('./userAuth');

router.use('/note', V1NoteResourse);
router.use('/user', V1UserResourse);
router.use('/auth', V1AuthenticationResourse)

module.exports = router;