import "../sass/style.scss";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import './jquery.inview.min.js';

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  window.addEventListener("load", () => {
  const loading = document.querySelector(".js-loading");
  const firstView = document.querySelector(".first-view");

  setTimeout(() => {
    loading.classList.add("is-hidden");
    firstView.classList.add("is-visible");
  }, 1500);
    document.body.classList.add("is-loaded");

  let imgHeight = $('.js-first-view').outerHeight();
  let topBtn = $('.pagetop');
  const footer = $('.footer');
  topBtn.hide();

  // ボタンの表示設定
  $(window).on('scroll resize', function (){
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const footerTop = footer.offset().top;
    
    const overlap = scrollTop + windowHeight - footerTop;


  // ===== ボタンの表示・非表示 =====
  if (scrollTop > imgHeight) {
    topBtn.fadeIn();
  } else {
    topBtn.fadeOut();
  }
  // ===== footerに重ならないようにする =====
  if (overlap > 0) {
      topBtn.css({
          bottom: overlap + 20
        });
      } else {
        topBtn.css({
          bottom: 20
        });
  } 
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });


//. swiper FV
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade', 
    autoplay: {
    duration: 10000,
    delay: 4000, // 4秒後に次のスライドへ
    disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
  },
  speed: 2000, //追加
});
// Swiperの初期化
const swiper2 = new Swiper(".swiper2", {
  loop: true, // ループ有効
  speed: 500, // ループの時間
  // allowTouchMove: false, 
    navigation: {
    nextEl: ".campaign-button-next",
    prevEl: ".campaign-button-prev",
  },
  slidesPerView: 'auto', // ← SP基準をここに置く
  spaceBetween: 24,
  autoplay: {
      delay: 3000, // 途切れなくループ
      disableOnInteraction: false,
  },
  breakpoints: {
      767: {
          slidesPerView: 'auto', // PC表示
          spaceBetween: 40,
      }
  },
  // freeMode: false,
  // freeModeMomentum: false,
});

});
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


const speed = 700;

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (!entry.isIntersecting) return;

    const target = $(entry.target);

    const color = target.find(".info-colorbox");

    // VoiceとPriceを取得
    const image = target.find(
      ".info-color-image, picture img"
    );

    // 初期状態
    color.stop(true, true).css({
      width: 0,
      right: 0,
      left: "auto",
    });

    image.css({
      opacity: 0,
    });


    // 緑幕を広げる
    color.animate(
      {
        width: "100%",
      },
      speed,
      function () {
        // 画像表示
        image.animate(
          {
            opacity: 1,
          },
          200
        );

        // 幕を左側へ移動
        color.css({
          left: 0,
          right: "auto",
        });


        // 幕を消す
        color.animate(
          {
            width: 0,
          },
          speed
        );
      }
    );

    // 一度だけ発火
    observer.unobserve(entry.target);
  });

});


// 監視開始
$(".js-color-slide").each(function () {

  const color = $(this).find(".info-colorbox");

  const image = $(this).find(
    ".info-color-image, .price__images img"
  );


  // 初期状態
  image.css({
    opacity: 0,
  });


  color.css({
    width: 0,
    right: 0,
    left: "auto",
  });


  observer.observe(this);

});



$(".js-hamberger").on("click", function () {
    $(this).toggleClass("active");
    $(".sp-nav").toggleClass("active");
});
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//. loading
 //logoの表示
window.addEventListener("load", async () =>{
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト

  const splashFV = document.getElementById("splash");
  const splash = document.querySelector(".c-loading");
  const logo = document.querySelector("#splash_logo");
  const firstView = document.querySelector(".first-view");
  // const spNav = document.querySelector(".sp-nav");
  // ① ロゴ表示時間
  await wait(2500);

  // ② ロゴ消えるアニメ用の間
  splash.classList.add("is-hidden");

  await wait(1000); // ←ここがあなたの欲しい1秒

  // ③ パズル開始
  splash.classList.add("is-slide");
    await wait(3000);
  //. ④ アニメーションが終わった後にheaderの位置を調整する
  splashFV.classList.add("is-hidden");

  // ③ 余韻（ここが“ゆっくり感”の正体）
  await wait(1500);

  // ④ メインビュー表示
  firstView.classList.add("is-visible");
  // header表示

});
//. headerを1024から表示する
const mediaQuery = window.matchMedia("(min-width: 1024px)");
const headerNav = document.querySelector(".header__nav");
const hamburger = document.querySelector(".header__btns");

function checkMedia(e) {
  if (e.matches) {
    headerNav.classList.add("is-active");
    hamburger.style.display = "none";
  } else {
    headerNav.classList.remove("is-active");
    hamburger.style.display = "block";
  }
}

checkMedia(mediaQuery);

mediaQuery.addEventListener("change", checkMedia);
//. ここまで

});
