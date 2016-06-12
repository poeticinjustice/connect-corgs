$(document).ready(function() {
  console.log('loaded');

  const PLAYERS = ['face','butt'];
  const MIN_PLAYS_FOR_WIN = 7;

  let currPlayer = 0;
  let totalPlays = 0;

  winMessage0 = 'You win, Corgi Face!';
  winMessage1 = 'You win, Corgi Butt!';

  let board = [
    [], // col0: add value of what class is added each time a column is clicked
    [], // col1
    [], // col2
    [], // col3
    [], // col4
    [], // col5
    []  // col6
  ];

  $('button').on('click', function() {
    location.reload();
  });

  function changeTurns(){
    if(totalPlays % 2 === 0) {
      currPlayer = 0;
    } else {
      currPlayer = 1;
    };
  };

  // this is a sloppy way to update the html, but it works
  function updateHTML(){
    board.forEach(function(cols,col){
      cols.forEach(function(value,row){
        // name your ids with a string
        $(`#cell${row}${col}`).find('div').addClass( PLAYERS[ value ] );
        $(`#cell${row}${col}`).find('div').addClass('animated slideInDown')
        $(`#cell${row}${col}`).find('div').addClass('animated zoomInDown');
      })
    })
  }

  function testWin() {
    let win0 = 4; // declare length for face to win
    let win1 = 4; // declare length for butt to win
    let bLength = board.length; // length of board for calculation
    let rowSeries = 0; // number of consecutive repetitions in row
    let colSeries = 0;  // number of consecutive repetitions in column
    let diagRightSeries = 0; // number of consecutive repetitions in right diagnal
    let diagLeftSeries = 0; // number of consecutive repetitions in left diagnal
    for( var i = 0; i < bLength; i++ ) { // begin calculating for win0
      for( var j = 0; j < bLength; j++ ) {
        // (board[j][i]===0) ? c++ : c=0;
        if( board[j][i] === 0 ) {
          colSeries++;
        } else {
          colSeries = false;
        }
        // (board[i][j]===0) ? r++ : r=0;
        if( board[i][j] === 0 ) {
          // console.log(board[i][j]);
          rowSeries++;
        } else {
          rowSeries = false;
        }
        if( board[i][j] === 0 && i < bLength - win0 + 1 ) {
          diagRightSeries = false;
          diagLeftSeries = false;
          for( var z = 0; z < win0; z++ ) {
            // (board[i+z][j+z]===0) ? dr++ : dr = 0;
            if( board[i+z][j+z] === 0 ) {
              diagRightSeries++;
            } else {
              diagRightSeries = false;
            }
            // (board[i+z][j-z]===0) ? dl++ : dl = 0;
            if( board[i+z][j-z] === 0 ) {
              diagLeftSeries++;
            } else {
              diagLeftSeries = false;
            }
          }
        }
        if(
          colSeries === win0 ||
          rowSeries === win0 ||
          diagRightSeries === win0 ||
          diagLeftSeries === win0 ) {
          alert (winMessage0);
          return true;
          // $('p').text(' ');
          // $('p').text('Corgi Face Wins')
        }
      } rowSeries = false;
    }

    for( var i = 0; i < bLength; i++ ) {
      for( var j = 0; j < bLength; j++ ) {
        // (board[j][i] === 1) ? c++ : c=0;
        if( board[j][i] === 1 ) {
          colSeries++;
        } else {
          colSeries = false;
        }
        //(board[i][j]===1) ? r++ : r=0;
        if( board[i][j] === 1 ) {
          rowSeries++
        } else {
          rowSeries = false;
        }
        if( board[i][j] === 1 && i < bLength-win1 + 1 ){
          diagRightSeries = false;
          diagLeftSeries = false;
          for( var z = 0; z < win1; z++){
            // (board[i+z][j+z]===1) ? dr++ : dr=0;
            if( board[i+z][j+z] === 1) {
              diagRightSeries++;
            } else {
              diagRightSeries = false;
            }
            // (board[i+z][j-z]===1) ? dl++ : dl=0;
            if (board[i+z][j-z] === 1) {
              diagLeftSeries++;
            } else {
              diagLeftSeries = false;
            }
          }
        }
        if(
          colSeries === win1 ||
          rowSeries === win1 ||
          diagRightSeries === win1 ||
          diagLeftSeries === win1 ) {
          alert(winMessage1);
          return true;
        }
      } rowSeries = false;
    }

  }


  $('table').on('click', '.col', function(event) {
    // var target = e.target;
    // debugger
    totalPlays++;
    let col = parseInt($(this).data('col')); //Thanks for helping with this Cyrus!
    // push the current player's number into the column array
    // record the position of the played token (one less than the length)
    let currentRow = board[col].push(currPlayer) - 1;

    // read the array and update the HTML
    updateHTML();
    testWin();
    changeTurns();

    if( currPlayer === 0 ) {
      var corg = 'face';
    } else {
      var corg = 'butt';
    }

    $('p').text(' ');
    $('p').text('Current Player: Corgi ' + corg);
    // console.log(counter);

  });

});

// Major help rewriting to get chips to stack from bottom up from Jason
// two-dimensional array recommened by Bobby King;
// ibid supplied counter code on slack
// Cyrus helped with parseInt and data-col
// click and unbind help from: https://css-tricks.com/snippets/jquery/click-once-and-unbind

// function ubind(){
//   if(col0.length > 2) {
//     $('table').unbind('click');
//     console.log('column 0 ' + col0);
//   };
// };

// *Lots of research generally on MDN, jQuery, stackoverflow, codeacademy & W3Schools
// *Tons of help from classmates on too many issues to list

// Check for wins code help from:
// http://stackoverflow.com/questions/21011011/multi-dimensional-array-check-for-diagonal-consecutive-values
