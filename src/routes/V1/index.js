/* YOU ARE IN V1 ROUTER */
const router = require('express').Router();
const { tokenAuthenticationV1: tokenAuthentication } = require('../../utiliti/tokenAuthentication');
const V1NoteResourse = require('./note');
const V1UserResourse = require('./user');
const V1AuthenticationResourse = require('./userAuth');

router.use('/note', tokenAuthentication, V1NoteResourse);
router.use('/user', tokenAuthentication, V1UserResourse);
router.use('/auth', V1AuthenticationResourse)

module.exports = router;