const { sendErrorResponseV1: sendError } = require("../../utiliti/errorResponses");

const all = (req, res) => {
  try {
    res.json({"message" : "All Books", "version": "1"});
  } catch (error) {
    sendError(error, res);
  }
}

const get = (req, res) => {
  try {
    const params = req.params;
    res.json({"message" : "Book found", "data" : {"book" : {"id" : params.id}}});
  } catch (error) {
    sendError(error, res);
  }
}

const add = (req, res) => {
  try {
    const params = req.params;
    res.json({"message" : "Book added"});
  } catch (error) {
    sendError(error, res);
  }
}

const update = (req, res) => {
  try {
    const params = req.params;
    res.json({"message" : "Book updated"});
  } catch (error) {
    sendError(error, res);
  }
}

const remove = (req, res) => {
  try {
    const params = req.params;
    res.json({"message" : "Book deleted"});
  } catch (error) {
    sendError(error, res);
  }
}

module.exports = {
  all,
  get,
  add,
  update,
  remove,
}