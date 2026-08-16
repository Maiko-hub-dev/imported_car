import "../sass/style.scss";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

const swiper = new Swiper(".swiper", {
  loop: true, // ループ
  speed: 3200, // 少しゆっくり(デフォルトは300)
  mousewheel: true, // マウスホイールでスライド
  direction: "vertical", // 縦方向
  autoplay: { // 自動再生
    delay: 1200, // 1秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// service__title が画面内に入ったことを検知します。
const serviceTitle = document.querySelector('.service__title');

if (serviceTitle) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(serviceTitle);
}

// ドロワーメニュー
function closeDrawer() {
  $(".js-drawer").removeClass("active");
  $(".header").removeClass("active");
  $(".sp-nav").removeClass("active");
}

$(".js-drawer").on("click", function () {
  $(this).toggleClass("active");
  $(".header").toggleClass("active");
  $(".sp-nav").toggleClass("active");
});

$(".sp-nav a").on("click", function () {
  closeDrawer();
  $(".js-hamberger").remove("active");
});
$(".sp-nav").on("click", function () {
  closeDrawer();
  $(".js-hamberger").toggleClass("active");
});


  // ドロワー内リンクを押したら閉じる
  $(".sp-nav").on("click",function () {
  closeDrawer();
  $(".js-hamberger").removeClass("active");
});

$(".js-hamberger").on("click", function () {
    $(this).toggleClass("active");
    $(".sp-nav").toggleClass("active");
});
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

checkMedia(mediaQuery);

mediaQuery.addEventListener("change", checkMedia);



//. ここまで

});
