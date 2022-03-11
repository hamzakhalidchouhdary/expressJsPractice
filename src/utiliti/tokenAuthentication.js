const User = require("../models/user")
const { sendErrorResponseV1: sendError } = require("./errorResponses")
const { decodeUserToken } = require("./userAuthentication")

const tokenAuthenticationV1 = async (req, res, next) => {
  try {
    const header = req.headers
    const token = header.authorization || null 
    if (token) {
      const {id} = decodeUserToken(token.split(' ')[1])
      const user = await User.findById(id)
      if (!user) throw {message: 'user not find', status: 401}
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