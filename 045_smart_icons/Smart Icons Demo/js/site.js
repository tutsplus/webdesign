'use strict';

/**
 * Force reload of iframe to update size
 *(Kickstarter iframe embed content does static sizing on load that breaks fitvids during resize)
 */
function resizeKickstarterVideo() {
  var iframeSrc = $('#kickstarter-video').attr('src');
  $('#kickstarter-video').attr('src', iframeSrc);
}


/**
 * Set height of the projects on homepage
 */
function fillHeight(elem) {
  var windowH = $(window).height();
  var wrapperH = $(elem).height();

  if (windowH > wrapperH) {
    $(elem).css({
      'height': ($(window).height() / 1.2) + 'px'
    });
  }
}


$(document).ready(function () {
  //$('.vid-responsive').fitVids();

  $('.svg-inject').svgInject();

  prettyPrint();

  fillHeight('.hero');

  $('.hero a[href^="#"]').on('click', function (e) {
    // console.log('scroll');
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500); // Opera and IE require "html" animated
  });

  $('.hero a[href^="#"]').on('click', function (e) {
    // console.log('scroll');
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500); // Opera and IE require "html" animated
  });

  $('article.has-link').click(function(){ //link that is clicked on
    //var currentId = $(this).attr('id'); //capture id of clicked item
    var url = $(this).find('.btn').attr('href');
    window.location = url; //load new page
    return false;
  });
});

$(window).load(function () {
  $('body').addClass('all-loaded');
});

var _debounceResizeTimer;
$(window).resize(function () {
  fillHeight('.hero');

  // Since this is reloading an iframe src, try to only call it once when the user stops resizing
  clearTimeout(_debounceResizeTimer);
  _debounceResizeTimer = setTimeout(resizeKickstarterVideo, 250);
});


