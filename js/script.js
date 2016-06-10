$(document).ready(function() {
console.log('loaded');

// var current = 0;

var counter = 0;
var board = [
  [], // col0: add value of what class is added each time a column is clicked
  [], // col1
  [], // col2
  [], // col3
  [], // col4
  [], // col5
  [] // col6
]

$('.circle').on('click',function(e) {
  // var target = e.target;
  var col = parseInt($(this).parent().data('col')); //Thanks for helping with this Cyrus!
  if(counter % 2 === 0) {
    $(board[col]).push('black');
    $(board[col]).removeClass('blue').addClass('black');
    $(this).unbind('click');
  } else {
    board[col].push('blue');
    $(this).removeClass('black').addClass('blue');
    $(this).unbind('click');
  }
  console.log(board);
  // console.log(counter);
  counter++
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
