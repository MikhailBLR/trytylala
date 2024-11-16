'use strict'


function styleOpacity(e,opac) {
    if(e.target.classList.contains('header__item_link-1761px')){
        const link = e.target;
        const innerLinks = document.querySelectorAll('.header__item_link-1761px');
        
        innerLinks.forEach((item) => {
            if(item !== link) {
                item.style.transition = 'opacity 0.4s'
                item.style.opacity = this;
            }
        });
    }
};

const items =document.querySelector('.header__items-1761px');
items.addEventListener('mouseover',styleOpacity.bind(0.5));
items.addEventListener('mouseout', styleOpacity.bind(1));

items.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('header__item_link-1761px')){
    const scrollElem = e.target.getAttribute('href');
    console.log(scrollElem)
    document.querySelector(scrollElem).scrollIntoView({behavior:"smooth"})
    }
})