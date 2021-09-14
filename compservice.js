const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);

app.all('/', (req, res) => {
    res.status(404).send('Not found');
});

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})

