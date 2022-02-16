const app = require('express')();
const router = require('./routes');

const PORT = 3000;

app.use('/book', router.book);
app.use('/author', router.author);
app.use('/', router.root);

app.listen(PORT, () => console.log(`App STARTED AT PORT : ${PORT}`));