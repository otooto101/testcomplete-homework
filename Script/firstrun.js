var steps = require("steps")

function firstTest() { 
    steps.printHelloWorld();
    steps.openOrder();
    steps.addOrderKeyword();
    steps.closeOrder(true);
}

function secondTest() {
    steps.openOrder();
    let size = 2;

    for (var i = 0; i < size; i++) {
        steps.addOrder();
    }

    for (var i = 0; i < size; i++) {
        steps.checkOrder(i);
    }
    
    for (var i = 0; i < size; i++) {
        steps.deleteOrder();
    }

    closeOrder(true);
}