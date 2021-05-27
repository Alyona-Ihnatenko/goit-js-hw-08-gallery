import images from "/gallery-items.js";

const gallery=document.querySelector('.js-gallery');
const lightImage=document.querySelector('.lightbox__image');
const modalLightBox=document.querySelector('.js-lightbox');
const CloseBtn=document.querySelector("button[data-action='close-lightbox']");
const overlay=document.querySelector('.lightbox__overlay')

const imagesSrc = [];
images.forEach(el => {
imagesSrc.push(el.original);
});

  gallery.insertAdjacentHTML('afterbegin',createGallery(images));


  function createGallery(images){
      return images.map(({preview, original,description})=>{
          return `<li class="gallery__item" >
          <a class="gallery__link " 
           href="${original}">
          <img class="gallery__image" src="${preview}"
           alt="${description}"
           data-source="${original}">
          </a>
          </li>`;
      }).join("");
  }
   
gallery.addEventListener('click',OnClickImg);
CloseBtn.addEventListener('click',onClickCloseModal);
overlay.addEventListener('click', onClickOverlayClose);
window.addEventListener('keydown', onClickEscClose);

function OnClickImg(event){
  event.preventDefault();
  if(event.target.nodeName!=='IMG'){
    return;
  }
const imgEl=event.target;
 lightImage.src=imgEl.dataset.source;
 lightImage.alt=imgEl.alt;
 modalLightBox.classList.add('is-open');

}
function onClickCloseModal(){
  modalLightBox.classList.remove('is-open');


}
function onClickOverlayClose(e) {
    if (e.target === e.currentTarget) {
        onClickCloseModal();
    }
    lightImage.src = "";
    lightImage.alt = "";
}

function onClickEscClose(e) {
    if (e.key === 'Escape') {
        onClickCloseModal();
    }
}

document.addEventListener('keydown', (e) => {

    let newIndex = imagesSrc.indexOf(lightImage.src);
    if (e.key === 'ArrowLeft') {
        newIndex -= 1;
        if (newIndex === -1) {
            newIndex = imagesSrc.length - 1;
        }
    } else if (e.key === 'ArrowRight') {
        newIndex += 1;
        if (newIndex === imagesSrc.length) {
            newIndex = 0;
        }
    }
    lightImage.src = imagesSrc[newIndex];
});