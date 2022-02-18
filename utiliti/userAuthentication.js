const jwt = require("jsonwebtoken")

const encodeUserToken = (userCredentials) => {
  var token = null
  try {
    token = jwt.sign(
      userCredentials,
      "12345",
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
    user = jwt.verify(token, "12345")
  } catch (error) {
    console.error(error.message)
  }
  return user;
}

module.exports = {
  encodeUserToken,
  decodeUserToken
}