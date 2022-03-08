const { sendErrorResponseV1: sendError } = require("../../utiliti/errorResponses");
const User = require("../../models/user");

const all = (req, res) => {
  try {
    res.json({"user" : req.user, "version" : "1"});
  } catch (error) {
    sendError(error, res);
  }
}

const get = (req, res) => {
  try {
    const {id} = req.params
    User.findById(id).
    then(user => res.status(200).json(user[0])).
    catch(err => sendError(err, res))
  } catch (error) {
    console.error(error)
    // sendError(error, res);
  }
}

const add = (req, res) => {
  try {
    const params = req.params;
    res.json({"message" : "User added"});
  } catch (error) {
    sendError(error, res);
  }
}

const update = (req, res) => {
  try {
    const {user} = req;
    const {username, fullName: full_name} = req.body
    User.update(user['id'], {username, full_name}).
    then(status => res.status(200).json(status)).
    catch(err => sendError(err, res))
  } catch (error) {
    console.error(error)
    // sendError(error, res);
  }
}

const remove = (req, res) => {
  try {
    const {user} = req
    User.remove(user['id']).
    then(status => res.status(200).json(status)).
    catch(err => sendError(err, res))
  } catch (error) {
    console.error(error)
    // sendError(error, res);
  }
}

module.exports = {
  all,
  get,
  add,
  update,
  remove,
}