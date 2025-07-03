let wordList = ['above', 'array', 'basic', 'cloth', 'early']
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
let guesses

const messageEl = document.querySelector('#message')
const row1 = document.querySelectorAll('#row1 > div')
const row2 = document.querySelectorAll('#row2 > div')
const row3 = document.querySelectorAll('#row3 > div')
const row4 = document.querySelectorAll('#row4 > div')
const row5 = document.querySelectorAll('#row5 > div')
const row6 = document.querySelectorAll('#row6 > div')

const allRows = document.querySelectorAll('.wordRow > div')

const keyPress = document.querySelectorAll('#playerKeyboard button')

//console.log(allRows)

const init = () => {
  row = ['', '', '', '', '']
  win = false
  lose = false
  tries = 0
  guesses = 0
}

//if (alphabet.includes(wordInput))

const wordInput = (event) => {
  //console.log(event)
  if (event.key === 'Backspace') {
    deleteLetter()
    rowupdate()
  }
  if (event.key === 'Enter') {
    checkWord()
    rowupdate()
    reset()
  }
  if (alphabet.includes(event.key)) {
    input = event.key.toUpperCase()

    placeLetter(input)
    console.log(row)
  }
  rowupdate()
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
  console.log(`guesses =` + guesses)
  if (guesses !== 0) {
    row[guesses] = ''
    guesses--
  }
  rowupdate()
}

const wordChosen = () => {
  word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
  console.log(`the word is ` + word)
}

//checks if the word is correct and if it contains the right letters
const checkWord = () => {
  let correctPoint = 0
  // if (tries === 5) {
  //     return
  //   }
  console.log(`number of tries` + tries)
  if (guesses === 5) {
    for (let i = 0; i < 5; i++) {
      if (word[i] === row[i]) {
        //letter is correct
        console.log('correct letter at index=' + i)
        correctPoint++
        console.log(`correctpoints = ` + correctPoint)
      } else if (word.includes(row[i])) {
        //letter is right but wrong place
        console.log('right letter at index ' + i)
      }
    }
    if (correctPoint === 5) {
      console.log('Correct Word!')
    }
    tries++
  }
}

//current row to be written in
const currentRow = () => {
  switch (tries) {
    case 0:
      return row1
    case 1:
      return row2
    case 2:
      return row3
    case 3:
      return row4
    case 4:
      return row5
    case 5:
      return row6
  }
}

const rowupdate = () => {
  let thisRow = currentRow()
  thisRow.forEach((letter, index) => {
    letter.textContent = row[index]
  })
}

const reset = () => {
  for (i = 0; i < row.length; i++) {
    row[i] = ''
  }
  guesses = 0
}

const keyboardInput = (event) => {
  key = event.target.innerText
  console.log(key)

  if (key === 'DELETE') {
    deleteLetter()
    rowupdate()
  }
  if (key === 'ENTER') {
    checkWord()
    rowupdate()
    reset()
  }
  if (alphabet.includes(key)) {
    input = key.toUpperCase()

    placeLetter(input)
    console.log(row)
  }
  rowupdate()
}

//event
document.addEventListener('keyup', wordInput)
keyPress.forEach((button) => {
  button.addEventListener('click', keyboardInput)
})

//initialize
wordChosen()
init()
