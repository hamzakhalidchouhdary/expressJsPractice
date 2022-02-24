const router = require('express').Router();
const V1Resourse = require('./V1');
const V2Resourse = require('./V2');
try {
  router.use('/v1', V1Resourse);
  router.use('/v2', V2Resourse);
} catch (error) {
  console.error(error.messsage)
}

module.exports = router