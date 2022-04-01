# fcm-take-home

A pizza delievering calculator of provided inputs 🍕

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View, in console, number of pizzas delivered by Maria and Clovis

### Screenshot




## My process
- Wrote out pseduocode
- Started with logic
  - Created empty array
  - Create xCoord / yCoord that start at 0.
  - Created switch statement to evaluate inputs
  - created forEach loop for inputs array
  - Used given inputs as a means for testing
  - Created array of coordinates from string of inputs with a default input for the starting point.
  - Elimated repeating coordinates and created new array with remaining.
  - Log remaining (number of housese) in console
  - Cleaned up comments and indentation
- Set up input reader
-   Used async functin to read `.txt` file
- Created test files from prompt

### Built with

- JS
- Async functions
- ES6


### What I learned
- A ton!!
  - How to refactor
  - How to use async / await functions to read a .txt file.
  - How to create tests


  #### code snippets
```javascript
let uniqueCoords = [...new Set(array)];
    return uniqueCoords.length;
```
- This removed duplicates from the array and created a new array named `uniqueCoords`.

```javascript
getData('testfile1.txt').then(data => {
    let result = processData(data);
    let expected = 2;
    console.log("p1- testfile1.txt",result === expected, {result,expected});
})
```
- Learned how to create tests by taking the answers that were given and creating a a text file from the given inputs!

### Continued development
- Refactor a bit more
  - As I understand it my clovis and maria code is a pattern that I can simplfy down a bit and just split when inputs are being fed to the switch statement.
  - However I wanted to keep the amount of time I spent on the take home in check. On my next pass through I would like to play around with that.
- Maybe instead of logging the result, creating some element in the browser that updates depending on input.
  - Again, I wanted to keep the amount of time I spent on the take home in check. But I absolutely want to play around with this some more.
- It'd be fun to have some client-side interactions. So maybe, depending on what a user inputs, there could be some interface on the screen that counts the number of pizzas and houses deleivered.

### Useful resources

- [forEach — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Switch — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [Addition Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)
- [.split — w3schools](https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20splits,string%20is%20split%20between%20words.)
- [3 ways to remove duplicates in an Array in Javascript](https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o)
- [How to read a local text file?](https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file)
