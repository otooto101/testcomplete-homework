
class OrdersPage{
  constructor(){
    this.toolbar = Aliases.Orders.MainForm.Toolbar;
    this.mainMenuButton = Aliases.Orders.MainForm.MainMenu;
    this.ordersList = Aliases.Orders.MainForm.OrdersView;
  }
  
  clickWithToolbar(){
    this.toolbar.ClickItem(4, false);
  }
  
  clickOrderWithMenu(){
    this.mainMenuButton.Click("Orders|New order...");
  }
  
  clickFirstOrder(){
    this.ordersList.DblClickItem(0, "MyMoney");
  }
  
}

var ordersPage = new OrdersPage();
module.exports.ordersPage = ordersPage;