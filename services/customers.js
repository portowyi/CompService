const db = require('../util/database');
const CustomerCls = require('../model/customer');

class CustomerController{

    getCustomers() {
        let customerArray = [];
        db.query("SELECT * FROM customers").then(([rows, fields]) => {

            rows.forEach(value => {
                customerArray.push(new CustomerCls(value))
            });

            console.log(customerArray);

        });

        return customerArray;
    };

    getCustomerById(id){

    };

    createCustomer(){

    };

    updateCustomer(){

    };

};

module.exports = new CustomerController();