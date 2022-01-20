//メニュースクロール
$('.header-menu a[href*="#"]').click(function () {
  var elmHash = $(this).attr("href");
  var pos = $(elmHash).offset().top - 200;
  $("body,html").animate({ scrollTop: pos }, 600);
});

//トップ
$(".top-wrapper").hover(
  function () {
    $(".top").fadeIn(400);
  },
  function () {
    $(".top").fadeOut(400);
  }
);
