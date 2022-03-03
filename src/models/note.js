const knex = require('../db/config')

const create = (data) => {
  try {
    return new Promise((resolve, reject) => {
      knex('notes').
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
      knex('notes').
      select().
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
      knex('notes').
      select().
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
      knex('notes').
      select().
      where('user_id', user_id).
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