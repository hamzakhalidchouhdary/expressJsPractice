const { encodeUserToken } = require("../../utiliti/tokenAuthentication");
const { sendErrorResponseV1: sendError } = require("../../utiliti/errorResponses");
const { verifyPassword, getHashedPassword } = require("../../utiliti/userPasswordEncryption");
const User = require('../../models/user');

const login = (req, res) => {
  try{
    const {username, password} = req.body
    User.getForLogin(username).
    then(async(user) => {
      const isMatched = await verifyPassword(user?.password, password)
      if (isMatched) {
        const token = encodeUserToken({id: user['id']})
        res.status(200).json({
          "message" : "LOGIN SUCCESSFULLY....",
          "token" : token
        });
      } else {
        throw {message: 'invalid username or password', status: 401}
      }    
    }).
    catch(err => {sendError(err, res)})
  } catch (error) {
    console.error(error)
    sendError({}, res)
  }
}

const join = (req,res) => {
  try {
    const {username, password, fullName: full_name} = req.body
    getHashedPassword(password).
    then(hashedPassword => User.create({username, full_name, password: hashedPassword})).
    then(user => {
      const token = encodeUserToken({"id" : user['id']})
      res.status(201).json({"message":"USER CREATED", token})
    }).catch(err => sendError(err, res))
  } catch (error) {
    console.error(error)
    sendError({}, res);
  }
}

const resetPassword = (req,res) => {
  try {
    res.send('PASSWORD CHANGED')
  } catch (error) {
    sendError(error, res);
  }
}

module.exports = {
  login,
  join,
  resetPassword,
}