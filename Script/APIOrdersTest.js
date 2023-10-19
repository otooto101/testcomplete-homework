var CommonSteps = require("CommonSteps");
CommonSteps.openOrders();
var ordersPage = require("OrdersPage");
var ordersFormPage = require("OrdersFormPage");
var DataForForm = require("DataForForm");
var HelperMethods = require("HelperMethods");

function APIOrdersTest(){
  ordersPage.ordersPage.clickWithToolbar();
  ordersFormPage.ordersFormPage.fillCardNum(DataForForm.getAPIKey());
  ordersFormPage.ordersFormPage.setName(DataForForm.getAPIActivity());
  ordersFormPage.ordersFormPage.clickOk();
  CommonSteps.closeOrders(true);
}