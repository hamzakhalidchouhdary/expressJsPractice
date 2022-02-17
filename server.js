const app = require('express')();
const router = require('./routes');

const PORT = 3000;

app.use('/api', router);
app.use((req, res) => { // IN CASE NO MATCH FOUND
  res.status(404).send({
    "error": "Not found"
  })
 })

app.listen(PORT, () => console.log(`App STARTED AT PORT : ${PORT}`));