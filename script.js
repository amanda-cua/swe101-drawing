// Please declare functions and variables above where they are used.
var main = function (input) {
  var myOutputValue = '';
  var lineCounter = 0;
  var emojiCounter = 1;

  while (lineCounter < input) {
    var columnCounter = 0;
  
    while (columnCounter < emojiCounter) {
      myOutputValue = myOutputValue + '☺️';
      columnCounter = columnCounter + 1;
  
    }

    // start a new line
    myOutputValue = myOutputValue + '<br>';
    emojiCounter = emojiCounter + 1;
    lineCounter = lineCounter + 1;
  }

  return myOutputValue;
};