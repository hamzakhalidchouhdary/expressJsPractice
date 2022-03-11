const { encodeUserToken } = require("../../utiliti/userAuthentication");
const { sendErrorResponseV1: sendError } = require("../../utiliti/errorResponses");
const User = require('../../models/user')

const login = (req, res) => {
  try{
    const {username, password} = req.body
    User.getForLogin(username).
    then(user => {
      if (user?.password === password) {
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
    User.create({username, password, full_name}).
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