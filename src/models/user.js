const knex = require('../db/config')

const tableName = 'users'
const columns = ['id', 'full_name', 'username']

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
      select(columns).
      then(res => resolve(res)).
      catch(err => reject(err))
    }) 
}

const getPassword = () => {
  return new Promise((resolve, reject) => {
    knex(tableName).
    select('password').
    then(res => resolve(res)).
    catch(err => reject(err))
  }) 
}

const findById = (id) => {
  return new Promise((resolve, reject) => {
    knex(tableName).
    select(columns).
    where({id}).
    then(res => resolve(res)).
    catch(err => reject(err))
  }) 
}

const findByUsername = (username) => {
  return new Promise((resolve, reject) => {
    knex(tableName).
    select(columns).
    where({username}).
    then(res => resolve(res)).
    catch(err => reject(err))
  }) 
}

const findByName = (fullName) => {
  return new Promise((resolve, reject) => {
    knex(tableName).
    select(columns).
    whereILike('full_name', fullName).
    then(res => resolve(res)).
    catch(err => reject(err))
  }) 
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
  getPassword,
  findById,
  findByUsername,
  findByName,
  update,
  remove
}