const knex = require('../db/config')

const tableName = 'note_items'
const columns = ['id', 'content']

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
      select(columns).
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
      select(columns).
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
      select(columns).
      where({note_id}).
      then(res => resolve(res)).
      catch(err => reject(err))
    })
  } catch (err) {
    console.error(err.message)
  }
}

const update = (id, data) => {
  try {
    data['updated_at'] = knex.fn.now()
    return new Promise((resolve, reject) => {
      knex(tableName).
      where({id}).
      update(data).
      then(res => resolve(res)).
      catch(err => reject(err))
    })
  } catch (err) {
    console.error(err.message)
  }
}

const remove = (id) => {
  try {
    return new Promise((resolve, reject) => {
      knex(tableName).
      select().
      where({id}).
      del().
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
  findByNote,
  update,
  remove
}