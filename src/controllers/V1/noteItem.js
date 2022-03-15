const { sendErrorResponseV1: sendError } = require("../../utiliti/errorResponses")
const NoteItem = require('../../models/noteItem');
const { getAUserNoteItem, getAllUserNoteItems } = require("./helper");

const all = (req, res) => {
  try{
    const {noteId, user} = req;
    getAllUserNoteItems(user['id'], noteId).
    then(items =>  res.json(items)
    ).catch(err => sendError(err, res))
  } catch (error) {
    console.error(error)
    sendError({}, res);
  }
}
const get = (req, res) => {
  try{
    const {noteId, user} = req;
    const {id} = req.params
    getAUserNoteItem(user['id'], noteId, id).
    then(item =>  res.json(item)).
    catch(err => sendError(err, res))
  } catch (error) {
      sendError(error, res);
    }
}
const add = (req, res) => {
  try{
    const {content} = req.body
    const {noteId} = req;
    NoteItem.create({content, note_id: noteId}).
    then(status => res.status(201).json(status)).
    catch(err => sendError(err, res))
  } catch (error) {
      sendError(error, res);
    }
}
const update = (req, res) => {
  try{
    const {user, noteId} = req
    const {id} = req.params;
    const {content} = req.body
    getAUserNoteItem(user['id'], noteId, id).
    then(r =>  {
      NoteItem.update(id, {content}).
      then(status => res.status(200).json(status || null))
    }).
    catch(err => sendError(err, res))
  } catch (error) {
      sendError(error, res);
    }
}
const remove = (req, res) => {
  try{
    const {user, noteId} = req
    const {id} = req.params;
    getAUserNoteItem(user['id'], noteId, id)
    .then(r => {
      NoteItem.remove(id).
      then(status => res.status(200).json(status))
    }).
    catch(err => sendError(err, res))
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