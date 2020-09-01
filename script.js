

  var myOutputValue;
  var lineCounter = 0;
  var counter = 0;
  var currentGameMode = 'waiting for game mode';
  console.log ('waitingforgamemode')

var main = function (input) {
//selecting game mode
  if (currentGameMode == 'waiting for game mode') {
    currentGameMode = input;
    myOutputValue = 'You have chosen the ' + input + ' game mode.<br> Have fun! <br>';
  }
  //emoji numbers game mode (line of emojis based on input)
  else if (currentGameMode == 'numbers') {
      while (counter < input) {
        myOutputValue = myOutputValue + '☺️' ;
        counter = counter + 1;}
        console.log ('numberss')
  }
 //square game mode (squares are based on the dimensions of the input)
 // i messed something up pls dont select the squares mode
 else if (currentGameMode == 'square') {
  while (lineCounter < input) {
    var columnCounter = 0;
    while (columnCounter < input) {
      myOutputValue = myOutputValue + '☺️';
      columnCounter = columnCounter + 1;
    }
    myOutputValue = myOutputValue + '<br>';
    lineCounter = lineCounter + 1;
    console.log ('squaress')
}
}
//original triangle
  else if  (currentGameMode == 'triangle') {
    while (columnCounter < input) {
      var columnCounter = 0;
      while (columnCounter <= lineCounter) {
        myOutputValue = myOutputValue + '☺️';
        lineCounter = lineCounter + 1;
      }
      // start a new line
      myOutputValue = myOutputValue + '<br>';
      columnCounter = columnCounter + 1;
      console.log ('triangless')
    }
    return myOutputValue;
    }

  //coding attempt for upside down triangle

  else if (currentGameMode == 'upside down') {
    var myOutputValue = " ";
var main = function (input) {
 var lineCounter = input;
 var overallTriangle = " ";
 while (lineCounter > 0) {
   var line = " ";
   var columnCounter = lineCounter;
   while (columnCounter > 0) {
     line = line + "☺️";
     columnCounter--;
   }
   overallTriangle = overallTriangle + line + "<br>"
   lineCounter--;
 }
 return overallTriangle
 
  }
  
}
  return myOutputValue;
}

 




