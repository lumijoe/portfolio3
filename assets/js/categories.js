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


//横スクロールはドラッグされているかのマウスのフラグ設定と、x軸座標位置が重要
//マウス取扱
/* mousedown=押された瞬間grabbing
 * mouseup=押されて離れた瞬間nograbbing
 * mouseleave=要素からマウスが離れた時nohoverの終了
 * mousemove=マウスが移動した時（hoverしていてもしていなくても）
*/ 
//htmlの.slide-containerクラスの要素を取得しslideContainerに代入する
const slideContainer = document.querySelector('.slide-container');
//マウスがドラッグ中かを判定するフラグ（初期状態ではドラッグ中ではないのでfalse)
let isDragging = false;
//マウスドラッグ開始時のマウス座標、スクロール位置用の変数を準備
let startX;
let scrollLeft;
//マウスが押された瞬間イベントを追加
slideContainer.addEventListener('mousedown', (e) => {
    //ドラッグ中フラグをtrueにする
    isDragging = true;
    //（マウスが押された位置x）-（左端xの位置）を取得
    startX = e.pageX - slideContainer.offsetLeft;
    //左にスクロールした位置を取得（左30=30,右30=-30)
    scrollLeft = slideContainer.scrollLeft;
});
//マウスが離された瞬間はドラッグはしていないのでfalseフラグを設定
slideContainer.addEventListener('mouseup', () => {
    isDragging = false;
});
//マウスが要素から離れたらドラッグはしていないのでfalseフラグを設定
slideContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});
//マウスが移動した時、イベントリスナーを追加
slideContainer.addEventListener('mousemove', (e) => {
    //ドラッグ中でない場合は次の処理はスキップ（ドラッグしたら次の処理を実行）
    if (!isDragging) return;
    //イベントのデフォルト動作を無効にする
    e.preventDefault();
    //（マウスが押された位置x）-（左端xの位置）を取得＝移動した位置を取得
    const x = e.pageX - slideContainer.offsetLeft;
    //ドラッグ開始位置から移動量を計算、スクロール位置に反映
    const walk = (x - startX) * 1; // スクロール速度調整
    //マウスの移動方向に合わせて、要素内のコンテンツをスクロールさせる
    slideContainer.scrollLeft = scrollLeft - walk;
});


