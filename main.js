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

// Vue myskill
const myAllSkills = [
  {
    id: 1,
    icon: "./icon/html-5.svg",
    skillname: "HTML5",
    text: "小学生の時に個人サイトを作ったりしていました。簡単なものはフルスクラッチで書けます。テンプレートでは必要な箇所を確認し、カスタマイズできます。",
  },
  {
    id: 2,
    icon: "./icon/css-3.svg",
    skillname: "CSS3",
    text: "簡単なものはフルスクラッチで書けます。Bootstrapなど必要なライブラリをカスタマイズして使用できます。Sassを使用しています。",
  },
  {
    id: 3,
    icon: "./icon/javascript.svg",
    skillname: "JavaScript",
    text: "簡単な機能なら実装できます。JQueryでアニメーションなどを書けます。APIが実装できます。",
  },
  {
    id: 4,
    icon: "./icon/vue.svg",
    skillname: "Vue.js",
    text: "データバインディング、イベントハンドリング、コンポーネントを実装できます。",
  },
  {
    id: 5,
    icon: "./icon/react.svg",
    skillname: "React.js",
    text: "勉強中です。簡単なメモアプリなら作成できます。",
  },
];

const app1 = Vue.createApp({
  data() {
    return {
      myAllSkills: myAllSkills,
    };
  },
}).mount("#myskill");

// Vue myworks

const myAllWorks = [
  {
    id: 1,
    url: "#",
    image: "site mockup.png",
    title: "Maple Street",
  },
];

const app2 = Vue.createApp({
  data() {
    return {
      myAllWorks: myAllWorks,
    };
  },
}).mount("#mywork");
