import { ObjectFormatter } from './formatutils';

const COL_SEPARATOR = ',';

class Customer {
    constructor(id, name, address, credit, status) {
        [this.id, this.name, this.address, this.credit, this.status] = arguments;
    }

    format() {
        return ObjectFormatter.format(this);
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
