const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const sequelize = require('./util/database');

const routes = require('./routes/index');
const CustomerCls = require("./model/customer");
const customerController = require('./services/customer');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

console.log('public', path.join(__dirname, 'public/css'));

app.use(routes);

sequelize.sync().then(result => {
    app.listen(PORT, () => {
        console.log(`Server start on port ${PORT}`);
    });
}).catch(err => {
    console.log(err);
})



