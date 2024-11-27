'use strict'

const itemsCyber = document.querySelectorAll('.main__content_item-cyber');
const itemsClassic = document.querySelectorAll('.main__content_item-classic');
const btnBuy = document.querySelectorAll('.item__button-buy');
const btnMores = document.querySelectorAll('.item__button-more');
const backBtn = document.querySelector('.main__market-back');
const cardsConteiner = document.querySelectorAll('.main__card_market');
const multiplyCards = document.querySelectorAll('#multiply-card');

btnMores.forEach((btnMore)=>{
    btnMore.addEventListener('click', function(event){
        event.preventDefault();
        multiply(event.target.id);
    })
});

multiplyCards.forEach((card)=>{
    card.addEventListener('click', function(event){
        const imgItem = event.target;
        if(imgItem.classList.contains('main__item_img')){
            console.log(imgItem.alt)
            multiply(imgItem.alt)
            document.querySelectorAll('.main__item_img').forEach((img)=>img.style.cursor='default');
        }
    card.removeEventListener('click',multiply)
    })
})



function multiply (id){
    if(id === 'cyber'){
        itemsClassic.forEach((itemClassic)=>{
            itemClassic.classList.remove(`main__content_item-classic--active`);
        })
        itemsCyber.forEach((itemCyber)=>{
            itemCyber.classList.add(`main__content_item-${id}--active`)
        })
    }else{
        itemsCyber.forEach((itemCyber)=>{
            itemCyber.classList.remove(`main__content_item-cyber--active`);
        })
        itemsClassic.forEach((itemClassic)=>{
            itemClassic.classList.add(`main__content_item-${id}--active`)
        })
    }
    if(window.innerWidth <= 1200){
        cardsConteiner.forEach((item)=>{ item.style.width = '70%' });
    }else{
        cardsConteiner.forEach((item)=>{ item.style.width = '30%' });
    }
    
    backBtn.style.display = 'block';
    btnMores.forEach((btn)=>{btn.style.display = 'none'});
    btnBuy.forEach((btn)=>{btn.style.display = 'block'});

}

backBtn.addEventListener('click', resetView);

document.addEventListener('keydown', function(ev){
    if(ev.key === 'Escape'){
        resetView()
    }
})

function resetView() {

    backBtn.style.display = 'none';

    btnMores.forEach((btn) => {
        btn.style.display = 'block';
    });

    btnBuy.forEach((btn) => {
        btn.style.display = 'none';
    });

    itemsCyber.forEach((itemCyber, i) => {
        itemCyber.classList.remove('main__content_item-cyber--active');
    });

    itemsClassic.forEach((itemClassic, i) => {
        itemClassic.classList.remove('main__content_item-classic--active');
    });

    itemsClassic[0].classList.add('main__content_item-classic--active');
    itemsCyber[0].classList.add('main__content_item-cyber--active');

    cardsConteiner.forEach((item) => {
        item.style.width = '90%';
    });
    document.querySelectorAll('.main__item_img').forEach((img)=>img.style.cursor='pointer');
}

