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

//contactアイコン
$(".follow_icon").hover(
  function () {
    $(this).addClass(
      "animate__animated animate__heartBeat animate__slow animate__infinite	infinite"
    );
  },
  function () {
    $(this).removeClass(
      "animate__animated animate__heartBeat animate__slow animate__infinite	infinite"
    );
  }
);
