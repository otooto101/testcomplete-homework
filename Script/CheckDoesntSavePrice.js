var CommonSteps = require("CommonSteps");
CommonSteps.openOrders();
var ordersPage = require("OrdersPage");
var ordersFormPage = require("OrdersFormPage");
var DataForForm = require("DataForForm");

function checkDoesntSavePrice(){
  ordersPage.ordersPage.clickOrderWithMenu();
  ordersFormPage.ordersFormPage.setPrice(DataForForm.price);
  ordersFormPage.ordersFormPage.setDiscount(DataForForm.discount);
  ordersFormPage.ordersFormPage.setTotal(DataForForm.total);
  ordersFormPage.ordersFormPage.clickOk();
  ordersPage.ordersPage.clickFirstOrder();
  ordersFormPage.ordersFormPage.assertPrice(DataForForm.price);
  ordersFormPage.ordersFormPage.assertDiscount(DataForForm.discount);
  ordersFormPage.ordersFormPage.assertTotal(DataForForm.total);
  ordersFormPage.ordersFormPage.clickCancel();
  CommonSteps.closeOrders(true);
}