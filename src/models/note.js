const knex = require('../db/config')

const tableName = 'notes'
const attributesInResponse = ['id', 'title']

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

const findByUser = (user_id) => {
  try {
    return new Promise((resolve, reject) => {
      knex(tableName).
      select(attributesInResponse).
      where({user_id}).
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
  findByUser
}