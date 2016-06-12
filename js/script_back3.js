$(document).ready(function() {
  console.log('loaded');

  const PLAYERS = ['face','butt'];
  const MIN_PLAYS_FOR_WIN = 2;

  let currPlayer = 0;
  let totalPlays = 0;

  let board = [
    [], // col0: add value of what class is added each time a column is clicked
    [], // col1
    [], // col2
    [], // col3
    [], // col4
    [], // col5
    []  // col6
  ];

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
        $(`#cell${row}${col}`).find('div').addClass( PLAYERS[ value ] )
      })
    })
  }

  let col0 = board[0];
  let col1 = board[1];
  let col2 = board[2];
  let col3 = board[3];

  let colCheck = board[$(this)];


  function testWin() {
    var win0=3, len=board.length, r=0, c=0, dr=0, dl=0;
    for(var i=0;i<len;i++){
      for(var j=0;j<len;j++){
        (board[j][i]===0) ? c++ : c=0;
        (board[i][j]===0) ? r++ : r=0;
        if(board[i][j]===0 && i<len-win0+1){ dr=0; dl=0;
          for(var z=0;z<win0;z++){
            (board[i+z][j+z]===0) ? dr++ : dr=0;
            (board[i+z][j-z]===0) ? dl++ : dl=0;
          }
        }
        if(c===win0 || r===win0 || dr===win0 || dl===win0){ alert("Zero wins!"); return true;}
      } r=0;
    }

    var win1=3, len=board.length, r=0, c=0, dr=0, dl=0;
    for(var i=0;i<len;i++){
      for(var j=0;j<len;j++){
        (board[j][i]===1) ? c++ : c=0;
        (board[i][j]===1) ? r++ : r=0;
        if(board[i][j]===1 && i<len-win1+1){ dr=0; dl=0;
          for(var z=0;z<win1;z++){
            (board[i+z][j+z]===1) ? dr++ : dr=0;
            (board[i+z][j-z]===1) ? dl++ : dl=0;
          }
        }
        if(c===win1 || r===win1 || dr===win1 || dl===win1){ alert("One wins!"); return true;}
      } r=0;
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

    console.log(board);
    console.log('totalPlays' + totalPlays);
    console.log('currPlayer' + currPlayer);
    // console.log(counter);

  });

  // need to change code to reset game
  // $('button').on('click', function(event) {
  //   $('.circle').removeClass('blue black');
  // });

});

// Major help rewriting to get chips to stack from bottom up from Jason
// two-dimensional array recommened by Bobby King;
// ibid supplied counter code on slack
// Cyrus helped with parseInt and data-col
// click and unbind help from: https://css-tricks.com/snippets/jquery/click-once-and-unbind

// *Lots of research generally on MDN, jQuery, stackoverflow, codeacademy & W3Schools
// *Tons of help from classmates on too many issues to list

// Initial help with repeat sequence -- not used
// http://stackoverflow.com/questions/15688193/how-to-find-3-or-more-consecutive-characters
// http://stackoverflow.com/questions/6176684/how-to-determine-if-a-string-contains-a-sequence-of-repeated-letters

  // function ubind(){
  //   if(col0.length > 2) {
  //     $('table').unbind('click');
  //     console.log('column 0 ' + col0);
  //   };
  // };



// beautiful and elegant code from:
// http://stackoverflow.com/questions/21011011/multi-dimensional-array-check-for-diagonal-consecutive-values
// Going to try to rewrite this, but it all came from link above. Sadly, it removed a couple days of my work, but I wasn't going to figure the diagnols out on my own, and this was the only code I could find that gave me a reasonable/understandable hint.
  // function testWin() {
  //   var win0=3, len=board.length, r=0, c=0, dr=0, dl=0;
  //   for(var i=0;i<len;i++){
  //     for(var j=0;j<len;j++){
  //       (board[j][i]===0) ? c++ : c=0;
  //       (board[i][j]===0) ? r++ : r=0;
  //       if(board[i][j]===0 && i<len-win0+1){ dr=0; dl=0;
  //         for(var z=0;z<win0;z++){
  //           (board[i+z][j+z]===0) ? dr++ : dr=0;
  //           (board[i+z][j-z]===0) ? dl++ : dl=0;
  //         }
  //       }
  //       if(c===win0 || r===win0 || dr===win0 || dl===win0){ alert("Zero wins!"); return true;}
  //     } r=0;
  //   }

  //   var win1=3, len=board.length, r=0, c=0, dr=0, dl=0;
  //   for(var i=0;i<len;i++){
  //     for(var j=0;j<len;j++){
  //       (board[j][i]===1) ? c++ : c=0;
  //       (board[i][j]===1) ? r++ : r=0;
  //       if(board[i][j]===1 && i<len-win1+1){ dr=0; dl=0;
  //         for(var z=0;z<win1;z++){
  //           (board[i+z][j+z]===1) ? dr++ : dr=0;
  //           (board[i+z][j-z]===1) ? dl++ : dl=0;
  //         }
  //       }
  //       if(c===win1 || r===win1 || dr===win1 || dl===win1){ alert("One wins!"); return true;}
  //     } r=0;
  //   }

  // }



