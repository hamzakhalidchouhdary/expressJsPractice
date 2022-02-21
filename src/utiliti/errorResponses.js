exports.sendErrorResponseV1 = (error, res) => {
  res.status(error.status || 500).send({
    "error": {
      "message": error.message || "Internal Server Error",
    },
  });
}