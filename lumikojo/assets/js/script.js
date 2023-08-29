'use strict';

//ハンバーガーmenu
//navmenu2
const navBtn2 = document.querySelector('.navmenu2');
const navPanel = document.getElementById('navpanel'); // id を指定する

navBtn2.addEventListener("click", function() {
if (navBtn2.classList.contains("is-active2")) {
      navBtn2.classList.remove("is-active2");
      navPanel.classList.remove('navpanel_open');
      navPanel.classList.add('navpanel_close');

  } else {
    navBtn2.classList.add("is-active2");
    navPanel.classList.add('navpanel_open');
    /*navPanel.classList.remove('navpanel');*/
  }

  const navLine = document.querySelector('.navline');
  navLine.classList.toggle("is-active2");
});



// 実装テスト、別ページやセクションへの遷移、ピックアップ、作品の追加
document.getElementById('test_js').addEventListener('click', function() {
    window.location.href = 'about.html';
});
document.getElementById('test_js2').addEventListener('click', function() {
    window.location.href = 'about.html#about_section2';
});

//document.getElementById('graphic').addEventListener('click', function() {
  //  window.location.href = 'graphic.html';
//});

document.getElementById('categories').addEventListener('click', function(categoriesEvent) {
    const clickedButton = categoriesEvent.target;
    if (clickedButton.tagName === 'BUTTON') {
        const selectedCategoriesId = clickedButton.id;
        switch (selectedCategoriesId) {
            case 'all':
                window.location.href = 'index.html#works_section';
                break;
            case 'web':
                window.location.href = 'web.html';
                break;
            case 'graphic':
                window.location.href = 'graphic.html';
                break;
            case 'contents':
                window.location.href = 'contents.html';
                break;
        }
    }
});

//works
////作品データJSON
const galleryData = [
    {imageSrc: './assets/images/img1a.jpg', category: 'graphic', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img2a.jpg', category: 'web', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img3a.jpg', category: 'graphic', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img4a.jpg', category: 'web', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img5a.jpg', category: 'graphic', title: 'タイトル', description: '概要'},
];

const galleryContainer = document.getElementById('works_gallery');

////funtcion(引数の設定、戻り値、表示)
function createGalleryItem(item) {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const image = document.createElement('img');
    image.src = item.imageSrc;
    galleryItem.appendChild(image);

    const title = document.createElement('h4');
    title.textContent = item.title;
    galleryItem.appendChild(title);

    const category = document.createElement('p');
    category.textContent = item.category;
    galleryItem.appendChild(category);

    const description = document.createElement('p');
    description.textContent = item.description;
    galleryItem.appendChild(description);

    return galleryItem;
}

galleryData.forEach(function(item) {
    const galleryItem = createGalleryItem(item);
    galleryContainer.appendChild(galleryItem);
});

////スライド速度
document.addEventListener("DOMContentLoaded", function() {
    const slideDuration = 30000; // 表示時間（ms）10m
  
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
  