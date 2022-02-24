const { sendErrorResponseV1: sendError } = require("../../utiliti/errorResponses")

const all = (req, res) => {
  try{
    const noteId = req.noteId;
    res.json({
      'note id': noteId,
      'message': 'items found'
    })
  } catch (error) {
      sendError(error, res);
    }
}
const get = (req, res) => {
  try{
    const itemId = req.params.id;
    const noteId = req.noteId;
    res.json({
      'item id': itemId,
      'note id': noteId,
      'message': 'item found'
    })
  } catch (error) {
      sendError(error, res);
    }
}
const add = (req, res) => {
  try{
    const itemId = req.params.id;
    const noteId = req.noteId;
    res.json({
      'item id': itemId,
      'note id': noteId,
      'message': 'item added'
    })
  } catch (error) {
      sendError(error, res);
    }
}
const update = (req, res) => {
  try{
    const itemId = req.params.id;
    const noteId = req.noteId;
    res.json({
      'item id': itemId,
      'note id': noteId,
      'message': 'item updated'
    })
  } catch (error) {
      sendError(error, res);
    }
}
const remove = (req, res) => {
  try{
    const itemId = req.params.id;
    const noteId = req.noteId;
    res.json({
      'item id': itemId,
      'note id': noteId,
      'message': 'item deleted'
    })
  } catch (error) {
      sendError(error, res);
    }
}
const removeAll = (req, res) => {
  try{
    const noteId = req.noteId;
    res.json({
      'note id': noteId,
      'message': 'items deleted'
    })
  } catch (error) {
      sendError(error, res);
    }
}

module.exports = {
  all,
  get,
  add,
  update,
  remove,
  removeAll
}