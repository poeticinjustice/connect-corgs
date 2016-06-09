$(document).ready(function() {
console.log('loaded');

// var played = .blue || .black
// var current = 0;
var counter = 0;

// $('table').click(function() {
//   counter ++;
// });

if ( counter % 2 === 0 ) {
  $('.circle').on('click', function(event) {
    counter++;
    $(this).removeClass('blue').addClass('black');
  })
} else {
  counter++;
  $('.circle').on('click', function(event) {
    $(this).removeClass('black').addClass('blue');
  });
};


// $('div').hasClass('black', function(ev){
//     $(this).on('click', function(event) {
//       $(this).removeClass('black').addClass('blue');
//   })
// })

// $('button').on('click', function(event) {
//   $('.circle').removeClass(played);
// });








});
