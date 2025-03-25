
# [25/03/2025] NOTES (Quick run down)

# 66. Basic HTML Structure and Elements

- Snippet for html: enter an exclamation mark and press tab to generate a default HTML doctype

# 67. Attributes, Classes, IDs

- Elements cheatsheet:
	- `<a>` Anchor tag
		- `href` - reference attribute for the anchor tag
	- `<img>` Image tag
		- `src` - source of the image
	- `<input>` 

- Block elements include:
	- `<h>` (header elements)

- Classes & ID's
	- Classes are used for identifying certain elements in html

# 68. Basic Styling with CSS

- `<link>` - links a .css stylesheet to an html document
- Sample CSS:
```
/* style.css */
body {
	background-color: rgb(255,247,201);
}

h1 {
	font-size: 40px;
}


/* This targets all the html elements with class=first */
.first { 
	color: red;
}

/* This targets all the html elements with id=your-name */
#your-name {
	background-color: rgb(255,220,105);
}
```

# 69. Introduction to the CSS Box Model

- Each of the elements on a webpage can be seen as a rectangular box:![[boxmodel.png]]
	Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/boxmodel.png

- Content - text, images, etc.
- Padding - used to create whitespace **INSIDE** a box
- Border - goes around the padding and the content
- Margin - whitespace **OUTSIDE** the box, for spacing content apart
- Fill area - comprises of everything from the content to the border--gets filled with the background color or image.

- CSS Global Reset is invoked using the `*` Star selector:
```
* {
	margin:0;
	padding: 0;
	box-sizing: border-box; /* will include paddings and borders in the width and                                height defined in the element*/
}
```
