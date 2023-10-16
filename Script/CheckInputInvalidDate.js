var CommonSteps = require("CommonSteps");
CommonSteps.openOrders();
var ordersPage = require("OrdersPage");
var ordersFormPage = require("OrdersFormPage");
var DataForForm = require("DataForForm");

function checkInputInvalidDate(){
  ordersPage.ordersPage.clickOrderWithMenu();
  ordersFormPage.ordersFormPage.tryInputInvalidDate(DataForForm.invalidDate);
  ordersFormPage.ordersFormPage.clickCancel();
  CommonSteps.closeOrders(false);
}