window.getWinner = function (matrix) {
  var RowArray =[];
  var DiagonalArray =[];
  var BackDiagonalArray =[];

  var isWinnerX = function(element) {
    return element === 'X';
  };

  var isWinnerO = function(element) {
    return element === 'O';
  };

  var CheckWinner = function(array) {
    if (array.every(isWinnerX)) {
      alert('Winner X!');
    } else if (array.every(isWinnerO)){
      alert('Winner O!');
    }
  };

  for (i = 0; i < matrix.length; i++) {
    CheckWinner(matrix[i]);
  }

  for (j = 0; j < matrix.length; j++) {
    RowArray = [];
    for (i = 0; i < matrix.length; i++) {
      RowArray.push(matrix[i][j]);
    }
    CheckWinner(RowArray);
  }

  for (i = 0, j = 0; i < matrix.length; i++, j++) {
    DiagonalArray.push(matrix[i][j]);
  }

  for (i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
    BackDiagonalArray.push(matrix[i][j]);
  }

  CheckWinner(DiagonalArray);
  CheckWinner(BackDiagonalArray);
};
