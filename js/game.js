let playerProgressMultiPlayer = {
    player1: {
        column: {
            col1: [],
            col2: [],
            col3: []
        },
        row: {
            row1: [],
            row2: [],
            row3: []
        },
        diagonal: {
            diagonal1: [],
            diagonal2: []
        }
    },
    player2: {
        column: {
            col1: [],
            col2: [],
            col3: []
        },
        row: {
            row1: [],
            row2: [],
            row3: []
        },
        diagonal: {
            diagonal1: [],
            diagonal2: []
        }
    }
}
let sum = 0
let playCount = 0

const EqualityGame = () => {
    setTimeout(() => {
        console.log('No Winner !!!!!!!!!!!!!!!!!!!!!!!')
        document.querySelector('.avatar-result div').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><radialGradient id="lCSbr2A9DeSL3lYZlpuCGa" cx="568" cy="24" r="18" fx="567.905" fy="16.289" gradientTransform="matrix(-1 0 0 1 592 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe16e"/><stop offset=".629" stop-color="#ffd226"/><stop offset=".75" stop-color="#fdcd23"/><stop offset=".899" stop-color="#f6bd1b"/><stop offset=".999" stop-color="#f0af13"/></radialGradient><circle cx="24" cy="24" r="18" fill="url(#lCSbr2A9DeSL3lYZlpuCGa)"/><path fill="#212121" d="M34.499,27c-0.102,0-0.204-0.031-0.292-0.095C34.18,26.886,31.525,25,27.5,25c-0.24,0-0.446-0.17-0.491-0.405c-0.045-0.235,0.083-0.47,0.306-0.559l5-2c0.254-0.103,0.547,0.022,0.65,0.279c0.103,0.256-0.022,0.547-0.279,0.65l-0.453,0.181c-0.777,0.311-0.742,1.406,0.044,1.692c1.547,0.563,2.452,1.211,2.517,1.258c0.223,0.163,0.272,0.475,0.11,0.698C34.807,26.928,34.654,27,34.499,27z"/><path fill="#212121" d="M13.501,27c0.102,0,0.204-0.031,0.292-0.095C13.82,26.886,16.475,25,20.5,25c0.24,0,0.446-0.17,0.491-0.405c0.045-0.235-0.083-0.47-0.306-0.559l-5-2c-0.254-0.103-0.547,0.022-0.65,0.279c-0.103,0.256,0.022,0.547,0.279,0.65l0.453,0.181c0.777,0.311,0.742,1.406-0.044,1.692c-1.547,0.563-2.452,1.211-2.517,1.258c-0.223,0.163-0.272,0.475-0.11,0.698C13.193,26.928,13.346,27,13.501,27z"/><radialGradient id="lCSbr2A9DeSL3lYZlpuCGb" cx="-190.349" cy="-3.574" r="3.326" gradientTransform="matrix(.0157 1.116 -3.2952 .1212 15.204 244.574)" gradientUnits="userSpaceOnUse"><stop offset=".629" stop-color="#ffe16e"/><stop offset=".871" stop-color="#ffe16e" stop-opacity="0"/></radialGradient><path fill="url(#lCSbr2A9DeSL3lYZlpuCGb)" d="M19.17,34.252c0,0,1.116,0.748,4.83,0.748c3.44,0,4.827-0.748,4.827-0.748s-0.863-1.485-4.827-1.485S19.17,34.252,19.17,34.252z"/><radialGradient id="lCSbr2A9DeSL3lYZlpuCGc" cx="1542.227" cy="-1072.793" r="8.277" gradientTransform="matrix(-.618 0 0 -.3776 977.074 -372.304)" gradientUnits="userSpaceOnUse"><stop offset=".284" stop-color="#cc9000"/><stop offset="1" stop-color="#cc9000" stop-opacity="0"/></radialGradient><path fill="url(#lCSbr2A9DeSL3lYZlpuCGc)" d="M24,34c3.392,0,4.31,0.609,4.31,0.609S27.43,36,24,36s-4.31-1.391-4.31-1.391S20.608,34,24,34z"/><radialGradient id="lCSbr2A9DeSL3lYZlpuCGd" cx="-1909.218" cy="-855.625" r="15.654" gradientTransform="matrix(.35 0 0 -.1877 692.203 -127.043)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1c1911"/><stop offset=".999" stop-color="#171714"/></radialGradient><path fill="url(#lCSbr2A9DeSL3lYZlpuCGd)" d="M28.701,34.195c0.501,0.276,0.995-0.358,0.608-0.779C28.185,32.194,26.458,31,24,31s-4.185,1.194-5.309,2.416c-0.387,0.421,0.107,1.055,0.608,0.779C20.45,33.559,22.024,33,24,33S27.55,33.559,28.701,34.195z"/><path fill="#805b2a" d="M36.457,18.998c-0.827-0.044-1.607-0.148-2.403-0.292c-0.792-0.146-1.578-0.339-2.357-0.584 c-1.551-0.501-3.088-1.233-4.413-2.402c-0.422-0.372-0.462-1.015-0.09-1.437s1.015-0.462,1.437-0.09 c0.029,0.026,0.056,0.052,0.081,0.08l0.006,0.007c0.916,1.013,2.161,1.819,3.517,2.425c1.356,0.598,2.841,1.047,4.309,1.297 l0.024,0.004c0.272,0.047,0.455,0.305,0.409,0.577C36.933,18.836,36.707,19.012,36.457,18.998z"/><path fill="#805b2a" d="M11.457,18.002c1.468-0.251,2.953-0.7,4.309-1.297c1.356-0.606,2.602-1.411,3.517-2.425l0.005-0.006 c0.377-0.417,1.021-0.45,1.438-0.073s0.45,1.021,0.073,1.438c-0.026,0.029-0.054,0.056-0.082,0.081 c-1.326,1.169-2.863,1.901-4.413,2.402c-0.779,0.245-1.566,0.439-2.357,0.584c-0.796,0.144-1.577,0.248-2.403,0.292 c-0.276,0.015-0.511-0.197-0.526-0.473c-0.014-0.256,0.168-0.477,0.415-0.519L11.457,18.002z"/></svg>`
        document.querySelector('.text-result').textContent = `NO WINNER !!! EQUALITY`
        document.querySelector('.modal-result-game').classList.toggle('visible')
    }, 1000)
}

const SquareWinMode = (sq1, sq2, sq3) => {
    document.querySelectorAll('.square-play').forEach(sqr => sqr.classList.remove('valid-square-win'))
    document.querySelectorAll('.square-play')[sq1].classList.add('valid-square-win')
    document.querySelectorAll('.square-play')[sq2].classList.add('valid-square-win')
    document.querySelectorAll('.square-play')[sq3].classList.add('valid-square-win')
}

const SumColumnPlayer = (id) => {
    if (id === 0) {
        if (playerProgressMultiPlayer.player1.column.col1.length === 3) {
            sum = playerProgressMultiPlayer.player1.column.col1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 18) {
                SquareWinMode(2, 5, 8)
                return true
            } else {
                return false;
            }
        } else if (playerProgressMultiPlayer.player1.column.col2.length === 3) {
            sum = playerProgressMultiPlayer.player1.column.col2.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 15) {
                SquareWinMode(1, 4, 7)
                return true
            } else {
                return false;
            }
        } else if (playerProgressMultiPlayer.player1.column.col3.length === 3) {
            sum = playerProgressMultiPlayer.player1.column.col3.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 12) {
                SquareWinMode(0, 3, 6)
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        if (playerProgressMultiPlayer.player2.column.col1.length === 3) {
            sum = playerProgressMultiPlayer.player2.column.col1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 18) {
                SquareWinMode(2, 5, 8)
                return true
            } else {
                return false;
            }
        } else if (playerProgressMultiPlayer.player2.column.col2.length === 3) {
            sum = playerProgressMultiPlayer.player2.column.col2.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 15) {
                SquareWinMode(1, 4, 7)
                return true
            } else {
                return false;
            }
        } else if (playerProgressMultiPlayer.player2.column.col3.length === 3) {
            sum = playerProgressMultiPlayer.player2.column.col3.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 12) {
                SquareWinMode(0, 3, 6)
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

const SumRowsPlayer = (id) => {
    if (id === 0) {
        if (playerProgressMultiPlayer.player1.row.row1.length === 3) {
            sum = playerProgressMultiPlayer.player1.row.row1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 6) {
                SquareWinMode(0, 1, 2)
                return true
            } else {
                return false;
            }
        } else if (playerProgressMultiPlayer.player1.row.row2.length === 3) {
            sum = playerProgressMultiPlayer.player1.row.row2.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 15) {
                SquareWinMode(3, 4, 5)
                return true
            } else {
                return false;
            }
        } else if (playerProgressMultiPlayer.player1.row.row3.length === 3) {
            sum = playerProgressMultiPlayer.player1.row.row3.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 24) {
                SquareWinMode(6, 7, 8)
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        if (playerProgressMultiPlayer.player2.row.row1.length === 3) {
            sum = playerProgressMultiPlayer.player2.row.row1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 6) {
                SquareWinMode(0, 1, 2)
                return true
            } else {
                return false;
            }
        } else if (playerProgressMultiPlayer.player2.row.row2.length === 3) {
            sum = playerProgressMultiPlayer.player2.row.row2.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 15) {
                SquareWinMode(3, 4, 5)
                return true
            } else {
                return false;
            }
        } else if (playerProgressMultiPlayer.player2.row.row3.length === 3) {
            sum = playerProgressMultiPlayer.player2.row.row3.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 24) {
                SquareWinMode(6, 7, 8)
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

const SumDiagonalPlayer = (id) => {
    if (id === 0) {
        if (playerProgressMultiPlayer.player1.diagonal.diagonal1.length === 3) {
            sum = playerProgressMultiPlayer.player1.diagonal.diagonal1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 15) {
                SquareWinMode(0, 4, 8)
                return true
            } else {
                return false;
            }
        } else if (playerProgressMultiPlayer.player1.diagonal.diagonal2.length === 3) {
            sum = playerProgressMultiPlayer.player1.diagonal.diagonal2.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 15) {
                SquareWinMode(6, 4, 2)
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        if (playerProgressMultiPlayer.player2.diagonal.diagonal1.length === 3) {
            sum = playerProgressMultiPlayer.player2.diagonal.diagonal1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 15) {
                SquareWinMode(0, 4, 8)
                return true
            } else {
                return false;
            }
        } else if (playerProgressMultiPlayer.player2.diagonal.diagonal2.length === 3) {
            sum = playerProgressMultiPlayer.player2.diagonal.diagonal2.reduce(function (a, b) {
                return a + b
            }, 0)
            if (sum === 15) {
                SquareWinMode(6, 4, 2)
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

const MultiPlayerProgress = (indexSquare, idPlayer) => {
    indexSquare++
    switch (indexSquare) {
        case 1: {
            if (idPlayer === 0) {
                playerProgressMultiPlayer.player1.column.col3.push(1)
                playerProgressMultiPlayer.player1.row.row1.push(1)
                playerProgressMultiPlayer.player1.diagonal.diagonal1.push(1)

            } else {
                playerProgressMultiPlayer.player2.column.col3.push(1)
                playerProgressMultiPlayer.player2.row.row1.push(1)
                playerProgressMultiPlayer.player2.diagonal.diagonal1.push(1)
            }
        }
        break;
    case 2: {
        if (idPlayer === 0) {
            playerProgressMultiPlayer.player1.column.col2.push(2)
            playerProgressMultiPlayer.player1.row.row1.push(2)

        } else {
            playerProgressMultiPlayer.player2.column.col2.push(2)
            playerProgressMultiPlayer.player2.row.row1.push(2)
        }
    }
    break;
    case 3: {
        if (idPlayer === 0) {
            playerProgressMultiPlayer.player1.column.col1.push(3)
            playerProgressMultiPlayer.player1.row.row1.push(3)
            playerProgressMultiPlayer.player1.diagonal.diagonal2.push(3)

        } else {
            playerProgressMultiPlayer.player2.column.col1.push(3)
            playerProgressMultiPlayer.player2.row.row1.push(3)
            playerProgressMultiPlayer.player2.diagonal.diagonal2.push(3)
        }
    }
    break;
    case 4: {
        if (idPlayer === 0) {
            playerProgressMultiPlayer.player1.column.col3.push(4)
            playerProgressMultiPlayer.player1.row.row2.push(4)

        } else {
            playerProgressMultiPlayer.player2.column.col3.push(4)
            playerProgressMultiPlayer.player2.row.row2.push(4)

        }
    }
    break;
    case 5: {
        if (idPlayer === 0) {
            playerProgressMultiPlayer.player1.column.col2.push(5)
            playerProgressMultiPlayer.player1.row.row2.push(5)
            playerProgressMultiPlayer.player1.diagonal.diagonal1.push(5)
            playerProgressMultiPlayer.player1.diagonal.diagonal2.push(5)

        } else {
            playerProgressMultiPlayer.player2.column.col2.push(5)
            playerProgressMultiPlayer.player2.row.row2.push(5)
            playerProgressMultiPlayer.player2.diagonal.diagonal1.push(5)
            playerProgressMultiPlayer.player2.diagonal.diagonal2.push(5)
        }
    }
    break;
    case 6: {
        if (idPlayer === 0) {
            playerProgressMultiPlayer.player1.column.col1.push(6)
            playerProgressMultiPlayer.player1.row.row2.push(6)


        } else {
            playerProgressMultiPlayer.player2.column.col1.push(6)
            playerProgressMultiPlayer.player2.row.row2.push(6)

        }
    }
    break;
    case 7: {
        if (idPlayer === 0) {
            playerProgressMultiPlayer.player1.column.col3.push(7)
            playerProgressMultiPlayer.player1.row.row3.push(7)
            playerProgressMultiPlayer.player1.diagonal.diagonal2.push(7)

        } else {
            playerProgressMultiPlayer.player2.column.col3.push(7)
            playerProgressMultiPlayer.player2.row.row3.push(7)
            playerProgressMultiPlayer.player2.diagonal.diagonal2.push(7)
        }
    }
    break;
    case 8: {
        if (idPlayer === 0) {
            playerProgressMultiPlayer.player1.column.col2.push(8)
            playerProgressMultiPlayer.player1.row.row3.push(8)


        } else {
            playerProgressMultiPlayer.player2.column.col2.push(8)
            playerProgressMultiPlayer.player2.row.row3.push(8)

        }
    }
    break;
    case 9: {
        if (idPlayer === 0) {
            playerProgressMultiPlayer.player1.column.col1.push(9)
            playerProgressMultiPlayer.player1.row.row3.push(9)
            playerProgressMultiPlayer.player1.diagonal.diagonal1.push(9)

        } else {
            playerProgressMultiPlayer.player2.column.col1.push(9)
            playerProgressMultiPlayer.player2.row.row3.push(9)
            playerProgressMultiPlayer.player2.diagonal.diagonal1.push(9)
        }
    }
    break;

    }
}

const asWin = (idPlayer) => {
    sum = 0
    playCount
    if (SumColumnPlayer(idPlayer)) {
        return true
    } else {
        if (SumRowsPlayer(idPlayer)) {
 
            return true
        } else {
            if (SumDiagonalPlayer(idPlayer)) {
       
                return true
            } else {
                if (playCount === 9) {
                    EqualityGame()
                    return false
                } else {
                    return false
                }

            }
        }
    }
}

const UserPlay = (idPlayer, squareIndex) => {
    if (idPlayer === 0) {
        document.querySelectorAll('.square-play')[squareIndex].innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312L10.585938 12L4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031L12 13.414062L18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969L13.414062 12L19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688L12 10.585938L5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" fill="#FFFFFF" />
</svg>`
    } else {
        document.querySelectorAll('.square-play')[squareIndex].innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z" fill="#FFFFFF" />
</svg>`
    }

}

const resetGame = () => {
    document.querySelectorAll('.square-play').forEach(sqr => sqr.classList.remove('valid-square-win'))
    playCount = 0
    document.querySelectorAll('.square-play').forEach(sqr => sqr.setAttribute('is-played', '0'))
    //Player 1
    playerProgressMultiPlayer.player1.column.col1 = []
    playerProgressMultiPlayer.player1.column.col2 = []
    playerProgressMultiPlayer.player1.column.col3 = []

    playerProgressMultiPlayer.player1.row.row1 = []
    playerProgressMultiPlayer.player1.row.row2 = []
    playerProgressMultiPlayer.player1.row.row3 = []

    playerProgressMultiPlayer.player1.diagonal.diagonal1 = []
    playerProgressMultiPlayer.player1.diagonal.diagonal2 = []
    //Player 2
    playerProgressMultiPlayer.player2.column.col1 = []
    playerProgressMultiPlayer.player2.column.col2 = []
    playerProgressMultiPlayer.player2.column.col3 = []

    playerProgressMultiPlayer.player2.row.row1 = []
    playerProgressMultiPlayer.player2.row.row2 = []
    playerProgressMultiPlayer.player2.row.row3 = []

    playerProgressMultiPlayer.player2.diagonal.diagonal1 = []
    playerProgressMultiPlayer.player2.diagonal.diagonal2 = []
}

const gameInitial = () => {
    playCount = 0;
    document.querySelectorAll('.square-play').forEach((square, index) => {
        square.addEventListener('click', () => {
            if (MODE_GAME === "SINGLE PLAYER") {
               User_Played(square,index)
               
            } else {
                if (playCount < 9) {
                    playCount++;
                }
                if (square.getAttribute('is-played') === "0") {
                    UserPlay(indexPlayer, index)
                    MultiPlayerProgress(index, indexPlayer)
                    if (asWin(indexPlayer)) {
                        setTimeout(() => {
                            console.log('WINNER !!!!!!!!!!!!!!!!!!!!!!!')
                            document.querySelector('.avatar-result div').innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <linearGradient id="OY51ZQaWw10MQX_Yc6Q2Ya" x1="39.001" x2="41.528" y1="29.5" y2="29.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#c48f0c" />
                                <stop offset=".251" stop-color="#d19b16" />
                                <stop offset=".619" stop-color="#dca51f" />
                                <stop offset="1" stop-color="#e0a922" />
                            </linearGradient>
                            <path fill="url(#OY51ZQaWw10MQX_Yc6Q2Ya)" d="M38.999,25H38v9h1.333c0.975,0,1.808-0.703,1.972-1.664l0.653-3.832C42.269,26.672,40.857,25,38.999,25z" />
                            <linearGradient id="OY51ZQaWw10MQX_Yc6Q2Yb" x1="343" x2="345.528" y1="29.5" y2="29.5" gradientTransform="matrix(-1 0 0 1 352 0)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#c48f0c" />
                                <stop offset=".251" stop-color="#d19b16" />
                                <stop offset=".619" stop-color="#dca51f" />
                                <stop offset="1" stop-color="#e0a922" />
                            </linearGradient>
                            <path fill="url(#OY51ZQaWw10MQX_Yc6Q2Yb)" d="M9.001,25H10v9H8.667c-0.975,0-1.808-0.703-1.972-1.664l-0.653-3.832C5.731,26.672,7.143,25,9.001,25z" />
                            <radialGradient id="OY51ZQaWw10MQX_Yc6Q2Yc" cx="24" cy="25.5" r="17.396" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#ffcf54" />
                                <stop offset=".261" stop-color="#fdcb4d" />
                                <stop offset=".639" stop-color="#f7c13a" />
                                <stop offset="1" stop-color="#f0b421" />
                            </radialGradient>
                            <path fill="url(#OY51ZQaWw10MQX_Yc6Q2Yc)" d="M24,6C16.598,6,9,9,9,25c0,1.281,0,5.92,0,7.288C9,38,18,45,24,45s15-7,15-12.712c0-1.368,0-6.007,0-7.288C39,9,31.402,6,24,6z" />
                            <radialGradient id="OY51ZQaWw10MQX_Yc6Q2Yd" cx="9.386" cy="5.933" r="42.765" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#c26715" />
                                <stop offset=".508" stop-color="#b85515" />
                                <stop offset="1" stop-color="#ad3f16" />
                            </radialGradient>
                            <path fill="url(#OY51ZQaWw10MQX_Yc6Q2Yd)" d="M24,4c-7.982,0-10,3-10,3c-3.245,0.479-7,4.566-7,10c0,3.032,0.653,4.439,2,12c1-12,2-16,4-16c3,0,3,2,11.778,2C29.801,15,32,13,34,13c5,0,5,14.108,5,16c0.806-7.405,1-9.351,1-12C40,10.712,35.383,4,24,4z" />
                            <radialGradient id="OY51ZQaWw10MQX_Yc6Q2Ye" cx="20.832" cy="9.178" r="53.981" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#c26715" />
                                <stop offset=".508" stop-color="#b85515" />
                                <stop offset="1" stop-color="#ad3f16" />
                            </radialGradient>
                            <path fill="url(#OY51ZQaWw10MQX_Yc6Q2Ye)" d="M24,3c-7.982,0-10,4-10,4c-0.08,2.125,1,4,1,4s1.46,3,9.778,3C29.801,14,37,11.003,37,3C37,3,35.383,3,24,3z" />
                            <circle cx="44" cy="10" r="1" fill="#edbe00" />
                            <circle cx="41" cy="6" r="1" fill="#edbe00" />
                            <circle cx="45" cy="15" r="1" fill="#edbe00" />
                            <circle cx="4" cy="10" r="1" fill="#edbe00" />
                            <circle cx="7" cy="6" r="1" fill="#edbe00" />
                            <circle cx="3" cy="15" r="1" fill="#edbe00" />
                            <path fill="#2b1d1d" d="M31,33c-0.711,0-2.738,2.079-7,2.079S17.711,33,17,33s-1,0.31-1,1c0,1.187,3.621,7,8,7s8-5.813,8-7C32,33.31,31.711,33,31,33z" />
                            <radialGradient id="OY51ZQaWw10MQX_Yc6Q2Yf" cx="24.082" cy="33.287" r="5.264" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#fff" />
                                <stop offset=".209" stop-color="#f8f8f8" />
                                <stop offset=".514" stop-color="#e4e4e4" />
                                <stop offset=".877" stop-color="#c4c4c4" />
                                <stop offset="1" stop-color="#b8b8b8" />
                            </radialGradient>
                            <path fill="url(#OY51ZQaWw10MQX_Yc6Q2Yf)" d="M29.616,35.348C29.859,35.156,30,34.869,30,34.559v-1.139C28.897,34.006,27.017,35,24,35s-4.897-0.994-6-1.579v1.139c0,0.309,0.141,0.596,0.384,0.789C19.104,35.921,20.876,37,24,37S28.896,35.921,29.616,35.348z" />
                            <linearGradient id="OY51ZQaWw10MQX_Yc6Q2Yg" x1="30" x2="30" y1="23.963" y2="26.281" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#c48f0c" />
                                <stop offset=".251" stop-color="#d19b16" />
                                <stop offset=".619" stop-color="#dca51f" />
                                <stop offset="1" stop-color="#e0a922" />
                            </linearGradient>
                            <path fill="url(#OY51ZQaWw10MQX_Yc6Q2Yg)" d="M30,25.575c1.4,0,2.742,0.238,4,0.659C33.165,24.897,31.692,24,30,24s-3.165,0.897-4,2.234C27.258,25.813,28.6,25.575,30,25.575z" />
                            <linearGradient id="OY51ZQaWw10MQX_Yc6Q2Yh" x1="18" x2="18" y1="23.963" y2="26.281" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="#c48f0c" />
                                <stop offset=".251" stop-color="#d19b16" />
                                <stop offset=".619" stop-color="#dca51f" />
                                <stop offset="1" stop-color="#e0a922" />
                            </linearGradient>
                            <path fill="url(#OY51ZQaWw10MQX_Yc6Q2Yh)" d="M18,25.575c1.4,0,2.742,0.238,4,0.659C21.165,24.897,19.692,24,18,24s-3.165,0.897-4,2.234C15.258,25.813,16.6,25.575,18,25.575z" />
                        </svg>
`
                            document.querySelector('.text-result').textContent = `CONGRATULATION TO PLAYER ${indexPlayer+1}`
                            document.querySelector('.modal-result-game').classList.toggle('visible')
                        }, 900)

                    } else {
                        if (indexPlayer === 0) {
                            indexPlayer = 1
                        } else {
                            indexPlayer = 0
                        }
                        palyerSelect(indexPlayer)
                    }
                    square.setAttribute('is-played', '1')
                }
            }

        })
    })

}


window.addEventListener('load', () => {
    gameInitial()
})
