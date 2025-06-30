let wordList = ['above', 'basic', 'decor']

let row
let win
let lose
let score
let tries //how many rows needed to win

const messageEl = document.querySelector('#message')
const row1 = document.querySelectorAll('#row1 > div')
const row2 = document.querySelectorAll('#row2 > div')
const row3 = document.querySelectorAll('#row3 > div')
const row4 = document.querySelectorAll('#row4 > div')
const row5 = document.querySelectorAll('#row5 > div')
const row6 = document.querySelectorAll('#row6 > div')

const init = () => {
  row = ['', '', '', '', '']
  win = false
  lose = false
  tries = 0
}

updateRow = () => {
  row1.forEach((letter, index) => {
    letter.textContent = row[index]
  })
}
init()
const test = () => {
  let X = 'Hello'

  row1.forEach((word, index) => {
    word.textContent = X[index]
  })
}

test()
