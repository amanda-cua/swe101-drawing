// Please declare functions and variables above where they are used.

  var myOutputValue;
  var lineCounter = 0;
  var counter = 0;
  var currentGameMode = 'waiting for game mode';
  console.log ('waitingforgamemode')

var main = function (input) {
//selecting game mode
  if (currentGameMode == 'waiting for game mode') {
    currentGameMode = input;
    myOutputValue = "Hello.  You have selected " + input + " game mode. <br>";
    console.log ('select')
  }

  else if (currentGameMode == 'numbers') {
      while (counter < input) {
        myOutputValue = myOutputValue + '☺️' ;
        counter = counter + 1;}
        console.log ('numberss')
  }

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

  else if  (currentGameMode == 'triangle') {
    while (lineCounter < input) {
      var columnCounter = 0;
      while (columnCounter <= lineCounter) {
        myOutputValue = myOutputValue + '☺️';
        columnCounter = columnCounter + 1;
      }
      // start a new line
      myOutputValue = myOutputValue + '<br>';
      lineCounter = lineCounter + 1;
      console.log ('triangless')
    }
    return myOutputValue;
    }



  return myOutputValue;
}




