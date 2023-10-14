class OrdersFormPage{
  constructor(){
    this.textAttribute = Aliases.Orders.OrderForm.Group.label7;
    this.cancelButton = Aliases.Orders.OrderForm.ButtonCancel;
    this.products = Aliases.Orders.OrderForm.Group.ProductNames;
    this.upDownEdit = Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit;
    this.price = Aliases.Orders.OrderForm.Group.Price;
    this.discount = Aliases.Orders.OrderForm.Group.Discount;
    this.total = Aliases.Orders.OrderForm.Group.groupBox1.Total;
    this.okButton = Aliases.Orders.OrderForm.ButtonOK;
    this.date = Aliases.Orders.OrderForm.Group.Date;
    this.name = Aliases.Orders.OrderForm.Group.Customer;
    this.street = Aliases.Orders.OrderForm.Group.Street;
    this.city = Aliases.Orders.OrderForm.Group.City;
    this.state = Aliases.Orders.OrderForm.Group.State;
  }
  
  setStreet(street){
    this.street.setText(street);
  }
  
  setName(name){
    this.name.setText(name);
  }
  
  setState(state){
    this.state.setText(state);
  }
  
  setCity(city){
    this.city.setText(city);
  }
  
  assertCannotInputChar(key){
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Quantity.UpDownEdit, "wText", cmpNotEqual, key);
  }
  
  tryInputInvalidDate(date){
    this.date.Click(23, 11);
    this.date.Keys(date);
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Date, "wDate", cmpNotEqual, date);
  }
  
  clickOk(){
    this.okButton.ClickButton();
  }
  
  setPrice(price){
    this.price.setText(price);
  }
  
  setDiscount(discount){
    this.discount.setText(discount);
  }
  
  setTotal(total){
    this.total.setText(total)
  }
  
  assertPrice(price){
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Price, "wText", cmpNotEqual, price);
  }
  
  assertDiscount(discount){
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Discount, "wText", cmpNotEqual, discount);
  }
  
  assertTotal(total){
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.groupBox1.Total, "wText", cmpNotEqual, total, false);
  }
  
  tryInputChar(key){
    this.upDownEdit.Click(14, 8);
    this.upDownEdit.Keys(key);
  }
  
  assertOpen(){
    aqObject.CheckProperty(this.textAttribute, "WndCaption", cmpEqual, "Customer Name:");
  }
  
  clickCancel(){
    this.cancelButton.ClickButton();
  }
  
  assertQuantity(number){
    aqObject.CheckProperty(this.products, "wItemCount", cmpEqual, number);
  }
}
var ordersFormPage = new OrdersFormPage();
module.exports.ordersFormPage = ordersFormPage;