import "../sass/style.scss";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  const swiper = new Swiper(".swiper", {
    loop: true, // ループ
    speed: 3200, // 少しゆっくり(デフォルトは300)
    mousewheel: true, // マウスホイールでスライド
    direction: "vertical", // 縦方向
    autoplay: {
      // 自動再生
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
  // タイトルを横からフェードイン
  const titles = document.querySelectorAll(".js-title");

  if (titles.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    titles.forEach((title) => {
      observer.observe(title);
    });
  }

  // 要素を上からふわっと
  // works__card フェードイン
  const fadeInItems = document.querySelectorAll(".fade-in, .fade-up, .fade-down");

  const fadeInObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  fadeInItems.forEach((item) => {
    fadeInObserver.observe(item);
  });

  // ファーストビュー画像 → タイトルの順番で表示
  // ファーストビュー画像 → タイトルの順番で表示
  const fadeUps = document.querySelectorAll(".main-fv .fade-up-img");

  fadeUps.forEach((image) => {
    // 画像を表示
    requestAnimationFrame(() => {
      image.classList.add("is-active");
    });

    // 画像のアニメーション終了後にタイトルを表示
    setTimeout(() => {
      const container = image.closest(".main-fv__container");

      if (!container) return;

      // main-fv-titleを表示
      const titleArea = container.querySelector(".main-fv-title");

      if (titleArea) {
        titleArea.classList.add("is-active");
      }

      // h1 → p の順番で表示
      const titles = container.querySelectorAll(".js-title-delay");

      titles.forEach((title, index) => {
        setTimeout(() => {
          title.classList.add("is-active");
        }, 300 * index);
      });
    }, 1000);
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
    $(".js-hamberger").removeClass("active");
  });
  $(".sp-nav").on("click", function () {
    closeDrawer();
    $(".js-hamberger").toggleClass("active");
  });

  // ドロワー内リンクを押したら閉じる
  $(".sp-nav").on("click", function () {
    closeDrawer();
    $(".js-hamberger").removeClass("active");
  });

  $(".js-hamberger").on("click", function () {
    $(this).toggleClass("active");
    $(".sp-nav").toggleClass("active");
    $(".js-header__link").toggleClass("active");
  });

  //. ここまで
});
