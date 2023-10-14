var CommonSteps = require("CommonSteps");
CommonSteps.openOrders();
var ordersPage = require("OrdersPage");
var ordersFormPage = require("OrdersFormPage");
var DataForForm = require("DataForForm");

function secondTask(){
  ordersPage.ordersPage.clickOrderWithMenu();
  ordersFormPage.ordersFormPage.setName(Project.Variables.name);
  ordersFormPage.ordersFormPage.setStreet(Project.Variables.street);
  ordersFormPage.ordersFormPage.setState(Project.Variables.state);
  ordersFormPage.ordersFormPage.setCity(Project.Variables.city);
  ordersFormPage.ordersFormPage.clickCancel();
  CommonSteps.closeOrders(false);
}