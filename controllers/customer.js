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
    CustomerService.findAll(req.query)
    .then(customers => {
        res.render('customers', { customers: customers });
    })
    .catch(err => {
            res.redirect('404');
    });
};

exports.getEditCustomer = (req, res) => {
    const customerId = req.params.customerId;
    CustomerService.findById(customerId)
    .then(customer => {
        if(customer === null){
            return res.render('add-customer');
        };
        res.render('edit-customer', { customer: customer.dataValues });
    })
    .catch(err => {
        res.redirect('404');
    });
};