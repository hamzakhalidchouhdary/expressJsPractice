const { sendErrorResponseV1: sendError } = require("../../utiliti/errorResponses")
const Note = require('../../models/note')
const NoteItem = require('../../models/noteItem');
const { status } = require("express/lib/response");

const all = (req, res) => {
  try{
    const {noteId, user} = req;
    Note.findByUser(user['id']).
    then(notes => notes.filter(note => {return note['id'] == noteId})).
    then(note => NoteItem.findByNote(note[0]['id'])).
    then(items =>  res.json({
        'data': items
      })
    ).
    catch(err => sendError(err, res))
  } catch (error) {
    console.error(error)
      sendError({}, res);
    }
}
const get = (req, res) => {
  try{
    const {noteId, user} = req;
    const {id} = req.params
    Note.findByUser(user['id']).
    then(notes => notes.filter(note => {return note['id'] == noteId})).
    then(note => NoteItem.findByNote(note[0]['id'])).
    then(items => items.filter(item => {return item['id'] == id})).
    then(item =>  res.json({
        'item': item[0]
    })).
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
    const {id} = req.params;
    const {content} = req.body
    NoteItem.update(id, {content}).
    then(status => res.status(200).json(status || null)).
    catch(err => sendError(err, res))
  } catch (error) {
      sendError(error, res);
    }
}
const remove = (req, res) => {
  try{
    const {id} = req.params;
    NoteItem.remove(id).
    then(status => res.status(200).json(status)).
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