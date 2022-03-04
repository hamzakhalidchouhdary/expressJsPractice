const knex = require('../db/config')

const tableName = 'users'
const attributesInResponse = ['id', 'full_name', 'username']

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
    return new Promise((resolve, reject) => {
      knex(tableName).
      select(attributesInResponse).
      then(res => resolve(res)).
      catch(err => reject(err))
    }) 
}

const findById = (id) => {
  return new Promise((resolve, reject) => {
    knex(tableName).
    select(attributesInResponse).
    where({id}).
    then(res => resolve(res)).
    catch(err => reject(err))
  }) 
}

const findByUsername = (username) => {
  return new Promise((resolve, reject) => {
    knex(tableName).
    select(attributesInResponse).
    where({username}).
    then(res => resolve(res)).
    catch(err => reject(err))
  }) 
}

const findByName = (fullName) => {
  return new Promise((resolve, reject) => {
    knex(tableName).
    select(attributesInResponse).
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