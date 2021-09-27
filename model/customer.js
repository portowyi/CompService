const customers = [];

module.exports = class Customer{

    constructor({firstName, lastName, patronymic, street, comment}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.street = street;
        this.comment = comment;
        this.id = null;
    }

    save(){
        if (this.id === null){
            this.id = customers.length;
        }
        customers.push(this);
    }

    static fetchAll(){
        return customers;
    }
}

// CREATE TABLE `comp_crm_test`.`customers` (
//     `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
//     `first_name` VARCHAR(45) NULL,
//     `second_name` VARCHAR(45) NULL,
//     `patronymic` VARCHAR(45) NULL,
//     `street` VARCHAR(255) NULL,
//     `comment` VARCHAR(255) NULL,
//     PRIMARY KEY (`id`),
//     UNIQUE INDEX `id_UNIQUE` (`id` ASC));