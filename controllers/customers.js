const Customer = require('../model/customer');

exports.getAddCustomer = (req, res) => {
    res.render('add-customer');
};

exports.postAddCustomer = (req, res) => {
    const customer = new Customer(req.body.name, req.body.street);
    customer.save();
    res.redirect('/customers');
};

exports.getCustomers = (req, res) => {
    res.render('customers', {'customers' : Customer.fetchAll()});
};