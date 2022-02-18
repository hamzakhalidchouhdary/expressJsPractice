const { encodeUserToken } = require('../../utiliti/userAuthentication')

const router = require('express').Router()

router.all('/login', (req,res) => {
  const userCredentials = req.body
  const token = encodeUserToken(userCredentials)
  res.status(200).json({
    "message" : "LOGIN SUCCESSFULLY",
    "token" : token
  });
})

router.post('/join', (req,res) => {
  res.send('USER CREATED')
})

router.post('/resetpassword', (req,res) => {
  res.send('PASSWORD CHANGED')
})

module.exports = router