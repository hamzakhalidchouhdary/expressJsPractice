const all = (req, res) => {
  res.json({"message" : "All Books"});
}

const get = (req, res) => {
  const params = req.params;
  res.json({"message" : "Book found", "data" : {"book" : {"id" : params.id}}});
}

const add = (req, res) => {
  const params = req.params;
  res.json({"message" : "Book added"});
}

const update = (req, res) => {
  const params = req.params;
  res.json({"message" : "Book updated"});
}

const remove = (req, res) => {
  const params = req.params;
  res.json({"message" : "Book deleted"});
}

module.exports = {
  all,
  get,
  add,
  update,
  remove,
}