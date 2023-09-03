'use strict';

//ハンバーガーmenu
//navmenu2修正0902

const navBtn = document.querySelector('.navmenu');
const navPanel = document.getElementById('navpanel');
const navLine = document.querySelector('.navline');

navBtn.addEventListener('click', function() {
    navBtn.focus();
    navLine.classList.toggle('is-active2');
    if (navLine.classList.contains('is-active2')) {
        navPanel.classList.add('navpanel_open');
    } else {
        navPanel.classList.remove('navpanel_open');
    }
});
//アクセシビリティ
function toggleFocus(keyboard) {
    keyboard.style.backgroundColor =  keyboard.style.backgroundColor=="rgba(255, 255, 255, 0.3)" ? "inherit" : "rgba(255, 255, 255, 0.3)"; 
}


//スライド速度
document.addEventListener("DOMContentLoaded", function() {
    const slideDuration = 60000; // 表示時間（ms）10m
  
    const gallery = document.querySelector('.gallery-heroitems');
    const item = gallery.querySelectorAll('.gallery-heroitems-item');
    const currentImageIndex = 0;
  
    function showNextImage() {
        item[currentImageIndex].style.opacity = "1";
        currentImageIndex = (currentImageIndex + 1) % item.length;
        item[currentImageIndex].style.opacity = "1";
    }
  
    function startSlideShow() {
        setInterval(showNextImage, slideDuration);
    }
  
    // 最初の画像を表示開始
    item[currentImageIndex].style.opacity = "1";
  
    // アニメーションを開始
    startSlideShow();
  });
  

//アニメーションスクロール制御
//対象要素を取得
const fadeUpOne = document.querySelector('.fadeup-one');
const fadeUpTwo = document.querySelector('.fadeup-two');

/*スクロールを監視する関数を定義
function checkScroll() {
//スクロール位置を取得
const scrollPosition = window.scrollY;
//スクロール位置Yが700px以上になったらアニメーションを開始
if (scrollPosition >= 500) {
    fadeUpOne.classList.add('animate-fadeup-one');
    fadeUpTwo.classList.add('animate-fadeup-two');
}
}
//ウィンドウのスクロールイベントに監視イベント関数を組込
window.addEventListener('scroll', checkScroll);*/

//表示を監視する関数の定美
const observer = new IntersectionObserver((entires, observer) => {
    entires.forEach(entry => {
        if (entry.isIntersecting) {
            //要素が表示されたらアニメーションを開始する処理
            entry.target.classList.add('animate-fadeup-one');
        }
    });
});
//監視したい要素の指定
observer.observe(fadeUpOne);
observer.observe(fadeUpTwo);


