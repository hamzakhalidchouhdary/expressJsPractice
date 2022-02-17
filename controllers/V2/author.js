const all = (req, res) => {
  try {
    res.json({"message" : "All Author", "version" : "2"});
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
    res.json({"message" : "Author found", "data" : {"author" : {"id" : params.id}}});
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
    res.json({"message" : "Author added"});
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
    res.json({"message" : "Author updated"});
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
    res.json({"message" : "Author deleted"});
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