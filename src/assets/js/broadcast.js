const boradcast = [
    {
        src: 'https://facecast.net/v/58dbd0',
        text: 'Донастройка системы поддержки экспорта: как противостоять замедлению глобальной торговли',
        href: '/',
        hrefText: 'Стеклянный зал',
        id: 1001
    },
    {
        src: 'https://www.youtube.com/embed/TSHEDUVOgcA',
        text: 'ТЕСТ ТЕС ТЕСТ ТЕСТ ТЕС ТЕСТ ТЕСТ ТЕС ТЕСТ ТЕСТ ТЕС ТЕСТ ТЕСТ ТЕСТ ТЕС ТЕСТ ТЕСТ ТЕСТ ТЕС ТЕСТ',
        href: '/',
        hrefText: 'Оловянный зал',
        id: 1002
    },
    {
        src: 'https://www.youtube.com/embed/WJLlkPvxY8g',
        text: 'ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2 ТЕСТ2',
        href: '/',
        hrefText: 'Деревянный зал',
        id: 1003
    }
]

const elementsBroadcast = document.querySelector('.broadcast__video-result')

class CardBroadcast {
    constructor(item, template) {
        this.src = item.src;
        this.text = item.text;
        this.href = item.href;
        this.hrefText = item.hrefText;
        this._template = template;

    }
    _getTemplate() {
        const element = document
            .querySelector(this._template)
            .content
            .cloneNode(true)
        return element;
    }
    createElement() {
        this._element = this._getTemplate();
        this._elementSrc = this._element.querySelector('.broadcast__video-player');
        this._elementText = this._element.querySelector('.broadcast__video-title');
        this._elementHref = this._element.querySelector('.broadcast__href');
        this._elementHrefText = this._element.querySelector('.broadcast__href');


        this._elementSrc.src = this.src
        this._elementText.textContent = this.text
        this._elementHref.src = this.href
        this._elementHrefText.textContent = this.hrefText
        console.log(this._element);
        return this._element;
    }
}

$('.broadcast__min-btn').on('click', function(e) {
    $('.broadcast__video').remove()
    const target = e.target
    console.log(target.parentNode);
    $('.broadcast__min-block').removeClass('min__block-active')
    $(target.parentNode).addClass('min__block-active')
    const targetId = target.id
    console.log(targetId);
    boradcast.forEach(item => {
        if(item.id == targetId) {
            addCardBroadcast(item, elementsBroadcast, '#element-template-broadcast')
        } 
    })
})
function addCardBroadcast(item ,elemList, elemTemplate) {
    console.log(item);
    const card = new CardBroadcast(item, elemTemplate);
    const cardElements = card.createElement();
    console.log(cardElements);
    elemList.prepend(cardElements);
}