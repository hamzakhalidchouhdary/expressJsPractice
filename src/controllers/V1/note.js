const { sendErrorResponseV1: sendError } = require("../../utiliti/errorResponses");
const Note = require('../../models/note')
const NoteItem = require('../../models/noteItem')

const getNoteItems = (note) => {
  try{
    return new Promise((resolve, reject) => {
      NoteItem.findByNote(note['id']).then(items => {
        note['items'] = items
        resolve(note)
      }).catch(err => reject(err))
    })
  } catch (err) { console.error(err.message) }
}

const all = (req, res) => {
  const {user} = req;
  Note.findByUser(user['id']).
  then(notes => Promise.all(notes.map(getNoteItems))).
  then(notes => res.status(200).json(notes)).
  catch(err => sendError(err, res))
}

const get = (req, res) => {
  try {
    const {user} = req
    const {id} = req.params;
    Note.findByUser(user['id']).
    then(notes => Promise.all(notes.filter(note => {return note.id == id}).map(getNoteItems))).
    then(notesWithItems => res.status(200).json(notesWithItems)).
    catch(err => sendError(err, res))
  } catch (err) { console.error(err.message) }
}

const add = (req, res) => {
  try {
    const {user} = req
    const {title} = req.body;
    const user_id = user['id']
    Note.create({title, user_id}).
    then(newNote => {res.status(201).
      json({message: 'note created', data: newNote})
    }).catch(err => sendError(err, res))
  } catch (error) {
    console.error(error)
  }
}

const update = (req, res) => {
  try {
    const {user} = req
    const {title} = req.body;
    const {id} = req.params
    Note.update(id, {title}).
    then(updatedNote => {res.status(200).
      json({message: 'note updated', data: updatedNote})
    }).catch(err => sendError(err, res))
  } catch (error) {
    sendError(error, res);
  }
}

const remove = (req, res) => {
  try {
    const {user} = req
    const {title} = req.body;
    const {id} = req.params
    Note.remove(id,).
    then(status => {res.status(200).
      json({message: 'note deleted', data: status})
    }).catch(err => sendError(err, res))
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
}