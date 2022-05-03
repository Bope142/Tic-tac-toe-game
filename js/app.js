let MODE_GAME = "SINGLE PLAYER";
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
        GameCountPlay = 0;
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
        if (MODE_GAME === "SINGLE PLAYER") {
            if (document.querySelectorAll('.radio-circle span')[0].classList.contains('circle-checked')) {
                playerConfig.userPlayer = 'X'
                playerConfig.aiPlayer = '0'
                playerConfig.defaultPlayer = 'user'
                document.querySelectorAll('.player-profil')[0].innerHTML = `YOU <span class="icon-player"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312L10.585938 12L4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031L12 13.414062L18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969L13.414062 12L19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688L12 10.585938L5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" fill="#FFFFFF" />
                        </svg></span>`
                document.querySelectorAll('.player-profil')[1].innerHTML = `AI <span class="icon-player"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z" fill="#FFFFFF" />
                        </svg></span>`
            } else {
                playerConfig.userPlayer = '0'
                playerConfig.aiPlayer = 'X'
                playerConfig.defaultPlayer = 'ai'
                AIisPlay = true;
                document.querySelectorAll('.player-profil')[0].innerHTML = `AI <span class="icon-player"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312L10.585938 12L4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031L12 13.414062L18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969L13.414062 12L19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688L12 10.585938L5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" fill="#FFFFFF" />
                        </svg></span>`
                document.querySelectorAll('.player-profil')[1].innerHTML = `YOU <span class="icon-player"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z" fill="#FFFFFF" />
                        </svg></span>`
                setTimeout(() => {
                    Ai_Played()
                }, 500)
            }

        } else {
            playerConfig.userPlayer = ''
            playerConfig.aiPlayer = ''
            playerConfig.defaultPlayer = ''
            document.querySelectorAll('.player-profil')[0].innerHTML = `PLAYER 1 <span class="icon-player"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312L10.585938 12L4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031L12 13.414062L18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969L13.414062 12L19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688L12 10.585938L5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" fill="#FFFFFF" />
                        </svg></span>`
            document.querySelectorAll('.player-profil')[1].innerHTML = `PLAYER 2 <span class="icon-player"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z" fill="#FFFFFF" />
                        </svg></span>`
        }
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
