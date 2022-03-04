const knex = require('../db/config')

const tableName = 'note_items'
const attributesInResponse = ['id', 'content']

const create = (data) => {
  try {
    return new Promise((resolve, reject) => {
      knex(tableName).
      insert({...data}).
      then(id => resolve(findById(id))).
      catch(err => reject(err))
    })
  } catch (err) {
    console.error(err.message)
  }
}

const all = () => {
  try {
    return new Promise((resolve, reject) => {
      knex(tableName).
      select(attributesInResponse).
      then(res => resolve(res)).
      catch(err => reject(err))
    })
  } catch (err) {
    console.error(err.message)
  }
}

const findById = (id) => {
  try {
    return new Promise((resolve, reject) => {
      knex(tableName).
      select(attributesInResponse).
      where({id}).
      then(res => resolve(res)).
      catch(err => reject(err))
    })
  } catch (err) {
    console.error(err.message)
  }
}

const findByNote = (note_id) => {
  try {
    return new Promise((resolve, reject) => {
      knex(tableName).
      select(attributesInResponse).
      where({note_id}).
      then(res => resolve(res)).
      catch(err => reject(err))
    })
  } catch (err) {
    console.error(err.message)
  }
}

module.exports = {
  create,
  all,
  findById,
  findByNote
}