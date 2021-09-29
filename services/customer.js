const Customer = require('../model/customer');
const { Op } = require("sequelize");

class CustomerService {

    async addCustomer(customerFields){
        return Customer.create(customerFields);
    };

    findAll(queryParams){
        if (queryParams.hasOwnProperty('searchString') && queryParams.searchString) {
            return Customer.findAll({
                where: {
                    [Op.or]: [
                        {
                            firstName: {
                                [Op.like]: `%${queryParams.searchString}%`
                            }
                        },
                        {
                            lastName: {
                                [Op.like]: `%${queryParams.searchString}%`
                            }
                        },
                        {
                            patronymic: {
                                [Op.like]: `%${queryParams.searchString}%`
                            }
                        },
                        {
                            street: {
                                [Op.like]: `%${queryParams.searchString}%`
                            }
                        },
                        {
                            comment: {
                                [Op.like]: `%${queryParams.searchString}%`
                            }
                        }
                    ]
                }
            });
        }
        return Customer.findAll();
    }

}

module.exports = new CustomerService();