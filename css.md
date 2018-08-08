# CSS

## w3schools - CSS Tutorial

[CSS cheat sheet documentation](https://www.w3schools.com/w3css/default.asp)

## Drop Caps on the Web Using Initial Letter

[Magazine layout youtube video](https://www.youtube.com/watch?v=2WryRYsCHlE&t=1s)

- Let users know where to start reading with initial letter

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

## CSS Units

https://www.w3schools.com/cssref/css3_pr_text-shadow.asp

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