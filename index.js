// ハンバーガーメニュー
const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-nav");

ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
});

// スライドショーで画像を入れ替える処理
const img_src = ["./img/language-school-834138_1280.jpg", "./img/students-702094_1280.jpg", "./img/woman-4702060_1280.jpg"];

let num = -1;

function slide_time() {
  // 最後の画像(インデックス2)が表示されたら
  if(num === 2) {
  // 最初の画像を表示させる
    num = 0;
  } else {
  // 0か1の場合はnumに1を足して次の画像のインデックスを指定
    num ++;
  }
  // slide-imgを取得し、そのsrc属性をimg_srcに変更
  document.getElementById("slide-img").src = img_src[num];
}
//1.3秒後に表示切り替え
setInterval(slide_time, 1300);

// フェードインアニメーション
$(function() {
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
    // inview_reが表示されると、is-showが追加
      $(this).stop().addClass("is-show");
    }
  });
});

// ズームインアニメーション
function zoomAnime() {
  // ズームインのきっかけのクラス名と動きのクラス名の設定
  $('.zoomInTrigger').each(function() {
  // ズームインさせたい要素の縦位置を取得
  const elemPos = $(this).offset().top;
  // スクロールバーの位置を取得
  const scroll = $(window).scrollTop();
  // ウィンドウの高さを取得
  const windowHeight =$(window).height();

if (scroll >= elemPos - windowHeight) {
  // 画面内に入ったらzoomInというクラスを追加
  $(this).addClass('zoomIn');
    }
  })
};

// 画面をスクロールした際に動かす処理
$(window).scroll(function (){
  zoomAnime();
});