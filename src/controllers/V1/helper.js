const Note = require('../../models/note')
const NoteItem = require('../../models/noteItem');

const getNoteItems = (note) => {
  try{
    return new Promise((resolve, reject) => {
      NoteItem.findByNote(note['id']).then(noteItems => {
        note['items'] = noteItems
        resolve(note)
      }).catch(err => reject(err))
    })
  } catch (err) { throw err }
}

const getAllUserNotes = (userId) => {
  try {
    return new Promise((resolve, reject) => {
      Note.findByUser(userId).
      then(notes => Promise.all(notes.map(getNoteItems))).
      then(notesWithItems => resolve(notesWithItems)).
      catch(err => reject(err))
    })
  } catch (err) {throw err}
}

const getAUserNote = (userId, noteId) => {
  try{
    return new Promise((resolve, reject) => {
      getAllUserNotes(userId).
      then(notes => {
        const requestedNote = notes.filter(note => {return note.id == noteId}) || false
        requestedNote[0] ? resolve(requestedNote[0]) : reject({"message" : "not found", status: 401})
      }).catch(err => {
        console.error(err)
        reject({})
      })
    })
  } catch (err) { throw err }
}

module.exports = {
  getAUserNote,
  getAllUserNotes
}