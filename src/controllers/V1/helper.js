const Note = require('../../models/note')
const NoteItem = require('../../models/noteItem');

const getNoteItems = (note) => {
  try{
    return new Promise((resolve, reject) => {
      NoteItem.findByNote(note['id']).
        then(noteItems => {
          note['items'] = noteItems
          resolve(note)
        }).
        catch(err => reject(err))
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
        const requestedNote = notes.find(note => {return note.id == noteId}) || false
        requestedNote ? resolve(requestedNote) : reject({"message" : "not found", status: 404})
      }).catch(err => {
        console.error(err)
        reject({})
      })
    })
  } catch (err) { throw err }
}

const getAllUserNoteItems = (userId, noteId) => {
  try{
    return new Promise((resolve, reject) => {
      getAUserNote(userId, noteId).
      then(userNote => resolve(userNote.items)).
      catch(reject)
    })
  } catch (err) { throw err}
}

const getAUserNoteItem = (userId, noteId, itemId) => {
  try {
    return new Promise((resolve, reject) => {
      getAllUserNoteItems(userId, noteId).
      then(items => {
        const requestedItem = items.find(item => item.id == itemId) || false
        requestedItem && resolve(requestedItem)
        reject({"message": "not found", status: 404})
      }).catch(reject)
    })
  } catch (err) { throw err }
}

module.exports = {
  getAUserNoteItem,
  getAllUserNoteItems,
  getAUserNote,
  getAllUserNotes
}