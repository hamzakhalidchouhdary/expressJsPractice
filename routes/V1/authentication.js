const userAuthentication = (req, res, next) => {
  try {
    const header = req.headers
    const token = header.authorization || null 
    if (token) {
      console.log(token)
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

module.exports = userAuthentication