let MODE_GAME = "SINGLE PLAYER";
//let configGame = {
//    Player1_Symbole: '',
//    Player2_Symbole: ''
//}
let indexPlayer = 0;
const palyerSelect = (idPlayer) => {
    document.querySelectorAll('.player-profil').forEach(player => player.classList.remove('player-active'))
    document.querySelectorAll('.player-profil')[idPlayer].classList.add('player-active')
}
const changeTab = (tabIndex) => {
    document.querySelectorAll('.tab-container').forEach(tab => tab.classList.replace('tab-active', 'tab-hide'))
    document.querySelectorAll('.tab-container')[tabIndex].classList.replace('tab-hide', 'tab-active')
}

const backBtn = () => {
    document.querySelector('.back-home').addEventListener('click', () => {
        changeTab(0)
    })
}
const deleteSquareContent = () => {
    document.querySelectorAll('.square-play').forEach(square => square.innerHTML = '')
}
const slideTab = () => {
    document.querySelectorAll('.btn-controll').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            switch (index) {
                case 0: {
                    resetGame()
                    MODE_GAME = "SINGLE PLAYER";
                    document.querySelectorAll('.radio-circle span')[1].classList.remove('circle-checked')
                    document.querySelectorAll('.radio-circle span')[0].classList.add('circle-checked')
                    document.querySelector('.modal-play-game').classList.toggle('visible')
                }
                break;
            case 1: {
                resetGame()
                MODE_GAME = "MULTI PLAYER";
                document.querySelectorAll('.radio-circle span')[1].classList.remove('circle-checked')
                document.querySelectorAll('.radio-circle span')[0].classList.add('circle-checked')
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
        deleteSquareContent()
        changeTab(1)
        indexPlayer = 0
        palyerSelect(0)
        document.querySelector('.modal-play-game').classList.toggle('visible')
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
        resetGame()
        document.querySelector('.modal-result-game').classList.toggle('visible')
        changeTab(0)
    })
    document.querySelector('.btn-replay').addEventListener('click', () => {
        deleteSquareContent()
        resetGame()
        indexPlayer = 0
        palyerSelect(0)
        document.querySelector('.modal-result-game').classList.toggle('visible')
    })
})
