# React Notes

## Helpful links

- [Gatsby JS - docs](https://www.gatsbyjs.org/docs/)

## General Notes

[React Recap Notes](https://react-reacap.netlify.com/#/)

- Starting point is in the `./src/index.js`
  - Then, it looks for the `./src/app.js`

### Components

- React Components can have `props`
  - Props can have `children` props

#### Styling Components

- Make sure to localize the components' CSS, for example:

```css
.card > .cardheader > li
```

#### Extending Components with Classes

```jsx
class Counter extends React.Component {

    state = {
        count: 0,
        moreData: {
            name: "whate",
            color: "green"
        }
    }

    handleIncrement = () => {
        this.setState( { count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                ...
            </div>
        )
    }
}
```
