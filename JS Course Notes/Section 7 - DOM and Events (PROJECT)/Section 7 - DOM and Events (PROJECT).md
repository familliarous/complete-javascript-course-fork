
# [26/03/2025] NOTES

# 71. SECTION ROADMAP

- Still chosing to learn it all!
# 72. PROJECT #1: Guess My Number!

- **Project Requirements:** You are to make a small Guess My Number app, where you guess the number. The app should let you know if the number you entered is higher or lower.
- Introduction to DOM:
	- `document.querySelector()`- Selects an element with the defined id or class name.
	- if it is an ID, you mark the parameter with a #. if it is a class, you mark it with a dot (.).
	- e.g.`document.querySelector(#firstInput)`
	- `.textContent()` - grabs the content.

# 73. What is DOM and DOM Manipulation?

- **DOM (Document Object Model)** - A structured Representation of HTML Documents. Allows Javascript to Access HTML Elements and Styles to manipulate them.
- **DOM** is **NOT** a part of JS. It is actually a part of the WEB APIs. 
- WEB APIs are automatically imported in JS. 
- There is an official DOM specification used by all browsers.

# 74. Selecting and Manipulating Elements

- For input elements, when retrieving their value, you call `document.querySelector('.<your input class>').value`;


# 75. Handling Click Events

- Events - Something that happens on the page
- `.addEventListener()` takes the event as a string and a function expression.
> **Note:** front end values are usually strings.

# 76. Implementing the Game Logic

- the score variable is considered a "state" variable.

# 77. Manipulating CSS Styles

- Calling an DOM element's style:
`document.querySelector('body').style.<style attribute here>`
- two-word properties adapt the camelCase convention:
`document.querySelector('body').style.backgroundColor = 'red'`

# [30/03/2025] NOTES

# 79. Implementing the HighScores

- High scores have been implemented in the JS script for the guess my number game.

# [31/03/2025] NOTES

# 80. Refactoring Our Code: The DRY Principle

- DRY - Don't Repeat Yourself.
- Refactoring the guessing game code!