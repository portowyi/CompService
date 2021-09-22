const customers = [];

module.exports = class Customer{

    constructor(firstName, lastName, patronymic, street, comment) {
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