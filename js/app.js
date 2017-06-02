import { InternetCustomer } from './internetcustomer';
import { Customer } from './customer';

let customer = new InternetCustomer(
    10, 'Northwind Traders', 'Bangalore', 12000, true, 'http://blogs.msdn.con/nwt');

console.log(customer.format());
console.log(customer instanceof InternetCustomer);

let customerCsvString = '10,NorthWind,NCR,34930,true';
let anotherCustomer = Customer.CreateCustomer(customerCsvString);

console.log(anotherCustomer.format());
