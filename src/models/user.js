const knex = require('../db/config')

const create = (data) => {
  try {

  } catch (err) {
    console.error(err.message)
  }
}

const find = () => {
    return new Promise((resolve, reject) => {
      knex('users').
      select().
      then(res => resolve(res)).
      catch(err => reject(err))
    }) 
}

const findById = (id) => {
  return new Promise((resolve, reject) => {
    knex('users').
    select().
    where({id}).
    then(res => resolve(res)).
    catch(err => reject(err))
  }) 
}

const findByUsername = (username) => {
  return new Promise((resolve, reject) => {
    knex('users').
    select().
    where({username}).
    then(res => resolve(res)).
    catch(err => reject(err))
  }) 
}

const findByName = (fullName) => {
  return new Promise((resolve, reject) => {
    knex('users').
    select().
    whereILike('full_name', fullName).
    then(res => resolve(res)).
    catch(err => reject(err))
  }) 
}
module.exports = {
  find,
  findById,
  findByUsername,
  findByName
}