$(document).ready(function () {
 
  var menuBurger = $('.menu-burger');
 
  menuBurger.on('click', function () {
    $('body').toggleClass('overflow--hidden');
    $('.nav').toggleClass('nav--visible');
  });

})