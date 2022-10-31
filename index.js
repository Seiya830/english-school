const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-nav");

ham.addEventListener("click", function () {
  ham.classList.toggle("active");
  nav.classList.toggle("active");
});

// スライドショーで画像を入れ替える処理
// const img_src = ["./img/language-school-834138_1280.jpg", "./img/students-702094_1280.jpg", "./img/woman-4702060_1280.jpg"];

let num = -1;

function slide_time() {
  if(num === 2) {
    num = 0;
  } else {
    num ++;
  }
  //src属性をimg_srcに変更
  document.getElementById("slide-img").src = img_src[num];
}
//1.3秒後に表示切り替え
// setInterval(slide_time, 1300);

$(function() {
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});