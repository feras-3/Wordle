let wordList = ['above', 'array', 'basic', 'decor']
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

let word
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
}

//add index to the method then incen=rement it as the user does more "tries"
//if (alphabet.includes(wordInput))
//   allRows.forEach((letter) => {
//     letter.textContent = wordInput
const wordInput = (event) => {
  //console.log(event)
  if (event.key === 'Backspace') {
    deleteLetter()
    rowupdate()
  }
  if (event.key === 'Enter') {
    checkWord()
    rowupdate()
  }
  if (alphabet.includes(event.key)) {
    input = event.key
    placeLetter(input)
    console.log(row)
    rowupdate()
  }
  rowupdate()
}

const rowupdate = () => {
  row1.forEach((letter, index) => {
    letter.textContent = row[index]
  })
}

const placeLetter = (input) => {
  if (guesses === 5) {
    return
  } else if (input !== undefined) {
    //console.log(guesses)

    //console.log(guesses)
    row[guesses] = input
    console.log(row)

    guesses++
  }
}

const deleteLetter = () => {
  console.log(`delete funcion guesses =` + guesses)
  if (guesses !== 0) {
    row[guesses] = ''
    guesses--
    console.log(`delete funcion row =` + row)
  }
  rowupdate()
}

const wordChosen = () => {
  word = wordList[Math.floor(Math.random() * wordList.length)]
  console.log(`the word is ` + word)
}

const checkWord = () => {
  let correctPoint = 0
  if (guesses === 5) {
    for (i = 0; i < 5; i++) {
      if (word[i] === row[i]) {
        console.log('correct letter at index=' + i)
        correctPoint++
        console.log(`correctpoints = ` + correctPoint)

        console.log(row[i])
        console.log(word[i])
      } else if (word.includes(row[i])) {
        console.log('right letter at index' + i)
        console.log(row[i])
      }
    }
    if (correctPoint === 5) {
      console.log('Correct Word')
    }
  }
}

//event
document.addEventListener('keyup', wordInput)

//initialize
wordChosen()
init()
