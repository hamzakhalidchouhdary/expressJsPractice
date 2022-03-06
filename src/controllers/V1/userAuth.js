const { encodeUserToken } = require("../../utiliti/userAuthentication");
const { sendErrorResponseV1: sendError } = require("../../utiliti/errorResponses");
const User = require('../../models/user')

const login = (req, res) => {
  try{
    const {username, password} = req.body
    User.getForLogin(username).
    then(r => {
      if (r[0]['password'] === password) {
        const token = encodeUserToken({id: r[0]['id']})
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
  }
}

const join = (req,res) => {
  try {
    res.send('USER CREATED')
  } catch (error) {
    sendError(error, res);
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