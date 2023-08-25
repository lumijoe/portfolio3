'use strict';

//ハンバーガーmenu
//navmenu2
const navBtn2 = document.querySelector('.navmenu2');
navBtn2.addEventListener("click", function() {
    navBtn2.classList.toggle("is-active2");
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

document.getElementById('graphic').addEventListener('click', function() {
    window.location.href = 'graphic.html';
});

const galleryData = [
    {imageSrc: './assets/images/img1.jpg', category: 'graphic', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img2.jpg', category: 'web', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img3.jpg', category: 'graphic', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img4.jpg', category: 'web', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img5.jpg', category: 'graphic', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img6.jpg', category: 'space', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img7.jpg', category: 'contents', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img8.jpg', category: 'space', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img9.jpg', category: 'web', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img10.jpg', category: 'contents', title: 'タイトル', description: '概要'},
    {imageSrc: './assets/images/img11.jpg', category: 'contents', title: 'タイトル', description: '概要'},
];

const galleryContainer = document.getElementById('works_gallery');

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