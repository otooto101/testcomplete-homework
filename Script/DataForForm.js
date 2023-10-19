var productsNumber = 3;
var inputChar = "a";
var price = "20";
var discount = "20";
var total = "20";
var invalidDate = "2005-04-06";
var dataForAssertName = "sdf";
var street =  "თბილისი, ნუცუბიძის 72, 0177";
var streetAssert = "Street:";
var editedStreet = "Street";
var cardsQuantity = 3;

function getAPIKey(){
  var address="http://www.boredapi.com/api/activity?";
  var aqHttpRequest=aqHttp.CreateGetRequest(address);
  var response=aqHttpRequest.Send();  
  var jsonResponse = JSON.parse(response); 
  var key = jsonResponse.key;

  return key;
}

function getAPIActivity(){
  var address="https://www.boredapi.com/api/activity?type=music";
  var aqHttpRequest=aqHttp.CreateGetRequest(address);
  var response=aqHttpRequest.Send();
  var jsonResponse = JSON.parse(response); 
  var activity = jsonResponse.activity;

  return activity;
}


module.exports.cardsQuantity = cardsQuantity;
module.exports.getAPIActivity = getAPIActivity;
module.exports.getAPIKey = getAPIKey;
module.exports.editedStreet = editedStreet;
module.exports.invalidDate = invalidDate;
module.exports.price = price;
module.exports.discount = discount;
module.exports.total = total;
module.exports.productsNumber = productsNumber;
module.exports.inputChar = inputChar;
module.exports.dataForAssertName = dataForAssertName;
module.exports.street = street;
module.exports.streetAssert = streetAssert;