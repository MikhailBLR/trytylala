'use strict'

const itemsCyber = document.querySelectorAll('.main__content_item');
const itemsClassic = document.querySelectorAll('.main__content_item-classic');
const btnBuy = document.querySelectorAll('.item__button-buy');
const btnMores = document.querySelectorAll('.item__button-more');
const backBtn = document.querySelector('.main__market-back');

btnMores.forEach((btnMore)=>{
    btnMore.addEventListener('click', function(event){
        event.preventDefault();
        replaceCard(event.target.id);
    })
});



function replaceCard (id){
    if(id==='cyber'){
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
    document.querySelectorAll('.main__card_market').forEach((item)=>{ item.style.width = '30%' })
    backBtn.style.display = 'block';
    btnMores.forEach((btn)=>{btn.style.display = 'none'});
    btnBuy.forEach((btn)=>{btn.style.display = 'block'});

}

backBtn.addEventListener('click', resetView);


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

    document.querySelectorAll('.main__card_market').forEach((item) => {
        item.style.width = '90%';
    });
}
