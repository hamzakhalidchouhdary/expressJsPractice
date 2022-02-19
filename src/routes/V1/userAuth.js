const {V1Controllers} = require('../../controllers')
const router = require('express').Router()

router.post('/login', V1Controllers.userAuth.login)
router.post('/join', V1Controllers.userAuth.join)
router.post('/resetpassword', V1Controllers.userAuth.resetPassword)

module.exports = router