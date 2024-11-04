'use strick'

const btnNext = document.querySelector('#btn-next');
const btnBack = document.querySelector('#btn-back');
const contents = document.querySelectorAll('.informationLine_content');
const buttons = document.querySelectorAll('.informationLine__btn');
const aLinks = document.querySelectorAll('.informationLine-text')
const images = document.querySelectorAll('.informationLine_img')

let currentIndex = 0;

function showContent(index){
    contents.forEach((content, i) =>{
        content.classList.toggle('informationLine_content--active', i === index);
    })
    buttons.forEach((button, i)=>{
        button.classList.toggle('informationLine__btn--active', i === index);
    })
};



btnNext.addEventListener('click',function(){
    currentIndex = (currentIndex + 1) % contents.length
    showContent(currentIndex)
});

btnBack.addEventListener('click', function(){
    currentIndex = (currentIndex - 1 + contents.length) % contents.length
    showContent(currentIndex)
});

buttons.forEach((but, index) => {
    but.addEventListener('click', function(){
        currentIndex = index;
        showContent(currentIndex);
    });
});


// const container = document.querySelector('.informationLine_contentBox');
// container.addEventListener('click', function(event) {
//     const img = event.target.closest('.informationLine_img');
    
//     if (img) {
//         const article = img.closest('article');
//         const link = sarticle.querySelector('a');

//         if (link) {
//             // Переходим по ссылке
//             window.location.href = link.href;
//         }
//     }
// });