function openOrder() {
    TestedApps.Orders.Run();
}

function addOrderKeyword() {
    KeywordTests.addOrder.Run();
}

function closeOrder(save) {
    TestedApps.Orders.Close();
    if(save){
      Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
    }
    
}

function printHelloWorld() {
  Log.Message("Hello World!");
}

function deleteOrder()
{
  let orders = Aliases.Orders;
  let listView = orders.MainForm.OrdersView;
  listView.ClickItemR(0, "MyMoney");
  listView.PopupMenu.Click("Delete order");
  let btnYes = orders.dlgConfirmation.btnYes;
  btnYes.ClickButton();
}

function addOrder()
{
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  mainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let textBox = orderForm.Group.Customer;
  textBox.SetText("Otari Katsadze");
  let okButton = orderForm.ButtonOK;
  okButton.ClickButton();
}

function checkOrder(orderIndex)
{
  let ordersList = Aliases.Orders.MainForm.OrdersView;
  ordersList.DblClickItem(orderIndex, "MyMoney");
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Customer, "wText", cmpEqual, "Otari Katsadze");
  let okButton = Aliases.Orders.OrderForm.ButtonOK;
  okButton.ClickButton();
}

module.exports.openOrder = openOrder
module.exports.addOrderKeyword = addOrderKeyword
module.exports.closeOrder = closeOrder
module.exports.printHelloWorld = printHelloWorld
module.exports.deleteOrder = deleteOrder
module.exports.addOrder = addOrder
module.exports.checkOrder = checkOrder