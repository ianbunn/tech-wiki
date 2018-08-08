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