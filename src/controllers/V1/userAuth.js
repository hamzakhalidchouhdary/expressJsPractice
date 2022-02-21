const { encodeUserToken } = require("../../utiliti/userAuthentication");
const { sendErrorResponseV1: sendError } = require("../../utiliti/errorResponses");

const validateUser = ({username, password}) => {
  if (username === 'hamzakhalidchouhdary' && password === '123456789012345') return 
  throw {message: 'invalid username or password', status: 401}
}
const login = (req, res) => {
  try {
    const userCredentials = req.body
    validateUser(userCredentials);
    const token = encodeUserToken(userCredentials)
    res.status(200).json({
      "message" : "LOGIN SUCCESSFULLY....",
      "token" : token
    });
  } catch (error) {
    sendError(error, res);
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