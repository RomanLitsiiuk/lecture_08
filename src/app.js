window.getWinner = function (gameBoard) {
  var i;
  var j;
  var RowArray = [];
  var DiagonalArray = [];
  var BackDiagonalArray = [];
  var Winner = null;

  var isWinnerX = function(element) {
    return element === 'X';
  };

  var isWinnerO = function(element) {
    return element === 'O';
  };

  var checkWinner = function(array) {
    if (array.every(isWinnerX) && Winner === null) {
      alert('Winner X!');
      Winner = 'X';
    } else if (array.every(isWinnerO) && Winner === null) {
      alert('Winner O!');
      Winner = 'O';
    }
  };

  for (i = 0; i < gameBoard.length; i++) {
    checkWinner(gameBoard[i]);
  }

  for (j = 0; j < gameBoard.length; j++) {
    RowArray = [];
    for (i = 0; i < gameBoard.length; i++) {
      RowArray.push(gameBoard[i][j]);
    }
    checkWinner(RowArray);
  }

  for (i = 0, j = 0; i < gameBoard.length; i++, j++) {
    DiagonalArray.push(gameBoard[i][j]);
  }

  for (i = 0, j = gameBoard.length - 1; i < gameBoard.length; i++, j--) {
    BackDiagonalArray.push(gameBoard[i][j]);
  }

  checkWinner(DiagonalArray);
  checkWinner(BackDiagonalArray);

  return Winner;
};
