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

// Vue
const myAllSkills = [
  {
    id: 1,
    icon: "./icon/html-5.svg",
    skillname: "HTML5",
    text: "小学生の時に個人サイトを作ったりしていました。簡単なものはフルスクラッチで書けます。テンプレートも必要な箇所を確認し、カスタマイズできます。",
  },
  {
    id: 2,
    icon: "./icon/css-3.svg",
    skillname: "CSS3",
    text: "小学生の時に個人サイトを作ったりしていました。簡単なものはフルスクラッチで書けます。テンプレートも必要な箇所を確認し、カスタマイズできます。",
  },
];

const app = Vue.createApp({
  data() {
    return {
      myAllSkills: myAllSkills,
    };
  },
}).mount("#myskill");
