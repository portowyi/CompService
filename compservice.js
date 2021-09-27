const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const db = require('./util/database');

const routes = require('./routes/index');
const CustomerCls = require("./model/customer");
const customerController = require('./services/customers');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

console.log(customerController.getCustomers());

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

console.log('public', path.join(__dirname, 'public/css'));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})

