const Customer = require('../model/customer');
const { Op } = require("sequelize");

class CustomerService {

    async addCustomer(customerFields){
       //if(customerFields.id){
       //     return Customer.update(customerFields);
       // }
        return Customer.upsert(customerFields);
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

    findById(id){
        if(typeof id === "undefined"){
            return null;
        }
        return Customer.findByPk(id);
    }

}

module.exports = new CustomerService();