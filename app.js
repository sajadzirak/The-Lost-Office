const questionMark = './images/question.png'
const checkMark = './images/check-mark.png'

const tiles = [
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

const board = document.querySelector('#board')
const resetBtn = document.querySelector("#reset")

initializeGame()


function initializeGame() {
    shuffle()
    tiles.forEach((element, index, array) => {
        let tile = document.createElement('img')
        tile.setAttribute('src', questionMark)
        tile.setAttribute('data-id', index)
        tile.addEventListener('click', tileClicked)
        board.append(tile)
    })
}

function shuffle() {
    tiles.forEach( (element, index, array) => {
        let i = Math.floor(Math.random()*array.length)
        array[index] = array[i]
        array[i] = element
    }
    )
}

function tileClicked() {
    this.setAttribute('src', tiles[Number(this.getAttribute('data-id'))].img)
}


