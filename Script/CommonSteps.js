function openOrders(){
   TestedApps.Orders.Run(1, true); 
}

function closeOrders(save) {
    TestedApps.Orders.Close();
    if(save){
      Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
    }   
}

module.exports.openOrders = openOrders;
module.exports.closeOrders = closeOrders;

  