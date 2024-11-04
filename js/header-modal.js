'use strict'

const buttonMenu = document.querySelector('.header__burger-bro');
const modalCloseBtn = document.querySelector('.header__modal_closeBtn');
const headerModal = document.querySelector('.header__modal');
const tabItem = document.querySelectorAll('.header__modal_item');
const tabContent = document.querySelectorAll('.header__modal_second_conteiner');

tabItem.forEach((element)=>{
    element.addEventListener('click', open);
});

function open (evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('header__modal_item--active')
    });
    
    tabContent.forEach(function(item){
        item.classList.remove('header__modal_second_conteiner--active')
    });

    tabTarget.classList.add('header__modal_item--active');
    document.querySelector(`#${button}`).classList.add('header__modal_second_conteiner--active');

}

buttonMenu.addEventListener('click',()=>{
    headerModal.classList.toggle('header__modal--active');
});

modalCloseBtn.addEventListener('click', closeWindow);

document.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        closeWindow()
    }
});


function closeWindow(){
    headerModal.classList.remove('header__modal--active');
};
