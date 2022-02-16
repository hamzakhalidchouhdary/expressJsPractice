const app = require('express')();
const router = require('./routes');

const PORT = 3000;

app.use('/', router);

app.listen(PORT, () => console.log(`App STARTED AT PORT : ${PORT}`));