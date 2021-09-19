const customers = [];

module.exports = class Customer{
    constructor(name, addr) {
        this.name = name;
        this.street = addr;
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