
$(function() {
  // スライダー
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    cssEase: 'linear'
  });

  // スティッキーヘッダー
  var $win = $(window);
  var $fv = $('.fv');
  var $section__wrapper__1 = $('.section__wrapper__1');
  var fvHeight = $fv.outerHeight();
  var fixedClass = 'fixed';

  $win.on('load scroll', function(){
    var value = $(this).scrollTop();
    if ($win.width() > 768) {
      if (value > fvHeight) {
        $section__wrapper__1.addClass(fixedClass);
      } else {
        $section__wrapper__1.removeClass(fixedClass);
      }
    }
  });

  // ハンバーガーメニュー
  $('.burger-btn').on('click',function() {
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
  });
});