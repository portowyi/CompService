const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

console.log('public', path.join(__dirname, 'public/css'));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})

