var CommonSteps = require("CommonSteps");
CommonSteps.openOrders();
var ordersPage = require("OrdersPage");
var ordersFormPage = require("OrdersFormPage");
var DataForForm = require("DataForForm");

function checkProductsQuantityTest(){
  ordersPage.ordersPage.clickWithToolbar();
  ordersFormPage.ordersFormPage.assertQuantity(DataForForm.productsNumber);
  ordersFormPage.ordersFormPage.clickCancel();
  CommonSteps.closeOrders(false);
}