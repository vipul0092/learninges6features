function processOrder(order) {
    console.log('Order processing started...');
    console.log('Order data: ' + JSON.stringify(order));

    if (order.amount >= 1000) {
        console.log('Order Status : PROCESSED');
    } else {
        console.log('Order Status : ON_HOLD');
    }

    return true;
}

function doWork(orderId) {
    let order = {
        id: orderId,
        date: new Date(),
        amount: 2300
    };

    processOrder(order);
}

Array.prototype.isExist = function (item) {
    let status = false;

    if (item) {
        for (let index in this) {
            if (this[index] === item) {
                status = true;
                break;
            }
        }
    }

    return status;
}

processOrder = new Proxy(processOrder, {
    apply: (target, currenthandler, args) => {
        let alreadyProcessedOrders = ['ORD1', 'ORD2', 'ORD3'];

        console.log('Proxying Started ...');

        let orderId = args[0].id;

        if (alreadyProcessedOrders.isExist(orderId)) {
            console.log('Order processing Already completed...');

            return true;
        } else {
            console.log('Order processing was not completed earlier...');

            let status = target(...args);

            return status;
        }
    }
});

doWork('ORD1');
