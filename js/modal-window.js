'use strict'

const modal = document.querySelector('.modalWindow');
const modalBody = modal.querySelector('.modalWindow__body');
const btnClose = modal.querySelector('#modal-btn');
const btnVk = modal.querySelector('#btn-vk');
const btnYouTube = modal.querySelector('#btn-youtube');

const containerBox = document.querySelector('.informationLine_contentBox');
containerBox.addEventListener('click', function(event){
    const image = event.target.closest('.informationLine_img');
    if (image) {
        openModal(image);
    }
});


const textBoxes = document.querySelectorAll('.informationLine-text');
textBoxes.forEach(textBox => {
    textBox.addEventListener('click', function(event) {
        const article = event.target.closest('article');
        if (article) {
            openModal(article);  
        }
    });
});

btnClose.addEventListener('click', closeModal);
// modal.addEventListener('click', closeModal);

function openModal(element) {
    modal.classList.add('modalWindow--active');
    document.querySelector('.informationLine_btn-nextContainer').style.display = 'none';

    const article = element.closest('article');

    if (article) {
        const linkYouTube = article.querySelector('#linkYouTube');
        const linkVk = article.querySelector('#linkVk'); 
        
        if (linkYouTube) {
            btnYouTube.href = linkYouTube.href; 
        } 

        if (linkVk) {
            btnVk.href = linkVk.href; 
        } 
    }
}

function closeModal() {
    modal.classList.remove('modalWindow--active');
    document.querySelector('.informationLine_btn-nextContainer').style.display = 'flex';
}




document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        closeModal()
    }
});