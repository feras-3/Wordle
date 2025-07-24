//word list from: https://byjus.com/english/5-letter-words/
let wordList = [
  'About',
  'Alert',
  'Argue',
  'Beach',
  'Above',
  'Alike',
  'Arise',
  'Began',
  'Abuse',
  'Alive',
  'Array',
  'Begin',
  'Actor',
  'Allow',
  'Aside',
  'Begun',
  'Acute',
  'Alone',
  'Asset',
  'Being',
  'Admit',
  'Along',
  'Audio',
  'Below',
  'Adopt',
  'Alter',
  'Audit',
  'Bench',
  'Adult',
  'Among',
  'Avoid',
  'After',
  'Anger',
  'Award',
  'Birth',
  'Again',
  'Angle',
  'Aware',
  'Black',
  'Agent',
  'Angry',
  'Badly',
  'Blame',
  'Agree',
  'Apart',
  'Baker',
  'Blind',
  'Ahead',
  'Apple',
  'Bases',
  'Block',
  'Alarm',
  'Apply',
  'Basic',
  'Board',
  'Album',
  'Arena',
  'Basis',
  'Boost',
  'Buyer',
  'China',
  'Cover',
  'Booth',
  'Cable',
  'Chose',
  'Craft',
  'Bound',
  'Calif',
  'Civil',
  'Crash',
  'Brain',
  'Carry',
  'Claim',
  'Cream',
  'Brand',
  'Catch',
  'Class',
  'Crime',
  'Bread',
  'Cause',
  'Clean',
  'Cross',
  'Break',
  'Chain',
  'Clear',
  'Crowd',
  'Breed',
  'Chair',
  'Click',
  'Crown',
  'Brief',
  'Chart',
  'Clock',
  'Curve',
  'Bring',
  'Chase',
  'Close',
  'Cycle',
  'Broad',
  'Cheap',
  'Coach',
  'Daily',
  'Broke',
  'Check',
  'Coast',
  'Dance',
  'Brown',
  'Chest',
  'Could',
  'Dated',
  'Build',
  'Chief',
  'Count',
  'Dealt',
  'Built',
  'Child',
  'Court',
  'Death',
  'Debut',
  'Entry',
  'Forth',
  'Group',
  'Delay',
  'Equal',
  'Forty',
  'Grown',
  'Depth',
  'Error',
  'Forum',
  'Guard',
  'Doing',
  'Event',
  'Found',
  'Guess',
  'Doubt',
  'Every',
  'Frame',
  'Guest',
  'Dozen',
  'Exact',
  'Frank',
  'Guide',
  'Draft',
  'Exist',
  'Fraud',
  'Happy',
  'Drama',
  'Extra',
  'Fresh',
  'Harry',
  'Drawn',
  'Faith',
  'Front',
  'Heart',
  'Dream',
  'False',
  'Fruit',
  'Heavy',
  'Dress',
  'Fault',
  'Fully',
  'Hence',
  'Drill',
  'Fibre',
  'Funny',
  'Night',
  'Drink',
  'Field',
  'Giant',
  'Horse',
  'Drive',
  'Fifth',
  'Given',
  'Hotel',
  'Drove',
  'Fifty',
  'Glass',
  'House',
  'Dying',
  'Fight',
  'Globe',
  'Human',
  'Eager',
  'Final',
  'Going',
  'Ideal',
  'Early',
  'First',
  'Grace',
  'Image',
  'Earth',
  'Fixed',
  'Grade',
  'Index',
  'Eight',
  'Flash',
  'Grand',
  'Inner',
  'Elite',
  'Fleet',
  'Grant',
  'Input',
  'Empty',
  'Floor',
  'Grass',
  'Issue',
  'Enemy',
  'Fluid',
  'Great',
  'Irony',
  'Enjoy',
  'Focus',
  'Green',
  'Juice',
  'Enter',
  'Force',
  'Gross',
  'Joint',
  'Judge',
  'Metal',
  'Media',
  'Newly',
  'Known',
  'Local',
  'Might',
  'Noise',
  'Label',
  'Logic',
  'Minor',
  'North',
  'Large',
  'Loose',
  'Minus',
  'Noted',
  'Laser',
  'Lower',
  'Mixed',
  'Novel',
  'Later',
  'Lucky',
  'Model',
  'Nurse',
  'Laugh',
  'Lunch',
  'Money',
  'Occur',
  'Layer',
  'Lying',
  'Month',
  'Ocean',
  'Learn',
  'Magic',
  'Moral',
  'Offer',
  'Lease',
  'Major',
  'Motor',
  'Often',
  'Least',
  'Maker',
  'Mount',
  'Order',
  'Leave',
  'March',
  'Mouse',
  'Other',
  'Legal',
  'Music',
  'Mouth',
  'Ought',
  'Level',
  'Match',
  'Movie',
  'Paint',
  'Light',
  'Mayor',
  'Needs',
  'Paper',
  'Limit',
  'Meant',
  'Never',
  'Party',
  'Peace',
  'Power',
  'Radio',
  'Round',
  'Panel',
  'Press',
  'Raise',
  'Route',
  'Phase',
  'Price',
  'Range',
  'Royal',
  'Phone',
  'Pride',
  'Rapid',
  'Rural',
  'Photo',
  'Prime',
  'Ratio',
  'Scale',
  'Piece',
  'Print',
  'Reach',
  'Scene',
  'Pilot',
  'Prior',
  'Ready',
  'Scope',
  'Pitch',
  'Prize',
  'Refer',
  'Score',
  'Place',
  'Proof',
  'Right',
  'Sense',
  'Plain',
  'Proud',
  'Rival',
  'Serve',
  'Plane',
  'Prove',
  'River',
  'Seven',
  'Plant',
  'Queen',
  'Quick',
  'Shall',
  'Plate',
  'Sixth',
  'Stand',
  'Shape',
  'Point',
  'Quiet',
  'Roman',
  'Share',
  'Pound',
  'Quite',
  'Rough',
  'Sharp',
  'Sheet',
  'Spare',
  'Style',
  'Times',
  'Shelf',
  'Speak',
  'Sugar',
  'Tired',
  'Shell',
  'Speed',
  'Suite',
  'Title',
  'Shift',
  'Spend',
  'Super',
  'Today',
  'Shock',
  'Split',
  'Table',
  'Total',
  'Shoot',
  'Spoke',
  'Taken',
  'Touch',
  'Short',
  'Sport',
  'Taste',
  'Tough',
  'Shown',
  'Staff',
  'Taxes',
  'Tower',
  'Sight',
  'Stage',
  'Teach',
  'Track',
  'Since',
  'Stake',
  'Teeth',
  'Trade',
  'Sixty',
  'Start',
  'Texas',
  'Treat',
  'Sized',
  'State',
  'Thank',
  'Trend',
  'Skill',
  'Steam',
  'Theft',
  'Trial',
  'Sleep',
  'Steel',
  'Their',
  'Tried',
  'Slide',
  'Stick',
  'Theme',
  'Tries',
  'Small',
  'Still',
  'There',
  'Truck',
  'Smart',
  'Stock',
  'These',
  'Truly',
  'Smile',
  'Stone',
  'Trust',
  'Smith',
  'Stood',
  'Thing',
  'Truth',
  'Smoke',
  'Store',
  'Think',
  'Twice',
  'Solid',
  'Storm',
  'Third',
  'Under',
  'Solve',
  'Story',
  'Those',
  'Undue',
  'Sorry',
  'Strip',
  'Three',
  'Union',
  'Sound',
  'Stuck',
  'Threw',
  'Unity',
  'South',
  'Study',
  'Throw',
  'Until',
  'Space',
  'Stuff',
  'Tight',
  'Upper',
  'Upset',
  'Whole',
  'Waste',
  'Wound',
  'Urban',
  'Whose',
  'Watch',
  'Write',
  'Usage',
  'Woman',
  'Water',
  'Wrong',
  'Usual',
  'Train',
  'Wheel',
  'Wrote',
  'Valid',
  'World',
  'Where',
  'Yield',
  'Value',
  'Worry',
  'Which',
  'Young',
  'Video',
  'Worse',
  'While',
  'Youth',
  'Virus',
  'Worst',
  'White',
  'Worth',
  'Visit',
  'Would',
  'Vital',
  'Voice'
]
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
let tries //how many rows needed to win
let guesses

const row1 = document.querySelectorAll('#row1 > div')
const row2 = document.querySelectorAll('#row2 > div')
const row3 = document.querySelectorAll('#row3 > div')
const row4 = document.querySelectorAll('#row4 > div')
const row5 = document.querySelectorAll('#row5 > div')
const row6 = document.querySelectorAll('#row6 > div')

const keyPress = document.querySelectorAll('#playerKeyboard button')

//restart button
const restartButton = document.getElementById('restart')

const init = () => {
  row = ['', '', '', '', '']
  tries = 0
  guesses = 0
}

const wordInput = (event) => {
  if (event.key === 'Backspace') {
    deleteLetter()
    rowupdate()
  }
  if (event.key === 'Enter') {
    checkWord()
    rowupdate()
  }
  if (alphabet.includes(event.key)) {
    input = event.key.toUpperCase()

    placeLetter(input)
  }
  rowupdate()
}

const placeLetter = (input) => {
  if (guesses === 5) {
    return
  } else if (input !== undefined) {
    row[guesses] = input
    guesses++
  }
}

const deleteLetter = () => {
  if (guesses > 0) {
    guesses--
    row[guesses] = ''
  }
}

//the random word function is from https://stackoverflow.com/questions/16065579/generate-a-random-word-from-an-array-and-then-print-it-to-the-console-log-in-a-f
const wordChosen = () => {
  word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase()
}

//checks if the word is correct and if it contains the right letters
const checkWord = () => {
  let correctPoint = 0
  if (guesses === 5) {
    for (let i = 0; i < 5; i++) {
      if (word[i] === row[i]) {
        //letter is correct
        displayResult(i, 'correct')
        correctPoint++
        usedKey(row[i], 'correct')
      } else if (word.includes(row[i])) {
        //letter is right but wrong place
        displayResult(i, 'right')
        usedKey(row[i], 'right')
      } else {
        displayResult(i, 'used')
        usedKey(row[i], 'used')
      }
    }
    if (correctPoint === 5) {
      showEndScreen(true)
      document.removeEventListener('keydown', wordInput)
      return
    }

    tries++
    reset()

    if (tries === 6) {
      showEndScreen(false)
    }
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
  if (!thisRow) {
    return
  }
  thisRow.forEach((letter, index) => {
    letter.textContent = row[index]
  })
}

const displayResult = (index, color) => {
  let thisRow = currentRow()
  thisRow[index].classList.add(color)
}

//////////////////////////////////////////////////
const usedKey = (letter, color) => {
  keyPress.forEach((button) => {
    if (button.textContent.toUpperCase() === letter) {
      if (button.classList.contains('correct')) {
        return
      }

      //removes previous classes
      button.classList.remove('correct', 'right', 'used')

      button.classList.add(color)
    }
  })
}

const reset = () => {
  row = ['', '', '', '', '']
  guesses = 0
}

const keyboardInput = (event) => {
  key = event.target.innerText

  if (key === 'DELETE') {
    deleteLetter()
    rowupdate()
  }
  if (key === 'ENTER') {
    checkWord()
    rowupdate()
  }
  if (alphabet.includes(key)) {
    input = key.toUpperCase()

    placeLetter(input)
  }
  rowupdate()
}

const restartGame = () => {
  location.reload()
}

const showEndScreen = (win) => {
  const endScreen = document.getElementById('endScreen')
  const resultMessage = document.getElementById('result')

  endScreen.style.display = 'flex'

  if (win) {
    resultMessage.innerHTML = `Good Job! it only took you <br/><span class="highlightWord">${tries}</span> tries`
  } else {
    resultMessage.innerHTML = `Nice Try! The correct word was:<br/><span class="highlightWord">${word}</span>`
  }

  document.removeEventListener('keydown', wordInput)
  keyPress.forEach((button) => {
    button.removeEventListener('click', keyboardInput)
  })
}

//events
document.addEventListener('keydown', wordInput)

keyPress.forEach((button) => {
  button.addEventListener('click', keyboardInput)
})

restartButton.addEventListener('click', restartGame)

//initialize
wordChosen()
init()
