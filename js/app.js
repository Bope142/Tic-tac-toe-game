const changeTab = (tabIndex) => {
    document.querySelectorAll('.tab-container').forEach(tab => tab.classList.replace('tab-active', 'tab-hide'))
    document.querySelectorAll('.tab-container')[tabIndex].classList.replace('tab-hide', 'tab-active')
}

const backBtn = () => {
    document.querySelector('.back-home').addEventListener('click', () => {
        changeTab(0)
    })
}

const slideTab = () => {
    document.querySelectorAll('.btn-controll').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            switch (index) {
                case 0: {
                    document.querySelector('.modal-play-game').classList.toggle('visible')
                }
                break;
            case 1: {
                document.querySelector('.modal-play-game').classList.toggle('visible')
            }
            break;
            case 2: {
                changeTab(2)
            }
            break;
            }
        })
    })
}

const optionGame = () => {
    document.querySelectorAll('.radio-circle').forEach((option, index) => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.radio-circle span')[0].classList.remove('circle-checked')
            document.querySelectorAll('.radio-circle span')[1].classList.remove('circle-checked')
            document.querySelectorAll('.radio-circle span')[index].classList.add('circle-checked')
        })


    })
}
const playGame = () => {
    document.querySelector('.valid-play').addEventListener('click', () => {
        document.querySelector('.modal-play-game').classList.toggle('visible')
        changeTab(1)
    })
}

window.addEventListener('load', () => {
    slideTab()
    backBtn()
    document.querySelector('.close-mmodal-option').addEventListener('click', () => {
        document.querySelector('.modal-play-game').classList.toggle('visible')
    })
    optionGame()
    playGame()
    document.querySelector('.btn-back-home').addEventListener('click', () => {
        document.querySelector('.modal-result-game').classList.toggle('visible')
        changeTab(0)
    })
    document.querySelector('.square-play').addEventListener('click', () => {
        document.querySelector('.modal-result-game').classList.toggle('visible')
    })
})
