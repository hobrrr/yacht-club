let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');

lightThemeButton.onclick = function () {
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
    document.body.classList.remove('dark');
  };
  
  darkThemeButton.onclick = function () {
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
    document.body.classList.add('dark');
  };

let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

sansSerifFontButton.onclick = function () {
  sansSerifFontButton.classList.add('active');
  serifFontButton.classList.remove('active');
  document.body.classList.remove('serif');
 };

serifFontButton.onclick = function () {
  serifFontButton.classList.add('active');
  sansSerifFontButton.classList.remove('active');
  document.body.classList.add('serif');
 };

 let articleSections = document.querySelectorAll('.blog-article.short');

for (let articleSection of articleSections) {
  let moreButton = articleSection.querySelector('.more');
  moreButton.onclick = function () {
    articleSection.classList.remove('short');
  };
}

let tileViewButton = document.querySelector('.card-view-button-grid');
let standardViewButton = document.querySelector('.card-view-button-list');

let cardsList = document.querySelector('.cards');

tileViewButton.onclick = function () {
  cardsList.classList.remove('list');
  tileViewButton.classList.add('active');
  standardViewButton.classList.remove('active');
};

standardViewButton.onclick = function () {
  cardsList.classList.add('list');
  tileViewButton.classList.remove('active');
  standardViewButton.classList.add('active');
};

let mainImage = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');



for (let activeImage of previews) {
activeImage.onclick = function (evt) {
  evt.preventDefault();
  mainImage.src = activeImage.href;

  let currentActive = document.querySelector('.preview-list .active-item');
  currentActive.classList.remove('active-item');
  activeImage.classList.add('active-item');
};
}