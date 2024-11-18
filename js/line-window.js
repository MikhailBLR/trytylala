'use strick'

const btnNext = document.querySelector('#btn-next');
const btnBack = document.querySelector('#btn-back');
const contents = document.querySelectorAll('.informationLine_content');
const buttons = document.querySelectorAll('.informationLine__btn');
const aLinks = document.querySelectorAll('.informationLine-text')
const images = document.querySelectorAll('.informationLine_img')

let currentIndex = 0;


contents.forEach(function(content,i){
    if (i > 0) {
        content.style.transform = `translateX(${100 * i}%`;
    }

});

function showContent(index) {
    contents.forEach((content, i) => {
        content.style.transform = `translateX(${(i - index) * 100}%)`;
    });

    buttons.forEach((button, i) => {
        button.classList.toggle('informationLine__btn--active', i === index);
    });
}

btnNext.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % contents.length;
    showContent(currentIndex);
});

btnBack.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + contents.length) % contents.length;
    showContent(currentIndex);
});

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        currentIndex = index;
        showContent(currentIndex);
    });
});











// function callBack (entries){
//     if(!entries[0].isIntersecting){
//         document.querySelector('.header').classList.add('header-fix');
//     }else{
//         document.querySelector('.header').classList.remove('header-fix');
//     }
// }

// const observ = new IntersectionObserver(callBack,{threshold: 0.3,});
// observ.observe(document.querySelector('#informationLine'));

function callSection(entr, observe){
    if(entr[0].isIntersecting){
    entr[0].target.classList.remove('section__hidden')
    observe.unobserve(entr[0].target)
    }
}

const allSectiion = document.querySelectorAll('.section');
const observeSection = new IntersectionObserver(callSection,{threshold: 0.15});

allSectiion.forEach((section)=>{
    observeSection.observe(section);
    section.classList.add('section__hidden')
})