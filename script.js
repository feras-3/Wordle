let wordList = ['above', 'basic', 'decor']
let alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

let row
let win
let lose
let score
let tries //how many rows needed to win
let guesses = 0

const messageEl = document.querySelector('#message')
const row1 = document.querySelectorAll('#row1 > div')
// const row2 = document.querySelectorAll('#row2 > div')
// const row3 = document.querySelectorAll('#row3 > div')
// const row4 = document.querySelectorAll('#row4 > div')
// const row5 = document.querySelectorAll('#row5 > div')
// const row6 = document.querySelectorAll('#row6 > div')

const allRows = document.querySelectorAll('.wordRow > div')

//console.log(allRows)

const init = () => {
  row = ['', '', '', '', '']
  win = false
  lose = false
  tries = 0
  console.log('initialized')
}

//add index to the method then incen=rement it as the user does more "tries"
//if (alphabet.includes(wordInput))
//   allRows.forEach((letter) => {
//     letter.textContent = wordInput
const wordInput = (event) => {
  if (alphabet.includes(event.key)) {
    input = event.key

    placeLetter(input)
    console.log(row)
    rowupdate()
  }
}

const rowupdate = () => {
  row1.forEach((letter, index) => {
    letter.textContent = row[index]
  })
}

const placeLetter = (input) => {
  if (guesses === 5) {
    return
  } else
    for (i = 0; i < guesses; i++) {
      row[guesses] = input
      console.log(row)
    }
  guesses++
}

//event
document.addEventListener('keyup', wordInput)

//initialize
init()
