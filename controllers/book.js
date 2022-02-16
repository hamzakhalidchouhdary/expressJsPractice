const all = (req, res) => {
  try {
    res.json({"message" : "All Books"});
  } catch (error) {
    res.status(error.status || 500).send({
      "error": {
        "message": error.message || "Internal Server Error",
      },
    });
  }
}

const get = (req, res) => {
  try {
    const params = req.params;
    res.json({"message" : "Book found", "data" : {"book" : {"id" : params.id}}});
  } catch (error) {
    res.status(error.status || 500).send({
      "error": {
        "message": error.message || "Internal Server Error",
      },
    });
  }
}

const add = (req, res) => {
  try {
    const params = req.params;
    res.json({"message" : "Book added"});
  } catch (error) {
    res.status(error.status || 500).send({
      "error": {
        "message": error.message || "Internal Server Error",
      },
    });
  }
}

const update = (req, res) => {
  try {
    const params = req.params;
    res.json({"message" : "Book updated"});
  } catch (error) {
    res.status(error.status || 500).send({
      "error": {
        "message": error.message || "Internal Server Error",
      },
    });
  }
}

const remove = (req, res) => {
  try {
    const params = req.params;
    res.json({"message" : "Book deleted"});
  } catch (error) {
    res.status(error.status || 500).send({
      "error": {
        "message": error.message || "Internal Server Error",
      },
    });
  }
}

module.exports = {
  all,
  get,
  add,
  update,
  remove,
}