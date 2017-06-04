import { InternetCustomer } from './internetcustomer';
import { Customer } from './customer';
import { Order } from './order';
import { DataProcessor } from './arrowfunctions';
import { HeavyWorker, HeavyWorker2 } from './withoutpromises';
import * as PromiseWorkers from './withpromises';
import './enhancedobjliterals';
import './proxies';

let customer = new InternetCustomer(
    10, 'Northwind Traders', 'Bangalore', 12000, true, 'http://blogs.msdn.con/nwt');

console.log(customer.format());
console.log(customer instanceof InternetCustomer);

let customerCsvString = '10,NorthWind,NCR,34930,true';
let anotherCustomer = Customer.CreateCustomer(customerCsvString);

anotherCustomer.addOrder(new Order(1, new Date(), 12000));
anotherCustomer.addOrder(new Order(2, new Date(), 12000));
anotherCustomer.addOrder(new Order(3, new Date(), 22000));
anotherCustomer.addOrder(new Order(4, new Date(), 32000));

for (let order of anotherCustomer.getOrders()) {
    console.log(order.toString());
}

console.info('Iterating Customer Object Directly...');

for (let order of anotherCustomer) {
    console.log(order.toString());
}

console.log(anotherCustomer.format());

console.log(JSON.stringify(anotherCustomer));

let dataProcessor = new DataProcessor();
let result = dataProcessor.process(
    (a, b) => a + b,
    function (a, b) {
        return a - b;
    },
    (a, b) => {
        console.log('Arrow functions with Block...');
        return a * b;
    }
);

console.log(result());

let worker1 = new HeavyWorker();
let worker2 = new HeavyWorker2();

//Mutiple Async Ops, but sequentially
//UI wait time is more in this scenario
// worker1.doHeavyWork(10, (result) => {
//     console.log('Worker 1 completed...' + JSON.stringify(result));

//     worker2.doHeavyWork(300, (result) => {
//         console.log('Worker 2 completed...' + JSON.stringify(result));
//     });
// });

let heavyWorker1 = new PromiseWorkers.HeavyWorker();
let heavyWorker2 = new PromiseWorkers.HeavyWorker2();

//Waits for all promises to complete
Promise.all(
    [
        heavyWorker1.process(200),
        heavyWorker2.process(200)
    ]).then(
    data => console.log('Both successfully completed...' + JSON.stringify(data)),
    error => console.log('One of the workers failed...' + JSON.stringify(error)));