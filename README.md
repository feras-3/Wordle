# Wordle

[Try it!](https://fwordle.surge.sh/)

## Description

A simple browser-based word guessing game inspired by the popular New York times game Wordle. The objective is to guess a hidden 5-letter word within 5 attempts. After each guess, feedback is provided through color-coded hints that indicate the accuracy of the guessed letters.

## Technologies Used

- HTML
- CSS
- JavaScript

## Game Flow

1. The user is greeted with a welcome screen and clicks **PLAY**
2. The user has **5 tries** to guess the correct word.
3. After each guess, the letters are colored based on:
   - **Green** = correct letter, correct position
   - **Yellow** = correct letter, wrong position
   - **Gray** = incorrect letter

- words can be inputted via on-screen keyboard or physical keyboard

## Possible Improvements

- [ ] Adding animations
- [ ] A win/loss screen

## Favorite function

- My favorite function was wordInput(). It's the main function that ties everything together. It was satisfying to see it work.

```
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
```

## wireframe

![image](/img/Project1_wireframe.png)
