const { sendErrorResponseV1: sendError } = require("../../utiliti/errorResponses");
const Note = require('../../models/note')
const { getAllUserNotes, getAUserNote } = require("./helper");

const all = (req, res) => {
  try{
    const {user} = req;
    getAllUserNotes(user['id']).then(userNotes => {
      res.status(200).
      json(userNotes)
    }).catch(err => sendError(err, res))
  } catch (err) {
    console.error(err)
    sendError({}, res)
  }
}

const get = (req, res) => {
  try {
    const {user} = req
    const {id} = req.params;
    getAUserNote(user['id'], id).
    then(note => {
      res.status(200).json(note)
    }).catch(err => sendError(err, res))
  } catch (err) { 
    console.error(err.message)
    sendError({}, res) 
  }
}

const add = (req, res) => {
  try {
    const {user} = req
    const {title} = req.body;
    Note.create({title, "user_id": user['id']}).
    then(newNote => {res.status(201).
      json({message: 'note created', data: newNote[0]})
    }).catch(err => sendError(err, res))
  } catch (error) {
    console.error(error)
    sendError({}, res)
  }
}

const update = (req, res) => {
  try {
    const {user} = req
    const {title} = req.body;
    const {id} = req.params
    getAUserNote(user['id'], id).
    then(r => {
      Note.update(id, {title}).
      then(updatedNote => {res.status(200).
        json({message: 'note updated', data: updatedNote})
      })
    }).catch(err => sendError(err, res))
  } catch (error) {
    console.error(error)
    sendError({}, res);
  }
}

const remove = (req, res) => {
  try {
    const {user} = req
    const {title} = req.body;
    const {id} = req.params
    getAUserNote(user['id'], id).then(r => {
      Note.remove(id).
      then(status => {res.status(200).
        json({message: 'note deleted', data: status})
      })
    }).catch(err => sendError(err, res))
  } catch (error) {
    console.error(error)
    sendError({}, res);
  }
}

module.exports = {
  all,
  get,
  add,
  update,
  remove,
}