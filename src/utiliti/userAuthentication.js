require('dotenv').config()
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.TOKEN_KEY

const encodeUserToken = (userCredentials) => {
  var token = null
  try {
    token = jwt.sign(
      userCredentials,
      JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
  } catch (error) {
    console.error(error.message)
  }
  return token
}

const decodeUserToken = (token) => {
  var user = {}
  try {
    user = jwt.verify(token, JWT_SECRET)
  } catch (error) {
    if (error.message.includes("expired")) throw {message: 'Authentication Token Expired', status: 401}
    throw error
  }
  return user;
}

module.exports = {
  encodeUserToken,
  decodeUserToken
}