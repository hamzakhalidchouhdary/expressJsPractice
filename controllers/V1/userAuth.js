const { encodeUserToken } = require("../../utiliti/userAuthentication");

const login = (req, res) => {
  try {

    const userCredentials = req.body
    const token = encodeUserToken(userCredentials)
    res.status(200).json({
      "message" : "LOGIN SUCCESSFULLY....",
      "token" : token
    });
  } catch (error) {
    res.status(error.status || 500).send({
      "error": {
        "message": error.message || "Internal Server Error",
      },
    });
  }
}

const join = (req,res) => {
  try {
    res.send('USER CREATED')
  } catch (error) {
    res.status(error.status || 500).send({
      "error": {
        "message": error.message || "Internal Server Error",
      },
    });
  }
}

const resetPassword = (req,res) => {
  try {
    res.send('PASSWORD CHANGED')
  } catch (error) {
    res.status(error.status || 500).send({
      "error": {
        "message": error.message || "Internal Server Error",
      },
    });
  }
}

module.exports = {
  login,
  join,
  resetPassword,
}