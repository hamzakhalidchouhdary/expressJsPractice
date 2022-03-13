const bcrypt = require('bcrypt');
const saltRounds = 10;

const getHashedPassword = async(simplePassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(simplePassword, saltRounds, function(err, hash) {
      err && reject(err)
      resolve(hash)
    });
  })
}

const verifyPassword = async(hashedPassword, userPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(userPassword, hashedPassword, (err, result) => {
      err && reject(err)
      resolve(result)
    });
  })
}

module.exports = {
  getHashedPassword,
  verifyPassword
}