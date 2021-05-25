
const images= [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

//   const refs = {
//   galleryList: document.querySelector('ul.gallery'),
//   lightbox: document.querySelector('.lightbox'),
//   btn: document.querySelector('[data-action="close-lightbox"]')
// };

const gallery=document.querySelector('.js-gallery');
const lightImage=document.querySelector('.lightbox__image');
const modalLightBox=document.querySelector('.js-lightbox');
  gallery.insertAdjacentHTML('afterbegin',createGallery(images));
const CloseBtn=document.querySelector("button[data-action='close-lightbox']");


  function createGallery(images){
      return images.map(({preview, original,description})=>{
          return `<li class="gallery__item" ><a class="gallery__link " href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"></a></li>`;
      }).join("");
  }
   
gallery.addEventListener('click',OnClickImg);
CloseBtn.addEventListener('click',onClickCloseModal);

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

// const createImage = (item, parent) => {
//   const { preview, original, description } = item;
//   const img = document.createElement('img');
  
//   img.classList.add('gallery__image');
//   img.dataset.source = original;
//   img.src = preview;
//   img.alt = description;
  
//   parent.appendChild(img);
// };

// const createLink = (item, parent) => {
//   const { original } = item;
//   const a = document.createElement('a');
  
//   a.classList.add('gallery__link');
//   a.href = original;
  
//   createImage(item, a);
  
//   parent.appendChild(a);
// };

// const createItem = (item) => {
//   const li = document.createElement('li');
//   li.classList.add('gallery__item');
  
//   createLink(item, li);
  
//   return li;
// };

// const renderListItems = (arr) => {
//   const items = arr.map( (item) => createItem(item));
  
//   refs.galleryList.append(...items);
// };

// renderListItems(images);




// function onClickHandler(e) {
//   e.preventDefault();
  
//   if(e.target.nodeName === 'IMG') {
//     refs.lightbox.classList.add('is-open');
//     refs.lightbox.querySelector('.lightbox__image').src = e.target.src;
//     refs.lightbox.querySelector('.lightbox__image').alt = e.target.alt;
//   }
// }

// function onCloseHandler(e) {
//   if(e.target.nodeName === "I" || e.target.nodeName === "BUTTON") {
//     refs.lightbox.classList.remove('is-open');
//   }
// }

// refs.galleryList.addEventListener('click', onClickHandler);
// refs.btn.addEventListener('click', onCloseHandler);
  
   
