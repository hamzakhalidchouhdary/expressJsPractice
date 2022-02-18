const { decodeUserToken } = require("./userAuthentication")

const tokenAuthenticationV1 = (req, res, next) => {
  try {
    const header = req.headers
    const token = header.authorization || null 
    if (token) {
      const user = decodeUserToken(token.split(' ')[1])
      req.user = user
    } else {
      throw new Error('Missing Authentication Token')
    }
    next()
  } catch (error) {
    res.status(error.status || 400).send({
      "error": {
        "message": error.message || "Not Allowed",
      },
    });
  }
}

module.exports = {
  tokenAuthenticationV1
}