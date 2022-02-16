const router = require('express').Router();

router.all('/', (req, res, next) => {
  res.end('App Root');
})

module.exports = router;