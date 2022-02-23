const router = require('express').Router();

router.get('/', (req, res) => {
  try{
    const noteId = req.noteId;
    res.json({
      'note id': noteId,
      'message': 'items found'
    });
  } catch (error) {
    res.status(500).send(error.message)
  }
})
router.get('/:id', (req, res) => {
  try{
    const itemId = req.params.id;
    const noteId = req.noteId;
    res.json({
      'item id': itemId,
      'note id': noteId,
      'message': 'item found'
    });
  } catch (error) {
    res.status(500).send(error.message)
  }
})
router.post('/:id', (req, res) => {
  try{
    const itemId = req.params.id;
    const noteId = req.noteId;
    res.json({
      'item id': itemId,
      'note id': noteId,
      'message': 'item added'
    });
  } catch (error) {
    res.status(500).send(error.message)
  }
})
router.put('/:id', (req, res) => {
  try{
    const itemId = req.params.id;
    const noteId = req.noteId;
    res.json({
      'item id': itemId,
      'note id': noteId,
      'message': 'item updated'
    });
  } catch (error) {
    res.status(500).send(error.message)
  }
})
router.delete('/:id', (req, res) => {
  try{
    const itemId = req.params.id;
    const noteId = req.noteId;
    res.json({
      'item id': itemId,
      'note id': noteId,
      'message': 'item deleted'
    });
  } catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router