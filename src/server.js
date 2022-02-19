const express = require('express')
const app = express();
const router = require('./routes');

const PORT = 3000;

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.use('/api', router);
app.use((req, res) => { // IN CASE NO MATCH FOUND
  res.status(404).send({
    "error": "Not found"
  })
 })

app.listen(PORT, () => console.log(`App STARTED AT PORT : ${PORT}`));