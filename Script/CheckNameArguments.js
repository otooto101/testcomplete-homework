var CommonSteps = require("CommonSteps");
CommonSteps.openOrders();
var ordersPage = require("OrdersPage");
var ordersFormPage = require("OrdersFormPage");
var DataForForm = require("DataForForm");

function checkNameArguments(){
  ordersPage.ordersPage.clickWithToolbar();
  ordersFormPage.ordersFormPage.checkCustomerElement(DataForForm.dataForAssertName);
  ordersFormPage.ordersFormPage.clickCancel();
  CommonSteps.closeOrders(false);
}