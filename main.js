"use strict";

$(function() {
  const $header = $(".header");


  window.addEventListener("scroll", () => {

    const scrollTop = $(window).scrollTop();


    if (scrollTop > 60) {

      if (!$header.hasClass("hide")) {
        $header.addClass("hide");
      }
    } else {

      if ($header.hasClass("hide")) {
        $header.removeClass("hide");
      }
    }
  });
});

$(function() {
var TopBtn = $('#PageTopBtn');
TopBtn.hide();
// スクロール位置が100でボタンを表示
$(window).scroll(function() {
if ($(this).scrollTop() > 100) {
TopBtn.fadeIn();
}
else {
TopBtn.fadeOut();
}
});
// ボタンを押下するとトップへ移動
TopBtn.click(function() {
$('body,html').animate({
scrollTop: 0
}, 300);
return false;
});
});
