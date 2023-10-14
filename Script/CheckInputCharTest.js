var CommonSteps = require("CommonSteps");
CommonSteps.openOrders();
var ordersPage = require("OrdersPage");
var ordersFormPage = require("OrdersFormPage");
var DataForForm = require("DataForForm");

function checkInputCharTest(){
  ordersPage.ordersPage.clickOrderWithMenu();
  ordersFormPage.ordersFormPage.tryInputChar(DataForForm.inputChar);
  ordersFormPage.ordersFormPage.assertCannotInputChar(DataForForm.inputChar);
  ordersFormPage.ordersFormPage.clickCancel();
  CommonSteps.closeOrders(false);
}