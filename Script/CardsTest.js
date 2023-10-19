var CommonSteps = require("CommonSteps");
CommonSteps.openOrders();
var ordersPage = require("OrdersPage");
var ordersFormPage = require("OrdersFormPage");
var DataForForm = require("DataForForm");
var HelperMethods = require("HelperMethods");

function cardsTest(){
  ordersPage.ordersPage.clickWithToolbar();
  ordersFormPage.ordersFormPage.checkRadioButton(DataForForm.cardsQuantity);
  ordersFormPage.ordersFormPage.fillCardNum(HelperMethods.getRandomNumber(1000000, 9999999));
  ordersFormPage.ordersFormPage.setStreet(DataForForm.street);
  ordersFormPage.ordersFormPage.clickOk();
  ordersPage.ordersPage.clickEditFirstOrder();
  ordersFormPage.ordersFormPage.setStreet(DataForForm.editedStreet);
  ordersFormPage.ordersFormPage.clickOk();
  ordersPage.ordersPage.clickFirstOrder();
  ordersFormPage.ordersFormPage.validateEditedOrder(DataForForm.editedStreet);
  ordersFormPage.ordersFormPage.clickCancel();
  CommonSteps.closeOrders(true);
}