const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.TOKEN_KEY

const encodeUserToken = (userCredentials) => {
  try {
    return jwt.sign(
      userCredentials,
      JWT_SECRET,
      { expiresIn: "2h"}
    );
  } catch (error) {
    console.error(error.message)
    return null
  }
}

const decodeUserToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    if (error.message.includes("expired")) throw {message: 'Authentication Token Expired', status: 401}
    throw error
  }
}

module.exports = {
  encodeUserToken,
  decodeUserToken
}