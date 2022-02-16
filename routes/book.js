const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.end('Book Root');
})
router.get('/:id', (req, res, next) => {
  const params = req.params;
  res.end(params.id);
})

module.exports = router;