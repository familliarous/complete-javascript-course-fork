
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

# 81. PROJECT # 2 Modal Window

- Started Modal Window Project

# 82. Working with Classes

- Classes can allow for the dynamic state switching in JS scripts.
- For example, hiding an html element with a "hidden" class dynamically in JS would look like this:
```
const btnCloseModal = document.querySelector('.close-modal');
btnCloseModal.addEventListener('click', closeModal);
```

# [02/04/2025] NOTES

# 83. Handling an "Esc" Keypress event

- There are three keyboard events available:
	- Key Up
	- Key Down
	- Key Pressed (Full Key action, event will keep firing upon pressing the key)
- JS parameter function expression definitions will only be called upon event firing, and the event that triggered the function will be passed as the parameter.
- How to access an element's class list:  `classList.contains` Sample: `modal.classList.contains('hidden')`

# 84. PROJECT #3: The Pig Game

- There is a way to exclusively call ID's in a document: `document.getElementById()`
	- You do not need to prepend a hash (#) when passing ids as a parameter for this.

# 86. Switching the Active Player

- Implementing the code for player switch

# [03/04/2025] NOTES

- the  `.classlist.toggle()` function will allow for the element chosen to have the attribute class removed. 
- For example:
```
// This toggles the active status between both of these elements.
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
```

# 87. Holding Current Score

- Implemented adding the score to the player's count.
# 88. Resetting the game 

- Implemented resetting the game.
