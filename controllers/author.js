const all = (req, res) => {
  res.json({"message" : "All Author"});
}

const get = (req, res) => {
  const params = req.params;
  res.json({"message" : "Author found", "data" : {"author" : {"id" : params.id}}});
}

const add = (req, res) => {
  const params = req.params;
  res.json({"message" : "Author added"});
}

const update = (req, res) => {
  const params = req.params;
  res.json({"message" : "Author updated"});
}

const remove = (req, res) => {
  const params = req.params;
  res.json({"message" : "Author deleted"});
}

module.exports = {
  all,
  get,
  add,
  update,
  remove,
}