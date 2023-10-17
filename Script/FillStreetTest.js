var CommonSteps = require("CommonSteps");
CommonSteps.openOrders();
var ordersPage = require("OrdersPage");
var ordersFormPage = require("OrdersFormPage");
var DataForForm = require("DataForForm");

function fillStreetTest(){
  ordersPage.ordersPage.clickWithToolbar();
  ordersFormPage.ordersFormPage.checkStreetText(DataForForm.streetAssert);
  ordersFormPage.ordersFormPage.setStreet(DataForForm.street);
  ordersFormPage.ordersFormPage.getTextAndFillCityZip();
  ordersFormPage.ordersFormPage.clickCancel();
  CommonSteps.closeOrders(false);
}