const CustomerService = require('../services/customer');

exports.getAddCustomer = (req, res) => {
    res.render('add-customer');
};

exports.postAddCustomer = (req, res) => {
    const newCustomer = CustomerService.addCustomer(req.body);
    if (newCustomer){
        res.redirect('/customers');
    } else {
        res.redirect('404');
    }

};

exports.getCustomers = (req, res) => {
    console.log(req.query);
    CustomerService.findAll(req.query)
    .then(customers => {
        res.render('customers', { customers: customers });
    })
    .catch(err => {
            res.redirect('404');
    });
};