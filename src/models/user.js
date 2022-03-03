const knex = require('../db/config')

const create = (data) => {
  try {
    return new Promise((resolve, reject) => {
      knex('users').
      insert({...data}).
      then(id => resolve(findById(id))).
      catch(err => reject(err))
    })
  } catch (err) {
    console.error(err.message)
  }
}

const all = () => {
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
  create,
  all,
  findById,
  findByUsername,
  findByName
}