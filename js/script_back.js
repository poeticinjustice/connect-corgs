$(document).ready(function() {
  console.log('loaded');

  const PLAYER_COLORS = ['black','blue']
  const MIN_PLAYS_FOR_WIN = 7

  let currPlayer = 0;
  let totalPlays = 0;

  let counter = 0;
  let board = [
    [], // col0: add value of what class is added each time a column is clicked
    [], // col1
    [], // col2
    [], // col3
    [], // col4
    [], // col5
    []  // col6
  ]


function changeTurns(){
  if(counter % 2 === 0) {
    board[col].push('black');
    board[0].addClass('black');
    //$(this).unbind('click');
  } else {
    board[col].push('blue');
    $(this).removeClass('black').addClass('blue');
    //$(this).unbind('click');
  }
}

// this is a sloppy way to update the html, but it works
function updateHTML(){
  board.forEach(function(cols,col){
    cols.forEach(function(value,row){
      // name your ids with a string
      $(`#${row}${col}`).find('div').addClass( PLAYER_COLORS[ value ] )
    })
  })
}
function checkForWin(row,col){
  // die quickly if we haven't played enough rounds
  if (totalPlays < MIN_PLAYS_FOR_WIN) return false;

  // check for a win


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
  updateHTML()
  checkForWin();


  console.log(board);
  // console.log(counter);

})


$('button').on('click', function(event) {
  $('.circle').removeClass('blue black');
});


// $('.circle').on('click',function(e) {
//   // var target = e.target;
//   var col = parseInt($(this).parent().data('col')); //Thanks for helping with this Cyrus!
//   if(counter % 2 === 0) {
//     board[col].push('black');
//     $(this).removeClass('blue').addClass('black');
//     $(this).unbind('click');
//   } else {
//     board[col].push('blue');
//     $(this).removeClass('black').addClass('blue');
//     $(this).unbind('click');
//   }
//   console.log(board);
//   // console.log(counter);
//   counter++
// })






});


// two-dimensional array recommened by Bobby King;
// ibid supplied counter code on slack
// Cyrus helped with parseInt and data-col
// click and unbind help from: https://css-tricks.com/snippets/jquery/click-once-and-unbind


// *Lots of research generally on MDN, jQuery, stackoverflow, codeacademy & W3Schools
// *Tons of help from classmates on too many issues to list
