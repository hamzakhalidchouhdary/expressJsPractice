const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.end('Author Root');
})

module.exports = router;