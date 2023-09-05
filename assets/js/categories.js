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


//横スクロール
const slideContainer = document.querySelector('.slide-container');
let isDragging = false;
let startX;
let scrollLeft;

slideContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slideContainer.offsetLeft;
    scrollLeft = slideContainer.scrollLeft;
});

slideContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

slideContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

slideContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slideContainer.offsetLeft;
    const walk = (x - startX) * 1; // スクロール速度調整
    slideContainer.scrollLeft = scrollLeft - walk;
});


