var CommonSteps = require("CommonSteps");
CommonSteps.openOrders();
var ordersFormPage = require("OrdersFormPage");
var ordersPage = require("OrdersPage");

function addNewOrderTest(){
  ordersPage.ordersPage.clickWithToolbar();
  ordersFormPage.ordersFormPage.assertOpen();
  ordersFormPage.ordersFormPage.clickCancel();
  ordersPage.ordersPage.clickOrderWithMenu();
  ordersFormPage.ordersFormPage.assertOpen();
  ordersFormPage.ordersFormPage.clickCancel();
  CommonSteps.closeOrders(false);
}