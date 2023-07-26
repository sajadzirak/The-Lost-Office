const questionMark = './images/question.png'
const checkMark = './images/check-mark.png'

const charactars = [
    {
        name: 'michael',
        img: './images/michael.JPEG'
    },
    {
        name: 'jim',
        img: './images/jim.JPEG'
    },
    {
        name: 'pam',
        img: './images/pam.JPEG'
    },
    {
        name: 'dwight',
        img: './images/dwight.JPEG'
    },
    {
        name: 'kevin',
        img: './images/kevin.png'
    },
    {
        name: 'ryan',
        img: './images/ryan.png'
    },
    {
        name: 'angela',
        img: './images/angela.JPEG'
    },
    {
        name: 'darryl',
        img: './images/darryl.png'
    },
    {
        name: 'michael',
        img: './images/michael.JPEG'
    },
    {
        name: 'jim',
        img: './images/jim.JPEG'
    },
    {
        name: 'pam',
        img: './images/pam.JPEG'
    },
    {
        name: 'dwight',
        img: './images/dwight.JPEG'
    },
    {
        name: 'kevin',
        img: './images/kevin.png'
    },
    {
        name: 'ryan',
        img: './images/ryan.png'
    },
    {
        name: 'angela',
        img: './images/angela.JPEG'
    },
    {
        name: 'darryl',
        img: './images/darryl.png'
    }
]
let tileChosen = []
let tileChosenId = []
let founds = []

const board = document.querySelector('#board')
const resetBtn = document.querySelector("#resetbtn")

intro()
initializeGame()
resetBtn.addEventListener('click', resetGame)

function intro() {
    alert(`Oh you're here! Thanks god. We lost everybody in the office. I hope that you can find them.`)
}

function initializeGame() {
    cleanTheBoard()
    shuffle()
    charactars.forEach((element, index, array) => {
        let tile = document.createElement('img')
        tile.setAttribute('src', questionMark)
        tile.setAttribute('data-id', index)
        tile.addEventListener('click', tileClicked)
        board.append(tile)
    })
}

function cleanTheBoard() {
    child = board.firstChild
    while(child) {
        board.removeChild(child)
        child = board.firstChild
    }
}

function shuffle() {
    charactars.forEach( (element, index, array) => {
        let i = Math.floor(Math.random()*array.length)
        array[index] = array[i]
        array[i] = element
    }
    )
}

function tileClicked() {
    const id = Number(this.getAttribute('data-id'))
    this.setAttribute('src', charactars[id].img)
    tileChosen.push(charactars[id].name)
    tileChosenId.push(id)
    if(tileChosenId[0] === tileChosenId[1]) {
        tileChosen.pop()
        tileChosenId.pop()
    }
    if(tileChosen.length == 2) {
        checkMatch()
    }
}

function checkMatch() {
    const tiles = document.querySelectorAll('#board img')
    let idOne = tileChosenId[0]
    let idTwo = tileChosenId[1]
    if(tileChosen[0] === tileChosen[1]) {
        let charactarName = tileChosen[0]
        tileChosen = []
        tileChosenId = []
        tiles[idOne].removeEventListener('click', tileClicked)
        tiles[idTwo].removeEventListener('click', tileClicked)
        founds.push(charactarName)
        setTimeout(() => {
            tiles[idOne].setAttribute('src', checkMark)
            tiles[idOne].style.cursor = 'default'
            tiles[idTwo].setAttribute('src', checkMark)
            tiles[idTwo].style.cursor = 'default'
        }, 350)
        if(founds.length === charactars.length/2 ) {
            setTimeout(finishGame, 650)
        }
    }
    else if (tileChosen[0] != tileChosen[1]) {
        tileChosen = []
        tileChosenId = []
        setTimeout(() => {
            tiles[idOne].setAttribute('src', questionMark)
            tiles[idTwo].setAttribute('src', questionMark)
        }, 350)
    }
}

function resetGame() {
    initializeGame()
    tileChosen = []
    tileChosenId = []
    founds = []
}

function finishGame() {
    alert(`Thanks a lot! You are the office's hero`)
    resetGame()
}