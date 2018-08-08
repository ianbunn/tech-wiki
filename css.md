# CSS

## w3schools - CSS Tutorial

[CSS cheat sheet documentation](https://www.w3schools.com/w3css/default.asp)

## CSS Units

https://www.w3schools.com/cssref/css_units.asp

- **em** = relative to the font-size of the element
  - **2em** means 2 times the size of the current font
- **ex** = relative to the x-height of the current font
- **ch** = relative to width of the “0” (zero)
- **rem** = relative to font-size of the root element
- **vw** = relative to 1% of the width of the viewport
- **vh** = relative to 1% of the height of the viewport
- **vmin** = relative to 1% of viewport’s smaller dimension
- **vmax** = relative to 1% of viewport’s larger dimension
- **%** = relative to the parent element

## Text Shadow Property

https://www.w3schools.com/cssref/css3_pr_text-shadow.asp

```css
text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;
```

- In the above css snippet, **h-shadow** is required, which is the position of the horizontal shadow
  - Negative values are allowed
- **v-shadow** is required, which is the position of the horizontal shadow
  - Negative values are allowed
- **blur-radius** is optional
  - Default value is 0
- **color** is optional, which is the color of the shadow
- **none** is default value, which means no shadow
- **initial** is used to set this property to its default value
- **inherit** = inherits this property from its parent element

## Drop Caps on the Web Using Initial Letter

[Magazine layout youtube video](https://www.youtube.com/watch?v=2WryRYsCHlE&t=1s)

- This layout is used to help users know where to start reading with initial letter

```css
@supports (initial-letter: 4) or (-webkit-initial-letter: 4) {
	p::first-letter {
   		border: 1px solid black;
   		padding: 1.6rem
   		margin: 0 1rem 0 0;

   		-webkit-initial-letter: 4;
   		initial-letter: 4;
	}
}
```

![css-drop-caps](/images/css-drop-caps.png)