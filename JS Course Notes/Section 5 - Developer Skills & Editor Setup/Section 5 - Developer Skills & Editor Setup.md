
# [24/03/2025] NOTES
# 55. Setting up Prettier and VS Code

- You can use Prettier, an Opinionated js formatter, to configure the formatting of you JS code.
- It is also very configurable, all you need is a `.prettierrc` file to configure its settings (In JSON format).
- VSCode can help with SNIPPETS config: `File > Preferences > Configure Snippets > New global snippets file`.
- VSCode plugins of note:
	- Prettier
	- Auto Close Tag
	- ESLint
	- Image Preview
	- Monokai Pro (theme)
	- ~~Settings Sync~~ (DEPRECATED, use vscode built-in settings sync instead, already on for me.)
	- TODO Highlight

# 56. Installing Node.JS and setting up a Dev Environment

- Installed npm LTS version.

> NOTE: If ever you get an error `Error: listen EACCES: permission denied 0.0.0.0:8080` when starting live-server, you can always define a port: `live-server --port=8081`.

# 57. Learning how to code

- Try practicing out of this course by setting a clear project goal in mind.
- Dont' be stuck in tutorial hell
- You need to keep coding, no matter the quality.
- Come up with projects!
- Challenge yourself!


# 58. How to Think Like a Developer: Become a Problem Solver!

- **4-step solution to becoming a problem-solver:**
	1. Make sure you 100% understand the problem, **Ask the right questions to get a clear picture of the problem!**
	2. **Divide and Conquer:** Break a big problem into smaller sub-problems.
	3. Don't be afraid to do as much research as you have to
	4. Consider writing **pseudo-code** before writing the actual code.

# 59. Using Google, StackOverflow and MDN

- Google for research
- StackOverflow for researching possible solutions and other perspectives to tackling programming problems.
- MDN - Mozilla Developer Network https://developer.mozilla.org/en-US/
	- Contains documentation for JS (Unofficial JS Documentation)

# 60. Debugging (Fixing Errors)

- Software Bug Terminology history - A real bug was causing an error in Harvard's computer in the 1940s, thus the term was coined.
- Steps to discovering bugs
	1. Identify - Becoming aware that there is a bug
	2. Find - Isolating where the bug is happening in the code
	3. Fix - Correct the bug
	4. Prevent - Prevent this bug from ever happening again

# 61. Debugging with the Console and Breakpoints

- Three console invocation methods:
```
console.log() // Returns a log to the console normally
console.warn() // Returns a log to the console as a warning (yellow highlight)
console.error() // Returns to a log to the console as an error (Red highlight, marked X)
```

- **Setting breakpoints:** You set the breakpoints in the browser:![[Pasted image 20250324170448.png]]
- This is for Firefox. For chrome, it's the Sources tab.
- Breakpoints are set the same way you do in modern IDE's, and runs the code on page refresh.

> **NOTE:** You can also do this in the code by calling the `debugger` keyword in JS. Wherever you place this keyword, it will pause the browser debugger at that point in the code.

# 62. CHALLENGE #1

- Given an array of forecasted maximum temps, the thermometer displays a string with these temps.

# [25/03/2025] NOTES

# 63. The Rise of AI Tools (ChatGPT, Copilot, CursorAI, etc.)

- These tools should only be used by devs who already know what they're doing.
- Workflow:
	1. Make sure you understand the problem 
	2. Give the AI a very specific prompt
	3. Review and test the prompt given by AI, correct or improve the solution.

# 64. Solving Challenge #2 with AI (Skipped)
