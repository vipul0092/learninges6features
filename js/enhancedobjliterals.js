let [id, name] = [10, 'Vipul'];
let licenseKey = 'LIC123456789';

class Customer {
    format() {
        return this.id + ', ' + this.name;
    }
}

let customer = {
    id,
    name,
    [`_Prop${licenseKey}`]: 100,
    work() {
        return 'SUCCESS'
    },
    __proto__: new Customer()
};

console.log(customer instanceof Customer);
console.log(customer.format());
console.log(customer.work());
console.log(customer._PropLIC123456789);