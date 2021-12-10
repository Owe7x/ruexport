const boradcast = [
    {
        src: 'https://facecast.net/v/izirzp?key=&chat_token=MytiVmNFd2xNM3psWjZRYTdWL3krdUlucUVRcVRVSDE3WEdkaVRTV0ZUVT1TSWIzZGFUVE1EemVVQkUz',
        text: 'НАГРАЖДЕНИЕ ПОБЕДИТЕЛЕЙ ВСЕРОССИЙСКОГО КОНКУРСА «ЭКСПОРТЕР ГОДА»',
        hrefText: 'Конгресс зал',
        id: 1001
    },
    {
        src: 'https://facecast.net/v/ktgbn7?key=&chat_token=My9BNHVrcVlpcU8xZXR4cCtGU2xPZ2lCckNqbkl5WWdOQm5oVnM1WDFiaz1aUEpQdTlHZHh0N0hKOVky',
        text: 'СЕССИЯ "ИНФРАСТРУКТУРНЫЕ ПРОЕКТЫ КАК ДРАЙВЕР РОСТА ВЫСОКОТЕХНОЛОГИЧНОГО ЭКСПОРТА"',
        hrefText: 'Пресс зал',
        id: 1002
    },
    {
        src: 'https://facecast.net/v/wp6a3v?key=&chat_token=cDlPUHFtQlhwUFRWcXFzelZ2V1F5SmtNZ2dKcGNHU1ZxQnR5N0ZNYjR5RT1zWXJqRUVoZUdjZG80ZW1i',
        text: 'СТРАТЕГИЧЕСКАЯ СЕССИЯ «РАЗВИТИЕ ЭКСПОРТА - РАЗВИТИЕ ТЕРРИТОРИИ»',
        hrefText: 'Зал Валдай',
        id: 1003
    },
    {
        src: 'https://facecast.net/v/mz030b?key=&chat_token=MHI2SGVsbDlqVDB1MnVDQXFNWExBcFpYSG1hNUZrb2cyNnpKaDk4d3hvYz1FSWN6Y0s0OW9nVnRpb1hV',
        text: 'СЕССИЯ «ОБЩЕМИРОВОЙ ТРЕНД НА ДЕКАРБОНИЗАЦИЮ КАК СТИМУЛ ДЛЯ ТРАНСФОРМАЦИИ ЭКСПОРТНО ОРИЕНТИРОВАННЫХ ПРОИЗВОДСТВ»',
        hrefText: 'Зал Селигер',
        id: 1004
    },
    {
        src: 'https://facecast.net/v/tn3fp0?key=&chat_token=MWIrZGJ2R2xKMTZiYm9mUXVtZVczK2RhbVl1eWJIaWU1Q2V6aWFqL1lGZz1kUXBRVEtjb3NUck1SbnRx',
        text: 'ВЕБИНАР ПО МЕРАМ ГОСПОДДЕРЖКИ',
        hrefText: 'Зал Байкал',
        id: 1005
    },
    {
        src: 'https://facecast.net/v/ex7ev4?key=&chat_token=aXFUaEpmQzJCaXd4Z3NHN3lPOU5kbnVGdWFUWndPZXFsT2xzY3hVS2ptcz1IT1Ixc05hQXVxenpTdFNV',
        text: 'МАСТЕР-КЛАСС-ТУРНИР ПО ПЕРЕГОВОРАМ ЭКСПОРТЕРОВ С ИМПОРТЕРАМИ (С ВУЗАМИ-ПАРТНЕРАМИ) ',
        hrefText: 'Зал Иртыш',
        id: 1006
    },
    {
        src: 'https://facecast.net/v/ayhieh?key=&chat_token=dnFvd0ZOQVdydkVRQmlKdGNIc2JGNVhxQVE0YWxVL2pXWHBLOUQ2bUlkYz1WWFFoVFpDdDU2NXFHWmZZ',
        text: 'СЕССИЯ "ЭКСПОРТ РОССИЙСКОГО ОБРАЗОВАНИЯ" ',
        hrefText: 'Зал Печора',
        id: 1007
    },
    {
        src: 'https://facecast.net/v/izirzp?key=&chat_token=MytiVmNFd2xNM3psWjZRYTdWL3krdUlucUVRcVRVSDE3WEdkaVRTV0ZUVT1TSWIzZGFUVE1EemVVQkUz',
        text: 'The broadcast will be available soon',
        hrefText: 'Congress Hall',
        id: 1008
    },
    {
        src: 'https://facecast.net/v/ktgbn7?key=&chat_token=My9BNHVrcVlpcU8xZXR4cCtGU2xPZ2lCckNqbkl5WWdOQm5oVnM1WDFiaz1aUEpQdTlHZHh0N0hKOVky',
        text: 'The broadcast will be available soon',
        hrefText: 'Press room',
        id: 1009
    },
    {
        src: 'https://facecast.net/v/wp6a3v?key=&chat_token=cDlPUHFtQlhwUFRWcXFzelZ2V1F5SmtNZ2dKcGNHU1ZxQnR5N0ZNYjR5RT1zWXJqRUVoZUdjZG80ZW1i',
        text: 'The broadcast will be available soon',
        hrefText: 'Valdai Hall',
        id: 1010
    },
    {
        src: 'https://facecast.net/v/mz030b?key=&chat_token=MHI2SGVsbDlqVDB1MnVDQXFNWExBcFpYSG1hNUZrb2cyNnpKaDk4d3hvYz1FSWN6Y0s0OW9nVnRpb1hV',
        text: 'The broadcast will be available soon',
        hrefText: 'Seliger Hall',
        id: 1011
    },
    {
        src: 'https://facecast.net/v/tn3fp0?key=&chat_token=MWIrZGJ2R2xKMTZiYm9mUXVtZVczK2RhbVl1eWJIaWU1Q2V6aWFqL1lGZz1kUXBRVEtjb3NUck1SbnRx',
        text: 'The broadcast will be available soon',
        hrefText: 'Baikal Hall',
        id: 1012
    },
    {
        src: 'https://facecast.net/v/ex7ev4?key=&chat_token=aXFUaEpmQzJCaXd4Z3NHN3lPOU5kbnVGdWFUWndPZXFsT2xzY3hVS2ptcz1IT1Ixc05hQXVxenpTdFNV',
        text: 'The broadcast will be available soon',
        hrefText: 'Irtysh Hall',
        id: 1013
    },
    {
        src: 'https://facecast.net/v/ayhieh?key=&chat_token=dnFvd0ZOQVdydkVRQmlKdGNIc2JGNVhxQVE0YWxVL2pXWHBLOUQ2bUlkYz1WWFFoVFpDdDU2NXFHWmZZ',
        text: 'The broadcast will be available soon',
        hrefText: 'Pechora Hall',
        id: 1014
    }
]

const elementsBroadcast = document.querySelector('.broadcast__video-result')
const elementsBroadcastEng = document.querySelector('.broadcast__video-result-eng')
class CardBroadcast {
    constructor(item, template) {
        this.src = item.src;
        this.text = item.text;
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
        this._elementHrefText = this._element.querySelector('.broadcast__href');


        this._elementSrc.src = this.src
        this._elementText.textContent = this.text
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