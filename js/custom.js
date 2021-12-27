var btn = $('#backto-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// Sticky Menu Js
jQuery(window).scroll(function () {
      console.log(jQuery (window).scrollTop())
      if (jQuery(window).scrollTop() > 64) {
        jQuery('.header-menu').addClass('navbar-fixed');
      }
      if (jQuery(window).scrollTop() < 64) {
        jQuery('.header-menu').removeClass('navbar-fixed');
      }
});

// Blog-tab js
(function ($){
  $.fn.responsiveTabs = function() {
  this.addClass('responsive-tabs'),
  this.append($('<span class="dropdown-arrow"></span>')),

  this.on("click", "li > a.active, span.dropdown-arrow", function (){
      this.toggleClass('open');
    }.bind(this)), this.on("click", "li > a:not(.active)", function() {
          this.removeClass("open")
      }.bind(this)); 
  }
})(jQuery);

(function ($) {
    $('.nav-tabs').responsiveTabs();
  })(jQuery);

$(".navbar-toggler-icon").click(function(){
  $(".navbar-collapse").fadeIn();
});
$(".mobilenav-close").click(function(){
  $(".navbar-collapse").fadeOut();
});

