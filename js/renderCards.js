'use strict'
class CardContent{
    constructor (imgUrl,title,descr,hrefVk, hrefYT, parent, numberContent) {
        this.imgUrl= imgUrl;
        this.title = title;
        this.descr = descr;
        this.hrefVk = hrefVk;
        this.hrefYT = hrefYT;
        this.parent= parent;
        this.numberContent = numberContent
    }
    render(){
        
        document.querySelector(this.parent).insertAdjacentHTML('beforeEnd',
        `<article class="informationLine_content" id="content-${this.numberContent}">
            <img src="${this.imgUrl}" alt="t${this.title}" class="informationLine_img">
            <div class="informationLine__text-conteiner">
                <button id='link-modalWindow' class="informationLine-text">
                    <h2 class="informationLine_title">${this.title}</h2>
                    <p class="informationLine_description ">${this.descr}</p>
                </button>
            </div>
            <div class="informationLine_content--links">
                    <a href="${this.hrefVk}" id="linkVk"></a>
                    <a href="${this.hrefYT}" id="linkYouTube"></a>
                </div>
        </article>`)
    }
}

let itemCard = new CardContent("https://i.ytimg.com/vi/f7n4crJL2dQ/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB3t_AfcM-ACaPm_60ikDQ5S02oHg",
    `Любимое место новичков в Escape from Tarkov`,
    'Ржачные моменты со стрима',
    "https://vk.com/ylus_stream",
    "https://www.youtube.com/watch?v=f7n4crJL2dQ&t=1s",
    '.informationLine_contentBox', 2)

itemCard.render()

let itemCard2 = new CardContent('https://i.ytimg.com/vi/wCZYqw7eKG4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRg3v-Tp9Kp55YPgKxaxggESU1zw',
    'Тарковский аттракцион 🤣', '',
    "https://vk.com/ylus_stream",
    "https://www.youtube.com/watch?v=wCZYqw7eKG4",
    '.informationLine_contentBox',3)

itemCard2.render()
const content3 = document.querySelector('#content-3');
const descrCard = content3.querySelector('.informationLine_description')
if(descrCard.textContent.trim() === ''){
    descrCard.remove();
    const titleCard = content3.querySelector('.informationLine_title');
    titleCard.style.marginTop ='9px'
}


let itemCard4 = new CardContent('https://i.ytimg.com/vi/wfBorRwYyTA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTY5A7p_2G9zQ72biRyT25OHEL6A',
    'Как я убивал других стримеров в Escape from Tarkov', 'Выпуск №2',
    "https://vk.com/video-227014211_456239017",
    "https://www.youtube.com/watch?v=wfBorRwYyTA",
    '.informationLine_contentBox',4)
itemCard4.render();