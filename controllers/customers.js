const Customer = require('../model/customer');
const {log} = require("nodemon/lib/utils");

exports.getAddCustomer = (req, res) => {
    res.render('add-customer');
};

exports.postAddCustomer = (req, res) => {
    console.log(req.body);
    if (req.body.firstName === "" && req.body.lastName === "" && req.body.patronymic === "") {

    }
    const customer = new Customer(req.body);
    customer.save();
    res.redirect('/customers');
};

exports.getCustomers = (req, res) => {
    //res.render('customers', {'customers' : Customer.fetchAll()});
};