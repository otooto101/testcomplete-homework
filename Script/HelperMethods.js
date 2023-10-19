function concatenateNumbers(var1, var2){
  
    if ((typeof var1 !== 'number' || typeof var2 !== 'number' || var1 < 100 || var1 >= 1000 || var2 < 100 || var2 >= 1000)) {
    
    Log.Warning("Error")
    return null;
  }

  var digitalSum1 = Array.from(String(var1), Number).reduce((acc, digit) => acc + digit, 0);
  var digitalSum2 = Array.from(String(var2), Number).reduce((acc, digit) => acc + digit, 0);

  const concatenatedResult = String(digitalSum1) + String(digitalSum2);

  return concatenatedResult;
}

function getCurrentDateFormatted(format) {
  var currentDate = aqDateTime.Today();
  
  var day = aqDateTime.GetDay(currentDate);
  var month = aqDateTime.GetMonth(currentDate);
  var year = aqDateTime.GetYear(currentDate);
  
  return day + "/" + month + "/" + year;
}

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.concatenateNumbers = concatenateNumbers;
module.exports.getCurrentDateFormatted = getCurrentDateFormatted;
module.exports.getRandomNumber = getRandomNumber;
