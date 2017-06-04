import { ObjectFormatter } from './formatutils';
import { Order } from './order';

const COL_SEPARATOR = ',';
const ORDERS_SYMBOL = Symbol('Orders Symbol');

class Customer {
    constructor(id, name, address, credit, status) {
        [this.id, this.name, this.address, this.credit, this.status] = arguments;

        this[ORDERS_SYMBOL]= [];
    }

    format() {
        return ObjectFormatter.format(this);
    }

    addOrder(order) {
        if(order) {
            this[ORDERS_SYMBOL].push(order);
        }
    }

    getOrders() {
        return this[ORDERS_SYMBOL];
    }

    *[Symbol.iterator]() {
        for(let order of this[ORDERS_SYMBOL]) {
            yield order;
        }
    }

    static CreateCustomer(csvString) {
        let customer = null;
        
        if(csvString) {
            let splittedCsvString = csvString.split(COL_SEPARATOR);

            customer = new Customer(...splittedCsvString);
        }

        return customer;
    }
}

export { Customer };
