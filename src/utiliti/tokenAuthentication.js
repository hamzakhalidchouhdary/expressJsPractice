const { sendErrorResponseV1: sendError } = require("./errorResponses")
const { decodeUserToken } = require("./userAuthentication")

const tokenAuthenticationV1 = (req, res, next) => {
  try {
    const header = req.headers
    const token = header.authorization || null 
    if (token) {
      const user = decodeUserToken(token.split(' ')[1])
      req.user = user
    } else {
      throw {message: 'Missing Authentication Token', status: 400}
    }
    next()
  } catch (error) {
    sendError(error, res)
  }
}

module.exports = {
  tokenAuthenticationV1
}