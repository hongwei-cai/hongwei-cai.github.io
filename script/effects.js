/* Module: 
Basic effects for page
__________________________________________________ */

$(document).ready(function() {

  $('#nav-top').hide().slideDown();
  var $li = $('.nav-link');
  $li.hide().each(function(index) {
    $(this).delay(700 * index).fadeIn(700);
  });

  // $li.on('click', function() {
  //   $(this).fadeOut(700);
  // });
});


// $(function() {
//   $("img").unveil(200);
// });
// $("img").unveil(200, function() {
// $(this).load(function() {
//   this.style.opacity = 1;
// });
// });

// $(document).ready(function(){
// $('a[href^="#"]').on('click',function (e) {
//     e.preventDefault();

//     var target = this.hash;
//     var $target = $(target);

//     $('html, body').stop().animate({
//         'scrollTop': $target.offset().top
//     }, 400, 'swing', function () {
//         window.location.hash = target;
//     });
//   });
// });