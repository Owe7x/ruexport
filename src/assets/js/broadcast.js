const boradcast = [
    {
        src: 'https://facecast.net/v/izirzp?key=&chat_token=MytiVmNFd2xNM3psWjZRYTdWL3krdUlucUVRcVRVSDE3WEdkaVRTV0ZUVT1TSWIzZGFUVE1EemVVQkUz',
        hrefText: 'Конгресс зал',
        id: 1001
    },
    {
        src: 'https://facecast.net/v/ktgbn7?key=&chat_token=My9BNHVrcVlpcU8xZXR4cCtGU2xPZ2lCckNqbkl5WWdOQm5oVnM1WDFiaz1aUEpQdTlHZHh0N0hKOVky',
        hrefText: 'Пресс зал',
        id: 1002
    },
    {
        src: 'https://player.vimeo.com/video/656536557?h=408def4a07&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        hrefText: 'Зал Валдай',
        id: 1003
    },
    {
        src: 'https://facecast.net/v/mz030b?key=&chat_token=MHI2SGVsbDlqVDB1MnVDQXFNWExBcFpYSG1hNUZrb2cyNnpKaDk4d3hvYz1FSWN6Y0s0OW9nVnRpb1hV',
        hrefText: 'Зал Селигер',
        id: 1004
    },
    {
        src: 'https://facecast.net/v/tn3fp0?key=&chat_token=MWIrZGJ2R2xKMTZiYm9mUXVtZVczK2RhbVl1eWJIaWU1Q2V6aWFqL1lGZz1kUXBRVEtjb3NUck1SbnRx',
        hrefText: 'Зал Байкал',
        id: 1005
    },
    {
        src: 'https://facecast.net/v/ex7ev4?key=&chat_token=aXFUaEpmQzJCaXd4Z3NHN3lPOU5kbnVGdWFUWndPZXFsT2xzY3hVS2ptcz1IT1Ixc05hQXVxenpTdFNV',
        hrefText: 'Зал Иртыш',
        id: 1006
    },
    {
        src: 'https://facecast.net/v/ayhieh?key=&chat_token=dnFvd0ZOQVdydkVRQmlKdGNIc2JGNVhxQVE0YWxVL2pXWHBLOUQ2bUlkYz1WWFFoVFpDdDU2NXFHWmZZ',
        hrefText: 'Зал Печора',
        id: 1007
    },
    {
        src: 'https://facecast.net/v/izirzp?key=&chat_token=MytiVmNFd2xNM3psWjZRYTdWL3krdUlucUVRcVRVSDE3WEdkaVRTV0ZUVT1TSWIzZGFUVE1EemVVQkUz',
        hrefText: 'Congress Hall',
        id: 1008
    },
    {
        src: 'https://facecast.net/v/ktgbn7?key=&chat_token=My9BNHVrcVlpcU8xZXR4cCtGU2xPZ2lCckNqbkl5WWdOQm5oVnM1WDFiaz1aUEpQdTlHZHh0N0hKOVky',
        hrefText: 'Press room',
        id: 1009
    },
    {
        src: 'https://player.vimeo.com/video/656536557?h=408def4a07&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        hrefText: 'Valdai Hall',
        id: 1010
    },
    {
        src: 'https://facecast.net/v/mz030b?key=&chat_token=MHI2SGVsbDlqVDB1MnVDQXFNWExBcFpYSG1hNUZrb2cyNnpKaDk4d3hvYz1FSWN6Y0s0OW9nVnRpb1hV',
        hrefText: 'Seliger Hall',
        id: 1011
    },
    {
        src: 'https://facecast.net/v/tn3fp0?key=&chat_token=MWIrZGJ2R2xKMTZiYm9mUXVtZVczK2RhbVl1eWJIaWU1Q2V6aWFqL1lGZz1kUXBRVEtjb3NUck1SbnRx',
        hrefText: 'Baikal Hall',
        id: 1012
    },
    {
        src: 'https://facecast.net/v/ex7ev4?key=&chat_token=aXFUaEpmQzJCaXd4Z3NHN3lPOU5kbnVGdWFUWndPZXFsT2xzY3hVS2ptcz1IT1Ixc05hQXVxenpTdFNV',
        hrefText: 'Irtysh Hall',
        id: 1013
    },
    {
        src: 'https://facecast.net/v/ayhieh?key=&chat_token=dnFvd0ZOQVdydkVRQmlKdGNIc2JGNVhxQVE0YWxVL2pXWHBLOUQ2bUlkYz1WWFFoVFpDdDU2NXFHWmZZ',
        hrefText: 'Pechora Hall',
        id: 1014
    }
]

const elementsBroadcast = document.querySelector('.broadcast__video-result')
const elementsBroadcastEng = document.querySelector('.broadcast__video-result-eng')
class CardBroadcast {
    constructor(item, template) {
        this.src = item.src;
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
        this._elementHrefText = this._element.querySelector('.broadcast__href');


        this._elementSrc.src = this.src
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