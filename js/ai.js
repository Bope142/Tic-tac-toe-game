let GameProgress = {
    ai: {
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
    user: {
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

let GameProgressSinglePlayer = 0

let AIisPlay = false;

let GameEND = false;

let positionAICanWin = 500

let positionUSERCanWin = 500

let sumUSerWin = 0

let sumAiWin = 0

let playerConfig = {
    userPlayer: '',
    aiPlayer: '',
    defaultPlayer: ''
}

let SetProgessAI = (position) => {
    position++
    switch (position) {
        case 1: {
            GameProgress.ai.column.col3.push(1)
            GameProgress.ai.row.row1.push(1)
            GameProgress.ai.diagonal.diagonal1.push(1)
        }
        break;
    case 2: {
        GameProgress.ai.column.col2.push(2)
        GameProgress.ai.row.row1.push(2)
    }
    break;
    case 3: {
        GameProgress.ai.column.col1.push(3)
        GameProgress.ai.row.row1.push(3)
        GameProgress.ai.diagonal.diagonal2.push(3)
    }
    break;
    case 4: {
        GameProgress.ai.column.col3.push(4)
        GameProgress.ai.row.row2.push(4)
    }
    break;
    case 5: {
        GameProgress.ai.column.col2.push(5)
        GameProgress.ai.row.row2.push(5)
        GameProgress.ai.diagonal.diagonal1.push(5)
        GameProgress.ai.diagonal.diagonal2.push(5)
    }
    break;
    case 6: {
        GameProgress.ai.column.col1.push(6)
        GameProgress.ai.row.row2.push(6)
    }
    break;
    case 7: {
        GameProgress.ai.column.col3.push(7)
        GameProgress.ai.row.row3.push(7)
        GameProgress.ai.diagonal.diagonal2.push(7)
    }
    break;
    case 8: {
        GameProgress.ai.column.col2.push(8)
        GameProgress.ai.row.row3.push(8)
    }
    break;
    case 9: {
        GameProgress.ai.column.col1.push(9)
        GameProgress.ai.row.row3.push(9)
        GameProgress.ai.diagonal.diagonal1.push(9)
    }
    break;
    }
}

let SetProgessUser = (position) => {
    position++
    switch (position) {
        case 1: {
            GameProgress.user.column.col3.push(1)
            GameProgress.user.row.row1.push(1)
            GameProgress.user.diagonal.diagonal1.push(1)
        }
        break;
    case 2: {
        GameProgress.user.column.col2.push(2)
        GameProgress.user.row.row1.push(2)
    }
    break;
    case 3: {
        GameProgress.user.column.col1.push(3)
        GameProgress.user.row.row1.push(3)
        GameProgress.user.diagonal.diagonal2.push(3)
    }
    break;
    case 4: {
        GameProgress.user.column.col3.push(4)
        GameProgress.user.row.row2.push(4)
    }
    break;
    case 5: {
        GameProgress.user.column.col2.push(5)
        GameProgress.user.row.row2.push(5)
        GameProgress.user.diagonal.diagonal1.push(5)
        GameProgress.user.diagonal.diagonal2.push(5)
    }
    break;
    case 6: {
        GameProgress.user.column.col1.push(6)
        GameProgress.user.row.row2.push(6)
    }
    break;
    case 7: {
        GameProgress.user.column.col3.push(7)
        GameProgress.user.row.row3.push(7)
        GameProgress.user.diagonal.diagonal2.push(7)
    }
    break;
    case 8: {
        GameProgress.user.column.col2.push(8)
        GameProgress.user.row.row3.push(8)
    }
    break;
    case 9: {
        GameProgress.user.column.col1.push(9)
        GameProgress.user.row.row3.push(9)
        GameProgress.user.diagonal.diagonal1.push(9)
    }
    break;
    }
}

const UserGamePlay = (squareIndex) => {
    if (playerConfig.defaultPlayer === "user") {
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
    document.querySelectorAll('.square-play')[squareIndex].setAttribute('is-played', '1')
}

const AIplay = (pos) => {
    let square = document.querySelectorAll('.square-play')[pos]
    square.setAttribute('is-played', '1')
    if (playerConfig.aiPlayer === 'X') {
        square.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312L10.585938 12L4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031L12 13.414062L18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969L13.414062 12L19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688L12 10.585938L5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" fill="#FFFFFF" />
</svg>`
    } else {
        square.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 22 17.511003 22 12C22 6.4889971 17.511003 2 12 2 z M 12 4C16.430123 4 20 7.5698774 20 12C20 16.430123 16.430123 20 12 20C7.5698774 20 4 16.430123 4 12C4 7.5698774 7.5698774 4 12 4 z" fill="#FFFFFF" />
</svg>`
    }

}


const getAllPositionAvailable = () => {
    let arrayPosAvailable = []
    document.querySelectorAll('.square-play').forEach((square, index) => {
        if (square.getAttribute('is-played') === '0') {
            arrayPosAvailable.push(index)
        }
    })
    //    console.log('les positions disponibles : \n' + arrayPosAvailable)
    return arrayPosAvailable
}

const getRandomPos = (arrayPosition) => {
    let pos = arrayPosition[Math.floor(Math.random() * arrayPosition.length)]
    //console.log(`la position random est ${pos} pour l'array ${arrayPosition}`)
    return pos
}

const isAvailablePositionToPlay = (indexSqaure) => {
    if (document.querySelectorAll('.square-play')[indexSqaure].getAttribute('is-played') === '0') {
        //console.log(`la position ${indexSqaure} est jouable`)
        return true
    } else {
        //console.log(`la position ${indexSqaure} n'est pas jouable`)
        return false
    }
}


async function AvailablePositionToWinInColumn() {
    let result = false;
    let posWin = 0;
    let posResult = 500
    positionAICanWin = 500
    //Verification de la colonne 1
    result = await

    function () {
        if (GameProgress.ai.column.col1.length >= 2) {
            posWin = GameProgress.ai.column.col1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (posWin === 18) {
                console.log('Déjà gagné')
                posResult = 120
                return false
            } else {
                posWin = 18 - posWin
                if (isAvailablePositionToPlay(posWin - 1)) {
                    //console.log(`l'IA gagnera à la position ${posWin} pour la colonne 1 : position disponible`)
                    posResult = posWin
                    return true
                } else {
                    //console.log(`l'IA gagnera à la position ${posWin} pour la colonne 1 : position déjà occupé`)
                    posResult = posWin
                    return false
                }
            }
        } else {
            //console.log('Aucun moyen de gagner en colonne 1 par l IA')
            posResult = 100
            return false
        }

    }
    if (result()) {
        //console.log('POSSIBILITE DE GAGNER EN COLONNE 1')
        positionAICanWin = posResult;
        return true
    } else {
        //Verification de la colonne 2
        result = await

        function () {
            if (GameProgress.ai.column.col2.length >= 2) {
                posWin = GameProgress.ai.column.col2.reduce(function (a, b) {
                    return a + b
                }, 0)
                if (posWin === 15) {
                    console.log('Déjà gagné')
                    posResult = 120
                    return false
                } else {
                    posWin = 15 - posWin
                    if (isAvailablePositionToPlay(posWin - 1)) {
                        //console.log(`l'IA gagnera à la position ${posWin} pour la colonne 2 : position disponible`)
                        posResult = posWin
                        return true
                    } else {
                        //console.log(`l'IA gagnera à la position ${posWin} pour la colonne 2 : position déjà occupé`)
                        posResult = posWin
                        return false
                    }

                }
            } else {
                //console.log('Aucun moyen de gagner en colonne 2 par l IA')
                posResult = 100
                return false
            }
        }
        if (result()) {
            //console.log('POSSIBILITE DE GAGNER EN COLONNE 2')
            positionAICanWin = posResult;
            return true
        } else {
            //Verification de la colonne 3
            result = await

            function () {
                if (GameProgress.ai.column.col3.length >= 2) {
                    posWin = GameProgress.ai.column.col3.reduce(function (a, b) {
                        return a + b
                    }, 0)
                    if (posWin === 12) {
                        console.log('Déjà gagné')
                        posResult = 120
                        return false
                    } else {
                        posWin = 12 - posWin
                        if (isAvailablePositionToPlay(posWin - 1)) {
                            //console.log(`l'IA gagnera à la position ${posWin} pour la colonne 3 : position disponible`)
                            posResult = posWin
                            return true
                        } else {
                            //console.log(`l'IA gagnera à la position ${posWin} pour la colonne 3 : position déjà occupé`)
                            posResult = posWin
                            return false
                        }
                    }
                } else {
                    //console.log('Aucun moyen de gagner en colonne 3 par l IA')
                    posResult = 100
                    return false
                }

            }

            if (result()) {
                //console.log('POSSIBILITE DE GAGNER EN COLONNE 3')
                positionAICanWin = posResult;
                return true
            } else {
                positionAICanWin = 500;
                return false
            }
        }

    }


}


async function AvailablePositionToWinInRow() {
    let result = false;
    let posWin = 0;
    let posResult = 500
    positionAICanWin = 500
    //Verification de la ligne 1
    result = await

    function () {
        if (GameProgress.ai.row.row1.length >= 2) {
            posWin = GameProgress.ai.row.row1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (posWin === 6) {
                console.log('Déjà gagné')
                posResult = 120
                return false
            } else {
                posWin = 6 - posWin
                if (isAvailablePositionToPlay(posWin - 1)) {
                    //console.log(`l'IA gagnera à la position ${posWin} pour la ligne 1 : position disponible`)
                    posResult = posWin
                    return true
                } else {
                    //console.log(`l'IA gagnera à la position ${posWin} pour la ligne 1 : position déjà occupé`)
                    posResult = posWin
                    return false
                }
            }
        } else {
            //console.log('Aucun moyen de gagner en ligne 1 par l IA')
            posResult = 100
            return false
        }

    }
    if (result()) {
        //console.log('POSSIBILITE DE GAGNER EN LIGNE 1')
        positionAICanWin = posResult;
        return true
    } else {
        //Verification de la ligne 2
        result = await

        function () {
            if (GameProgress.ai.row.row2.length >= 2) {
                posWin = GameProgress.ai.row.row2.reduce(function (a, b) {
                    return a + b
                }, 0)
                if (posWin === 15) {
                    console.log('Déjà gagné')
                    posResult = 120
                    return false
                } else {
                    posWin = 15 - posWin
                    if (isAvailablePositionToPlay(posWin - 1)) {
                        //console.log(`l'IA gagnera à la position ${posWin} pour la ligne 2 : position disponible`)
                        posResult = posWin
                        return true
                    } else {
                        //console.log(`l'IA gagnera à la position ${posWin} pour la ligne 2 : position déjà occupé`)
                        posResult = posWin
                        return false
                    }

                }
            } else {
                //console.log('Aucun moyen de gagner en ligne 2 par l IA')
                posResult = 100
                return false
            }
        }
        if (result()) {
            //console.log('POSSIBILITE DE GAGNER EN LIGNE 2')
            positionAICanWin = posResult;
            return true
        } else {
            //Verification de la ligne 3
            result = await

            function () {
                if (GameProgress.ai.row.row3.length >= 2) {
                    posWin = GameProgress.ai.row.row3.reduce(function (a, b) {
                        return a + b
                    }, 0)
                    if (posWin === 24) {
                        console.log('Déjà gagné')
                        posResult = 120
                        return false
                    } else {
                        posWin = 24 - posWin
                        if (isAvailablePositionToPlay(posWin - 1)) {
                            //console.log(`l'IA gagnera à la position ${posWin} pour la ligne 3 : position disponible`)
                            posResult = posWin
                            return true
                        } else {
                            //console.log(`l'IA gagnera à la position ${posWin} pour la ligne 3 : position déjà occupé`)
                            posResult = posWin
                            return false
                        }
                    }
                } else {
                    //console.log('Aucun moyen de gagner en ligne 3 par l IA')
                    posResult = 100
                    return false
                }

            }

            if (result()) {
                //console.log('POSSIBILITE DE GAGNER EN LIGNE 3')
                positionAICanWin = posResult;
                return true
            } else {
                positionAICanWin = 500;
                return false
            }
        }

    }

}


async function AvailablePositionToWinInDiagonal() {
    let result = false;
    let posWin = 0;
    let posResult = 500
    positionAICanWin = 500
    //Verification de la diagonal 1
    result = await

    function () {
        if (GameProgress.ai.diagonal.diagonal1.length >= 2) {
            posWin = GameProgress.ai.diagonal.diagonal1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (posWin === 15) {
                console.log('Déjà gagné')
                posResult = 120
                return false
            } else {
                posWin = 15 - posWin
                if (isAvailablePositionToPlay(posWin - 1)) {
                    //console.log(`l'IA gagnera à la position ${posWin} pour la DIAGONALE 1 : position disponible`)
                    posResult = posWin
                    return true
                } else {
                    //console.log(`l'IA gagnera à la position ${posWin} pour la DIAGONALE 1 : position déjà occupé`)
                    posResult = posWin
                    return false
                }
            }
        } else {
            //console.log('Aucun moyen de gagner en DIAGONALE 1 par l IA')
            posResult = 100
            return false
        }

    }
    if (result()) {
        //console.log('POSSIBILITE DE GAGNER EN DIAGONALE 1')
        positionAICanWin = posResult;
        return true
    } else {
        //Verification de la DIAGONALE 2
        result = await

        function () {
            if (GameProgress.ai.diagonal.diagonal2.length >= 2) {
                posWin = GameProgress.ai.diagonal.diagonal2.reduce(function (a, b) {
                    return a + b
                }, 0)
                if (posWin === 15) {
                    console.log('Déjà gagné')
                    posResult = 120
                    return false
                } else {
                    posWin = 15 - posWin
                    if (isAvailablePositionToPlay(posWin - 1)) {
                        //console.log(`l'IA gagnera à la position ${posWin} pour la DIAGONALE 2 : position disponible`)
                        posResult = posWin
                        return true
                    } else {
                        //console.log(`l'IA gagnera à la position ${posWin} pour la DIAGONALE 2 : position déjà occupé`)
                        posResult = posWin
                        return false
                    }

                }
            } else {
                //console.log('Aucun moyen de gagner en DIAGONALE 2 par l IA')
                posResult = 100
                return false
            }
        }
        if (result()) {
            //console.log('POSSIBILITE DE GAGNER EN DIAGONALE 2')
            positionAICanWin = posResult;
            return true
        } else {
            positionAICanWin = 500;
            return false

        }

    }

}


async function UserAvailablePositionToWinInColumn() {
    let result = false;
    let posWin = 0;
    let posResult = 500
    positionUSERCanWin = 500
    //Verification de la colonne 1
    result = await

    function () {
        if (GameProgress.user.column.col1.length >= 2) {
            posWin = GameProgress.user.column.col1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (posWin === 18) {
                console.log('Déjà gagné')
                posResult = 120
                return false
            } else {
                posWin = 18 - posWin
                if (isAvailablePositionToPlay(posWin - 1)) {
                    //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la colonne 1 : position disponible`)
                    posResult = posWin
                    return true
                } else {
                    //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la colonne 1 : position déjà occupé`)
                    posResult = posWin
                    return false
                }
            }
        } else {
            //console.log('Aucun moyen de gagner en colonne 1 par l  UTILISATEUR')
            posResult = 100
            return false
        }

    }
    if (result()) {
        //console.log('POSSIBILITE DE GAGNER EN COLONNE 1 UTILISATEUR')
        positionUSERCanWin = posResult;
        return true
    } else {
        //Verification de la colonne 2
        result = await

        function () {
            if (GameProgress.user.column.col2.length >= 2) {
                posWin = GameProgress.user.column.col2.reduce(function (a, b) {
                    return a + b
                }, 0)
                if (posWin === 15) {
                    console.log('Déjà gagné')
                    posResult = 120
                    return false
                } else {
                    posWin = 15 - posWin
                    if (isAvailablePositionToPlay(posWin - 1)) {
                        //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la colonne 2 : position disponible`)
                        posResult = posWin
                        return true
                    } else {
                        //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la colonne 2 : position déjà occupé`)
                        posResult = posWin
                        return false
                    }

                }
            } else {
                //console.log('Aucun moyen de gagner en colonne 2 par l  UTILISATEUR')
                posResult = 100
                return false
            }
        }
        if (result()) {
            //console.log('POSSIBILITE DE GAGNER EN COLONNE 2 UTILISATEUR')
            positionUSERCanWin = posResult;
            return true
        } else {
            //Verification de la colonne 3
            result = await

            function () {
                if (GameProgress.user.column.col3.length >= 2) {
                    posWin = GameProgress.user.column.col3.reduce(function (a, b) {
                        return a + b
                    }, 0)
                    if (posWin === 12) {
                        console.log('Déjà gagné')
                        posResult = 120
                        return false
                    } else {
                        posWin = 12 - posWin
                        if (isAvailablePositionToPlay(posWin - 1)) {
                            //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la colonne 3 : position disponible`)
                            posResult = posWin
                            return true
                        } else {
                            //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la colonne 3 : position déjà occupé`)
                            posResult = posWin
                            return false
                        }
                    }
                } else {
                    //console.log('Aucun moyen de gagner en colonne 3 par l  UTILISATEUR')
                    posResult = 100
                    return false
                }

            }

            if (result()) {
                //console.log('POSSIBILITE DE GAGNER EN COLONNE 3 UTILISATEUR')
                positionUSERCanWin = posResult;
                return true
            } else {
                positionUSERCanWin = 500;
                return false
            }
        }

    }


}


async function UserAvailablePositionToWinInRow() {
    let result = false;
    let posWin = 0;
    let posResult = 500
    positionUSERCanWin = 500
    //Verification de la ligne 1
    result = await

    function () {
        if (GameProgress.user.row.row1.length >= 2) {
            posWin = GameProgress.user.row.row1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (posWin === 6) {
                console.log('Déjà gagné')
                posResult = 120
                return false
            } else {
                posWin = 6 - posWin
                if (isAvailablePositionToPlay(posWin - 1)) {
                    //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la ligne 1 : position disponible`)
                    posResult = posWin
                    return true
                } else {
                    //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la ligne 1 : position déjà occupé`)
                    posResult = posWin
                    return false
                }
            }
        } else {
            //console.log('Aucun moyen de gagner en ligne 1 par l  UTILISATEUR')
            posResult = 100
            return false
        }

    }
    if (result()) {
        //console.log('POSSIBILITE DE GAGNER EN LIGNE 1 UTILISATEUR')
        positionUSERCanWin = posResult;
        return true
    } else {
        //Verification de la ligne 2
        result = await

        function () {
            if (GameProgress.user.row.row2.length >= 2) {
                posWin = GameProgress.user.row.row2.reduce(function (a, b) {
                    return a + b
                }, 0)
                if (posWin === 15) {
                    console.log('Déjà gagné')
                    posResult = 120
                    return false
                } else {
                    posWin = 15 - posWin
                    if (isAvailablePositionToPlay(posWin - 1)) {
                        //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la ligne 2 : position disponible`)
                        posResult = posWin
                        return true
                    } else {
                        //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la ligne 2 : position déjà occupé`)
                        posResult = posWin
                        return false
                    }

                }
            } else {
                //console.log('Aucun moyen de gagner en ligne 2 par l  UTILISATEUR')
                posResult = 100
                return false
            }
        }
        if (result()) {
            //console.log('POSSIBILITE DE GAGNER EN LIGNE 2 UTILISATEUR')
            positionUSERCanWin = posResult;
            return true
        } else {
            //Verification de la ligne 3
            result = await

            function () {
                if (GameProgress.user.row.row3.length >= 2) {
                    posWin = GameProgress.user.row.row3.reduce(function (a, b) {
                        return a + b
                    }, 0)
                    if (posWin === 24) {
                        console.log('Déjà gagné')
                        posResult = 120
                        return false
                    } else {
                        posWin = 24 - posWin
                        if (isAvailablePositionToPlay(posWin - 1)) {
                            //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la ligne 3 : position disponible`)
                            posResult = posWin
                            return true
                        } else {
                            //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la ligne 3 : position déjà occupé`)
                            posResult = posWin
                            return false
                        }
                    }
                } else {
                    //console.log('Aucun moyen de gagner en ligne 3 par l  UTILISATEUR')
                    posResult = 100
                    return false
                }

            }

            if (result()) {
                //console.log('POSSIBILITE DE GAGNER EN LIGNE 3 UTILISATEUR')
                positionUSERCanWin = posResult;
                return true
            } else {
                positionUSERCanWin = 500;
                return false
            }
        }

    }

}


async function UserAvailablePositionToWinInDiagonal() {
    let result = false;
    let posWin = 0;
    let posResult = 500
    positionUSERCanWin = 500
    //Verification de la diagonal 1
    result = await

    function () {
        if (GameProgress.user.diagonal.diagonal1.length >= 2) {
            posWin = GameProgress.user.diagonal.diagonal1.reduce(function (a, b) {
                return a + b
            }, 0)
            if (posWin === 15) {
                //                console.log('Déjà gagné')
                posResult = 120
                return false
            } else {
                posWin = 15 - posWin
                if (isAvailablePositionToPlay(posWin - 1)) {
                    //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la DIAGONALE 1 : position disponible`)
                    posResult = posWin
                    return true
                } else {
                    //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la DIAGONALE 1 : position déjà occupé`)
                    posResult = posWin
                    return false
                }
            }
        } else {
            //console.log('Aucun moyen de gagner en DIAGONALE 1 par l  UTILISATEUR')
            posResult = 100
            return false
        }

    }
    if (result()) {
        //console.log('POSSIBILITE DE GAGNER EN DIAGONALE 1 UTILISATEUR')
        positionUSERCanWin = posResult;
        return true
    } else {
        //Verification de la DIAGONALE 2
        result = await

        function () {
            if (GameProgress.user.diagonal.diagonal2.length >= 2) {
                posWin = GameProgress.user.diagonal.diagonal2.reduce(function (a, b) {
                    return a + b
                }, 0)
                if (posWin === 15) {
                    //                    console.log('Déjà gagné')
                    posResult = 120
                    return false
                } else {
                    posWin = 15 - posWin
                    if (isAvailablePositionToPlay(posWin - 1)) {
                        //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la DIAGONALE 2 : position disponible`)
                        posResult = posWin
                        return true
                    } else {
                        //console.log(`l' UTILISATEUR gagnera à la position ${posWin} pour la DIAGONALE 2 : position déjà occupé`)
                        posResult = posWin
                        return false
                    }

                }
            } else {
                //console.log('Aucun moyen de gagner en DIAGONALE 2 par l  UTILISATEUR')
                posResult = 100
                return false
            }
        }
        if (result()) {
            //console.log('POSSIBILITE DE GAGNER EN DIAGONALE 2 UTILISATEUR')
            positionUSERCanWin = posResult;
            return true
        } else {
            positionUSERCanWin = 500;
            return false

        }

    }

}


async function getAvailablePositionAIWin() {
    AvailablePositionToWinInColumn().then(resultCol => {
        if (resultCol) {
            positionAICanWin = positionAICanWin - 1
            //console.log(`POSSIBILITE DE GAGNER EN COLONNE A LA POSITION ${positionAICanWin}`)

        } else {
            AvailablePositionToWinInRow().then(resultRow => {
                if (resultRow) {
                    positionAICanWin = positionAICanWin - 1
                    //console.log(`POSSIBILITE DE GAGNER EN LIGNE A LA POSITION ${positionAICanWin}`)

                } else {
                    AvailablePositionToWinInDiagonal().then(resultDiagonal => {
                        if (resultDiagonal) {
                            positionAICanWin = positionAICanWin - 1
                            //console.log(`POSSIBILITE DE GAGNER EN DIAGONAL A LA POSITION ${positionAICanWin}`)

                        } else {
                            //console.log('AUCUN MOYEN DE GAGNER PAR AI')

                        }
                    }).catch(err => console.log(`erreur lors de la verification de gagner en diagonal \n ${err}`))
                }

            }).catch(err => console.log(`erreur lors de la verification de gagner en ligne \n ${err}`))
        }
    }).catch(err => console.log(`erreur lors de la verification de gagner en colonne \n ${err}`))

}

async function getAvailablePositionUserWin() {
    UserAvailablePositionToWinInColumn().then(resultCol => {
        if (resultCol) {
            positionUSERCanWin = positionUSERCanWin - 1
            //console.log(`POSSIBILITE DE GAGNER EN COLONNE A LA POSITION ${positionUSERCanWin} L"UTILISATEUR`)

        } else {
            UserAvailablePositionToWinInRow().then(resultRow => {
                if (resultRow) {
                    positionUSERCanWin = positionUSERCanWin - 1
                    //console.log(`POSSIBILITE DE GAGNER EN LIGNE A LA POSITION ${positionUSERCanWin} L"UTILISATEUR`)

                } else {
                    UserAvailablePositionToWinInDiagonal().then(resultDiagonal => {
                        if (resultDiagonal) {
                            positionUSERCanWin = positionUSERCanWin - 1
                            //console.log(`POSSIBILITE DE GAGNER EN DIAGONAL A LA POSITION ${positionUSERCanWin} L"UTILISATEUR`)

                        } else {
                            //console.log('AUCUN MOYEN DE GAGNER PAR  L"UTILISATEUR')

                        }
                    }).catch(err => console.log(`erreur lors de la verification de gagner en diagonal L"UTILISATEUR \n ${err}`))
                }

            }).catch(err => console.log(`erreur lors de la verification de gagner en ligne L"UTILISATEUR \n ${err}`))
        }
    }).catch(err => console.log(`erreur lors de la verification de gagner en colonne L"UTILISATEUR \n ${err}`))
}

function canWinInColumn(pos, playerName) {
    let sumResult = 0
    let r = 0
    let s = 0
    let posIncr = 0
    let posResultReturn = '';

    (function () {
        if (playerName === "ai") {
            if (GameProgress.ai.column.col1.length < 3) {
                sumResult = GameProgress.ai.column.col1.reduce(function (a, b) {
                    return a + b
                }, 0)

                if (sumResult === 0) {
                    //                    console.log(`Inutile de jouer à la position ${pos} car le tableau est actuellement vide`)
                } else {
                    posIncr = pos + 1

                    if ((posIncr === 3) || (posIncr === 6) || (posIncr === 9)) {
                        r = sumResult + posIncr

                        r = 18 - r
                        s = r - 1

                        if (isAvailablePositionToPlay(s)) {
                            //                            console.log(`l'ia  pourra  gagne en colonne 1 à la position ${r-1} qui est disponible`)
                            posResultReturn = s.toString()


                        } else {
                            //                            console.log(`l'ia ne pourra pas gagne en colonne 1 à la position ${r-1} qui est indisponible`)

                        }
                    }
                }

            } else {
                //                console.log(`L'IA ne peut gagner en colonne 1 si elle joue la position ${pos}`)

            }
        } else {

        }
    })();

    (function () {
        if (playerName === "ai") {
            if (GameProgress.ai.column.col2.length < 3) {
                sumResult = GameProgress.ai.column.col2.reduce(function (a, b) {
                    return a + b
                }, 0)

                if (sumResult === 0) {

                } else {
                    posIncr = pos + 1

                    if ((posIncr === 2) || (posIncr === 5) || (posIncr === 8)) {
                        r = sumResult + posIncr

                        r = 15 - r
                        s = r - 1
                        if (isAvailablePositionToPlay(s)) {
                            //console.log(`l'ia  pourra  gagne en colonne 2 à la position ${r-1} qui est disponible`)
                            posResultReturn = s.toString()
                        } else {
                            //                            console.log(`l'ia ne pourra pas gagne en colonne 2 à la position ${r-1} qui est indisponible`)

                        }
                    }
                }

            } else {
                //console.log(`L'IA ne peut gagner en colonne 2 si elle joue la position ${pos}`)

            }
        } else {

        }
    })();

    (function () {
        if (playerName === "ai") {
            if (GameProgress.ai.column.col3.length < 3) {
                sumResult = GameProgress.ai.column.col3.reduce(function (a, b) {
                    return a + b
                }, 0)

                if (sumResult === 0) {

                } else {
                    posIncr = pos + 1

                    if ((posIncr === 1) || (posIncr === 4) || (posIncr === 7)) {
                        r = sumResult + posIncr

                        r = 12 - r
                        s = r - 1
                        if (isAvailablePositionToPlay(s)) {
                            //console.log(`l'ia  pourra  gagne en colonne 3 à la position ${r-1} qui est disponible`)
                            posResultReturn = s.toString()
                        } else {
                            //                            console.log(`l'ia ne pourra pas gagne en colonne 3 à la position ${r-1} qui est indisponible`)

                        }
                    }
                }

            } else {
                //console.log(`L'IA ne peut gagner en colonne 3 si elle joue la position ${pos}`)

            }
        } else {

        }
    })();

    if (posResultReturn === '') {
        //console.log('500')
        return '500'
    } else {
        //console.log('no 500')
        return posResultReturn
    }


}

function canWinInRow(pos, playerName) {
    let sumResult = 0
    let r = 0
    let s = 0
    let posIncr = 0
    let posResultReturn = '';

    (function () {
        if (playerName === "ai") {
            if (GameProgress.ai.row.row1.length < 3) {
                sumResult = GameProgress.ai.row.row1.reduce(function (a, b) {
                    return a + b
                }, 0)

                if (sumResult === 0) {
                    //                    console.log(`Inutile de jouer à la position ${pos} car le tableau est actuellement vide`)
                } else {
                    posIncr = pos + 1

                    if ((posIncr === 1) || (posIncr === 2) || (posIncr === 3)) {
                        r = sumResult + posIncr

                        r = 6 - r
                        s = r - 1

                        if (isAvailablePositionToPlay(s)) {
                            //                            console.log(`l'ia  pourra  gagne en ligne 1 à la position ${r-1} qui est disponible`)
                            posResultReturn = s.toString()


                        } else {
                            //                            console.log(`l'ia ne pourra pas gagne en ligne 1 à la position ${r-1} qui est indisponible`)

                        }
                    }
                }

            } else {
                //                console.log(`L'IA ne peut gagner en ligne 1 si elle joue la position ${pos}`)

            }
        } else {

        }
    })();

    (function () {
        if (playerName === "ai") {
            if (GameProgress.ai.row.row2.length < 3) {
                sumResult = GameProgress.ai.row.row2.reduce(function (a, b) {
                    return a + b
                }, 0)

                if (sumResult === 0) {

                } else {
                    posIncr = pos + 1

                    if ((posIncr === 4) || (posIncr === 5) || (posIncr === 6)) {
                        r = sumResult + posIncr

                        r = 15 - r
                        s = r - 1
                        if (isAvailablePositionToPlay(s)) {
                            console.log(`l'ia  pourra  gagne en ligne 2 à la position ${r-1} qui est disponible`)
                            posResultReturn = s.toString()
                        } else {
                            console.log(`l'ia ne pourra pas gagne en ligne 2 à la position ${r-1} qui est indisponible`)

                        }
                    }
                }

            } else {
                console.log(`L'IA ne peut gagner en ligne 2 si elle joue la position ${pos}`)

            }
        } else {

        }
    })();

    (function () {
        if (playerName === "ai") {
            if (GameProgress.ai.row.row3.length < 3) {
                sumResult = GameProgress.ai.row.row3.reduce(function (a, b) {
                    return a + b
                }, 0)

                if (sumResult === 0) {

                } else {
                    posIncr = pos + 1

                    if ((posIncr === 7) || (posIncr === 8) || (posIncr === 9)) {
                        r = sumResult + posIncr

                        r = 24 - r
                        s = r - 1
                        if (isAvailablePositionToPlay(s)) {
                            //                            console.log(`l'ia  pourra  gagne en ligne 3 à la position ${r-1} qui est disponible`)
                            posResultReturn = s.toString()
                        } else {
                            //                            console.log(`l'ia ne pourra pas gagne en ligne 3 à la position ${r-1} qui est indisponible`)

                        }
                    }
                }

            } else {
                //                console.log(`L'IA ne peut gagner en ligne 3 si elle joue la position ${pos}`)

            }
        } else {

        }
    })();

    if (posResultReturn === '') {
        //        console.log('500')
        return '500'
    } else {
        //        console.log('no 500')
        return posResultReturn
    }



}

function canWinInDiagonal(pos, playerName) {
    let sumResult = 0
    let r = 0
    let s = 0
    let posIncr = 0
    let posResultReturn = '';

    (function () {
        if (playerName === "ai") {
            if (GameProgress.ai.diagonal.diagonal1.length < 3) {
                sumResult = GameProgress.ai.diagonal.diagonal1.reduce(function (a, b) {
                    return a + b
                }, 0)

                if (sumResult === 0) {
                    //                    console.log(`Inutile de jouer à la position ${pos} car le tableau est actuellement vide`)
                } else {
                    posIncr = pos + 1

                    if ((posIncr === 1) || (posIncr === 5) || (posIncr === 9)) {
                        r = sumResult + posIncr

                        r = 15 - r
                        s = r - 1

                        if (isAvailablePositionToPlay(s)) {
                            //                            console.log(`l'ia  pourra  gagne en diagonale 1 à la position ${r-1} qui est disponible`)
                            posResultReturn = s.toString()


                        } else {
                            //                            console.log(`l'ia ne pourra pas gagne en diagonale 1 à la position ${r-1} qui est indisponible`)

                        }
                    }
                }

            } else {
                //                console.log(`L'IA ne peut gagner en diagonale 1 si elle joue la position ${pos}`)

            }
        } else {

        }
    })();

    (function () {
        if (playerName === "ai") {
            if (GameProgress.ai.diagonal.diagonal2.length < 3) {
                sumResult = GameProgress.ai.diagonal.diagonal2.reduce(function (a, b) {
                    return a + b
                }, 0)

                if (sumResult === 0) {

                } else {
                    posIncr = pos + 1

                    if ((posIncr === 7) || (posIncr === 5) || (posIncr === 3)) {
                        r = sumResult + posIncr

                        r = 15 - r
                        s = r - 1
                        if (isAvailablePositionToPlay(s)) {
                            //                            console.log(`l'ia  pourra  gagne en diagonale 2 à la position ${r-1} qui est disponible`)
                            posResultReturn = s.toString()
                        } else {
                            //                            console.log(`l'ia ne pourra pas gagne en diagonale 2 à la position ${r-1} qui est indisponible`)

                        }
                    }
                }

            } else {
                //                console.log(`L'IA ne peut gagner en diagonale 2 si elle joue la position ${pos}`)

            }
        } else {

        }
    })();
    if (posResultReturn === '') {
        //        console.log('500')
        return '500'
    } else {
        //        console.log('no 500')
        return posResultReturn
    }
}

function inspectorePosWinRow(position) {
    let WinRow = canWinInRow(position, "ai")
    //console.log(`valeur ligne win :${WinRow}`)
    return WinRow

}

function inspectorePosWinCol(position) {
    let WinCol = canWinInColumn(position, "ai")
    //console.log(`valeur colonne win :${WinCol}`)
    return WinCol

}

function inspectorePosWinDiagonal(position) {
    let WinDiagonal = canWinInDiagonal(position, "ai")
    //console.log(`valeur diagonal win :${WinDiagonal}`)
    return WinDiagonal

}

function getPosWinAI(col, row, diagonal) {
    let Column = []
    let Rows = []
    let Diagonal = []
    let arrayPos
    let DuplicatesValues = []
    if (col !== '500') {
        //        console.log('col yes' + col)
        Column = col.split('#')
    }
    if (row !== '500') {
        //        console.log('r yes' + row)
        Rows = row.split('#')
    }
    if (diagonal !== '500') {
        //        console.log('d yes' + diagonal)
        Diagonal = diagonal.split('#')
    }
    //    console.log(`Array col ${Column.length}`)
    //    console.log(`Array Rows ${Rows.length}`)
    //    console.log(`Array Diagonal ${Diagonal.length}`)
    if (Column.length > 0) {

        if (Rows.length > 0) {
            if (Diagonal.length > 0) {
                arrayPos = Column.concat(Rows, Diagonal)
            } else {
                arrayPos = Column.concat(Rows)
            }

        } else if (Diagonal.length > 0) {
            arrayPos = Column.concat(Diagonal)
        } else {
            arrayPos = Column
        }
    } else if (Rows.length > 0) {

        if (Diagonal.length > 0) {
            arrayPos = Rows.concat(Diagonal)
        } else {
            arrayPos = Rows
        }
    } else if (Diagonal.length > 0) {

        arrayPos = Diagonal
    } else {

        arrayPos = []
    }
    if (arrayPos.length === 0) {
        return false;
    } else {
        let valuePos = arrayPos.sort()
        //        console.log(`les valeurs des positions disponible ${valuePos}`)
        for (let i = 0; i < valuePos.length; i++) {
            if (valuePos[i] === valuePos[i + 1]) {
                DuplicatesValues.push(valuePos[i])
            }
        }

        if (DuplicatesValues.length === 0) {
            //            console.log('pas des positions optimales pour gagner' + valuePos[valuePos.length - 1])
            return getRandomPos(valuePos)
        } else {
            //            console.log(`les valeurs des positions optimales pour gagner ${DuplicatesValues}`)
            return DuplicatesValues[0]
        }

    }


}

function getBestPositionPlay() {
    let posAvailable = getAllPositionAvailable()
    let resultColumn = ''
    let resultRows = ''
    let resultDiagonals = ''
    let resultCol = ''
    let resultRow = ''
    let resultD = ''
    //console.log('les positions disponibles : \n' + posAvailable)
    posAvailable.forEach(pos => {
        //console.log(`POSITION ACTUELLEMENT DEMANDEE ${pos}`)
        resultCol = inspectorePosWinCol(pos)
        resultRow = inspectorePosWinRow(pos)
        resultD = inspectorePosWinDiagonal(pos)
        if (resultCol !== '500') {
            if (resultColumn === '') {
                resultColumn += resultCol
            } else {
                resultColumn += '#' + resultCol
            }
        }
        if (resultRow !== '500') {
            if (resultRows === '') {
                resultRows += resultRow
            } else {
                resultRows += '#' + resultRow
            }
        }
        if (resultD !== '500') {
            if (resultDiagonals === '') {
                resultDiagonals += resultD
            } else {
                resultDiagonals += '#' + resultD
            }
        }

    })
    if (resultColumn !== '') {
        //        console.log(`POSITION POUR GAGNER PAR l'IA en COLONNE \n ${resultColumn}`)
    } else {
        //        console.log('Aucune position pour gagner en colonne!!!')
        resultColumn = "500"
    }
    if (resultRows !== '') {
        //        console.log(`POSITION POUR GAGNER PAR l'IA en Ligne \n ${resultRows}`)
    } else {
        //        console.log('Aucune position pour gagner en Ligne!!!')
        resultRows = "500"
    }
    if (resultDiagonals !== '') {
        //        console.log(`POSITION POUR GAGNER PAR l'IA en Diagonale \n ${resultDiagonals}`)
    } else {
        //        console.log('Aucune position pour gagner en Diagonale!!!')
        resultDiagonals = "500"
    }
    let result = getPosWinAI(resultColumn, resultRows, resultDiagonals)
    if (result === false) {
        return getRandomPos(getAllPositionAvailable())
    } else {
        return result
    }
}
const UserSumColumnPlayer = () => {
    if (GameProgress.user.column.col1.length === 3) {
        sumUSerWin = GameProgress.user.column.col1.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumUSerWin === 18) {
            SquareWinMode(2, 5, 8)
            return true
        } else {
            return false;
        }
    } else if (GameProgress.user.column.col2.length === 3) {
        sumUSerWin = GameProgress.user.column.col2.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumUSerWin === 15) {
            SquareWinMode(1, 4, 7)
            return true
        } else {
            return false;
        }
    } else if (GameProgress.user.column.col3.length === 3) {
        sumUSerWin = GameProgress.user.column.col3.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumUSerWin === 12) {
            SquareWinMode(0, 3, 6)
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const UserSumRowsPlayer = () => {
    if (GameProgress.user.row.row1.length === 3) {
        sumUSerWin = GameProgress.user.row.row1.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumUSerWin === 6) {
            SquareWinMode(0, 1, 2)
            return true
        } else {
            return false;
        }
    } else if (GameProgress.user.row.row2.length === 3) {
        sumUSerWin = GameProgress.user.row.row2.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumUSerWin === 15) {
            SquareWinMode(3, 4, 5)
            return true
        } else {
            return false;
        }
    } else if (GameProgress.user.row.row3.length === 3) {
        sumUSerWin = GameProgress.user.row.row3.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumUSerWin === 24) {
            SquareWinMode(6, 7, 8)
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const UserSumDiagonalPlayer = () => {
    if (GameProgress.user.diagonal.diagonal1.length === 3) {
        sumUSerWin = GameProgress.user.diagonal.diagonal1.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumUSerWin === 15) {
            SquareWinMode(0, 4, 8)
            return true
        } else {
            return false;
        }
    } else if (GameProgress.user.diagonal.diagonal2.length === 3) {
        sumUSerWin = GameProgress.user.diagonal.diagonal2.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumUSerWin === 15) {
            SquareWinMode(6, 4, 2)
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}


const AiSumColumnPlayer = () => {
    if (GameProgress.ai.column.col1.length === 3) {
        sumAiWin = GameProgress.ai.column.col1.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumAiWin === 18) {
            SquareWinMode(2, 5, 8)
            return true
        } else {
            return false;
        }
    } else if (GameProgress.ai.column.col2.length === 3) {
        sumAiWin = GameProgress.ai.column.col2.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumAiWin === 15) {
            SquareWinMode(1, 4, 7)
            return true
        } else {
            return false;
        }
    } else if (GameProgress.ai.column.col3.length === 3) {
        sumAiWin = GameProgress.ai.column.col3.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumAiWin === 12) {
            SquareWinMode(0, 3, 6)
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const AiSumRowsPlayer = () => {
    if (GameProgress.ai.row.row1.length === 3) {
        sumAiWin = GameProgress.ai.row.row1.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumAiWin === 6) {
            SquareWinMode(0, 1, 2)
            return true
        } else {
            return false;
        }
    } else if (GameProgress.ai.row.row2.length === 3) {
        sumAiWin = GameProgress.ai.row.row2.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumAiWin === 15) {
            SquareWinMode(3, 4, 5)
            return true
        } else {
            return false;
        }
    } else if (GameProgress.ai.row.row3.length === 3) {
        sumAiWin = GameProgress.ai.row.row3.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumAiWin === 24) {
            SquareWinMode(6, 7, 8)
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const AiSumDiagonalPlayer = () => {
    if (GameProgress.ai.diagonal.diagonal1.length === 3) {
        sumAiWin = GameProgress.ai.diagonal.diagonal1.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumAiWin === 15) {
            SquareWinMode(0, 4, 8)
            return true
        } else {
            return false;
        }
    } else if (GameProgress.ai.diagonal.diagonal2.length === 3) {
        sumAiWin = GameProgress.ai.diagonal.diagonal2.reduce(function (a, b) {
            return a + b
        }, 0)
        if (sumAiWin === 15) {
            SquareWinMode(6, 4, 2)
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const AIIsWin = () => {
    AiSumColumnPlayer()
    AiSumRowsPlayer()
    AiSumDiagonalPlayer()
    GameProgressSinglePlayer = 9
    GameEND = true
    setTimeout(() => {
        document.querySelector('.avatar-result div').innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><radialGradient id="DmwaMhFq9OAoQrQ1~aLDTa" cx="-384" cy="24" r="18" fx="-384.095" fy="16.289" gradientTransform="matrix(-1 0 0 1 -360 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe16e"/><stop offset=".629" stop-color="#ffd426"/><stop offset=".72" stop-color="#fdcd23"/><stop offset=".854" stop-color="#f8b919"/><stop offset="1" stop-color="#f09c0c"/></radialGradient><circle cx="24" cy="24" r="18" fill="url(#DmwaMhFq9OAoQrQ1~aLDTa)"/><path fill="#805b2a" d="M36.457,18.998c-0.827-0.044-1.607-0.148-2.403-0.292c-0.792-0.146-1.578-0.339-2.357-0.584 c-1.551-0.501-3.088-1.233-4.413-2.402c-0.422-0.372-0.462-1.015-0.09-1.437s1.015-0.462,1.437-0.09 c0.029,0.026,0.056,0.052,0.081,0.08l0.006,0.007c0.916,1.013,2.161,1.819,3.517,2.425c1.356,0.598,2.841,1.047,4.309,1.297 l0.024,0.004c0.272,0.047,0.455,0.305,0.409,0.577C36.933,18.836,36.707,19.012,36.457,18.998z"/><path fill="#805b2a" d="M11.457,18.002c1.468-0.251,2.953-0.7,4.309-1.297c1.356-0.606,2.602-1.412,3.517-2.425l0.005-0.006 c0.377-0.417,1.021-0.45,1.438-0.073c0.417,0.377,0.45,1.021,0.073,1.438c-0.026,0.029-0.054,0.056-0.082,0.081 c-1.326,1.169-2.863,1.901-4.413,2.402c-0.779,0.245-1.566,0.439-2.357,0.584c-0.796,0.144-1.577,0.248-2.403,0.292 c-0.276,0.015-0.511-0.197-0.526-0.473c-0.014-0.256,0.168-0.477,0.415-0.519L11.457,18.002z"/><radialGradient id="DmwaMhFq9OAoQrQ1~aLDTb" cx="-37.244" cy="3.51" r="3.326" gradientTransform="matrix(.0157 1.116 -3.2952 .1212 36.148 72.85)" gradientUnits="userSpaceOnUse"><stop offset=".629" stop-color="#ffe16e"/><stop offset=".871" stop-color="#ffe16e" stop-opacity="0"/></radialGradient><path fill="url(#DmwaMhFq9OAoQrQ1~aLDTb)" d="M19.17,34.252c0,0,1.116,0.748,4.83,0.748c3.44,0,4.827-0.748,4.827-0.748s-0.863-1.485-4.827-1.485S19.17,34.252,19.17,34.252z"/><radialGradient id="DmwaMhFq9OAoQrQ1~aLDTc" cx="652.039" cy="-936.793" r="8.277" gradientTransform="matrix(-.618 0 0 -.3776 426.964 -320.949)" gradientUnits="userSpaceOnUse"><stop offset=".284" stop-color="#cc9000"/><stop offset="1" stop-color="#cc9000" stop-opacity="0"/></radialGradient><path fill="url(#DmwaMhFq9OAoQrQ1~aLDTc)" d="M24,34c3.392,0,4.31,0.609,4.31,0.609S27.43,36,24,36s-4.31-1.391-4.31-1.391S20.608,34,24,34z"/><radialGradient id="DmwaMhFq9OAoQrQ1~aLDTd" cx="-1277.756" cy="-651.62" r="15.654" gradientTransform="matrix(.35 0 0 -.1877 471.199 -88.754)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1c1911"/><stop offset=".999" stop-color="#171714"/></radialGradient><path fill="url(#DmwaMhFq9OAoQrQ1~aLDTd)" d="M28.701,34.195c0.501,0.276,0.995-0.358,0.608-0.779C28.185,32.194,26.458,31,24,31s-4.185,1.194-5.309,2.416c-0.387,0.421,0.107,1.055,0.608,0.779C20.45,33.559,22.024,33,24,33S27.55,33.559,28.701,34.195z"/><circle cx="17" cy="24" r="4" fill="#fff"/><circle cx="17" cy="24" r="2" fill="#212121"/><circle cx="31" cy="24" r="4" fill="#fff"/><circle cx="31" cy="24" r="2" fill="#212121"/><radialGradient id="DmwaMhFq9OAoQrQ1~aLDTe" cx="39.056" cy="30.479" r="4.596" fx="36.945" fy="30.485" gradientTransform="matrix(0 -1 .8265 0 13.866 69.534)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3f1ff"/><stop offset=".166" stop-color="#9ee4fc"/><stop offset=".509" stop-color="#68c2f3"/><stop offset=".996" stop-color="#118ce6"/><stop offset="1" stop-color="#108ce6"/></radialGradient><path fill="url(#DmwaMhFq9OAoQrQ1~aLDTe)" d="M42,32c0,1.657-1.343,3-3,3s-3-1.343-3-3c0-2.4,2.4-8,3-8S42,29.6,42,32z"/></svg>
`
        document.querySelector('.text-result').textContent = `YOU LOSE !!!`
        document.querySelector('.modal-result-game').classList.toggle('visible')
    }, 500)
}

const UserIsWin = () => {
    if (UserSumColumnPlayer()) {
        return true
    } else if (UserSumRowsPlayer()) {
        return true
    } else if (UserSumDiagonalPlayer()) {
        return true
    } else {
        return false
    }
}

function Ai_Played() {
    let NextPlayer = 0
    let Comparaison = 0
    if (GameProgressSinglePlayer < 9) {
        if (playerConfig.defaultPlayer === 'ai') {
            NextPlayer = 1
            Comparaison = 3
        } else {
            NextPlayer = 0
            Comparaison = 1
        }

        if (GameProgressSinglePlayer <= Comparaison) {
            let postionToPlay = getRandomPos(getAllPositionAvailable())
            SetProgessAI(postionToPlay)
            AIplay(postionToPlay)
            GameProgressSinglePlayer++
            setTimeout(() => {
                palyerSelect(NextPlayer)
                AIisPlay = false;
            }, 100)
        } else {
            //console.log('logic played AI...')
            getAvailablePositionAIWin()
            setTimeout(() => {
                if (positionAICanWin < 100) {
                    //console.log(`POSITION POUR GAGNER EST : ${positionAICanWin}`)
                    SetProgessAI(positionAICanWin)
                    AIplay(positionAICanWin)
                    AIIsWin()
                    //console.log('AI IS WINNER !!!!!!')
                } else {
                    getAvailablePositionUserWin()
                    //console.log(`AUCUNE POSITION POUR GAGNER positionAICanWin = ${positionAICanWin}`)
                    setTimeout(() => {
                        if (positionUSERCanWin < 100) {
                            //console.log(`POSITION POUR GAGNER PAR L'UTILISATEUR EST : ${positionUSERCanWin}`)
                            SetProgessAI(positionUSERCanWin)
                            AIplay(positionUSERCanWin)
                            GameProgressSinglePlayer++
                            palyerSelect(NextPlayer)
                            AIisPlay = false;
                            if (GameProgressSinglePlayer === 9) {
                                //console.log('GAME END')
                                EqualityGame()
                            }

                        } else {
                            //console.log(`AUCUNE POSITION POUR GAGNER PAR L'UTILISATEUR positionAICanWin = ${positionUSERCanWin}`)
                            //console.log('GET THE BEST POSITION TO PLAY')
                            if (GameProgressSinglePlayer === 8) {
                                //une seule case disponible
                                let posToplay = getAllPositionAvailable()
                                if (isAvailablePositionToPlay(posToplay[0])) {
                                    SetProgessAI(posToplay[0])
                                    AIplay(posToplay[0])
                                    GameProgressSinglePlayer = 9
                                    AIisPlay = false;
                                    //console.log('GAME END')
                                    EqualityGame()
                                }
                            } else {
                                //console.log('SEARCH THE BEST POSITION TO WIN')
                                let posPlayAI = getBestPositionPlay()
                                SetProgessAI(posPlayAI)
                                AIplay(posPlayAI)
                                GameProgressSinglePlayer++
                                palyerSelect(NextPlayer)
                                AIisPlay = false;
                            }

                        }
                    }, 600)
                }
            }, 500)
        }

    } else {
        //console.log('GAME END')
        EqualityGame()
    }

}



function User_Played(SquareSelect, IndexSquareSelect) {
    if (GameProgressSinglePlayer < 9) {
        if (!AIisPlay) {
            if (isAvailablePositionToPlay(IndexSquareSelect)) {
                SetProgessUser(IndexSquareSelect)
                UserGamePlay(IndexSquareSelect)
                if (UserIsWin()) {
                    GameProgressSinglePlayer = 9
                    GameEND = true
                    setTimeout(() => {
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
                        document.querySelector('.text-result').textContent = `YOU WINNER `
                        document.querySelector('.modal-result-game').classList.toggle('visible')
                    }, 500)
                } else {
                    if (GameProgressSinglePlayer === 9) {
                        EqualityGame()
                        GameProgressSinglePlayer = 9
                        GameEND = true
                    } else {
                        if (playerConfig.defaultPlayer === 'ai') {
                            palyerSelect(0)
                        } else {
                            palyerSelect(1)
                        }
                        AIisPlay = true;
                        GameProgressSinglePlayer++
                        Ai_Played()
                    }

                }

            }
        }

    } else {
        EqualityGame()
    }
}
