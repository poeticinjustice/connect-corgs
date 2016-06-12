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
      let col3 = board[3]

  function checkForWin(row,col){
    // die quickly if we haven't played enough rounds
    if (totalPlays < MIN_PLAYS_FOR_WIN) {
      return false;
    } else {  // check for a win

        let cond0 = col0.toString();
        let cond1 = col1.toString();
        let cond2 = col2.toString();
        let cond3 = col3.toString();

        if(cond0.includes('0,0,0,0')) {
          console.log('Zero Wins! ' + cond0);
        } else if(board[0].toString().includes('1,1,1,1')){
          console.log('One Wins ' + cond0);
        } else {
          console.log('keep playing' + cond0)
        }
    }
  }

  // function checkForWin(row,col){
  //   // die quickly if we haven't played enough rounds
  //   if (totalPlays < MIN_PLAYS_FOR_WIN) {
  //     return false;
  //   } else {  // check for a win

  //       checkRepeat = function (str) {
  //         var repeats = /(.)\1{3}/;
  //         return repeats.test(str)
  //       };

  //       if(checkRepeat(col1)) {
  //         console.log('Has Repeat!');
  //         console.log(col1)
  //       } else {
  //         console.log('no repeat')
  //         console.log(col1)
  //       }
  //   }
  // }



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
    checkForWin();
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
