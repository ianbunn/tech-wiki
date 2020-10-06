# Senior Engineer Checklist

## Best Practices

### Naming Convention

#### Variable naming

Variables should be:

- case sensitive
- self-descriptive
- declared with **camelCase**

**NOTE**: When a variable needs to remain **constant**, it should be declared in **SNAKE_CASE** and capital case

```javascript
// bad
const firstname = 'Breonna'

// bad
const first_name = 'Breonna'

// bad
const FIRSTNAME = 'Breonna'

// good
const FIRST_NAME = 'Breonna'

// good
const firstName = 'Breonna'
```

#### Boolean type naming

A prefix like `is`, `are`, `has`, etc. can be used to distinguish a boolean variable from another variable.

```javascript
// bad
const visible = true

// good
const isVisible = true

// bad
const equal = false

// good
const areEqual = false

// bad
const encryption = true

// good
const hasEncryption = true
```

**NOTE**: Always try to use more implicit names for Boolean variables and as concisely as possible.

```javascript
// bad
const canShowMenu = true

// good
const isMenuVisible = true

// bad
const areKanbanCardsTheSame = false

// good
const areCardsEqual = true
```

#### Function naming

- Functions should be written in **camelCase**
- Use a verb as the prefix plus action name
  - For example:
    - get
    - push
    - apply
    - calculate
    - compute
    - post
    - handle
      - Functions assigned to events should have this prefix plus action name

```javascript
// bad
function name(firstName, lastName) {
  return `${firstName} ${lastName}`
}

// good
function getName(firstName, lastName) {
  return `${firstName} ${lastName}`
}

// Events: bad
function showMenu() {
  // [...]
}

// Events: good
function handleMenu() {
  // [...]
}
```

#### Class naming

- A class should be declared with a **PascalCase**

```javascript
class KanbanCard {
  constructor(company, card) {
    this.company = company
    this.card = card
  }
}

const kanbanCard = new KanbanCard(company, card)
```

##### Class private naming

For a private variable or method, prepend an **underscore** (_).

A private method/variable in a class should only be accessed by the class AND should be avoided on the instance of the class.

```javascript
class KanbanCard {
  constructor(company, card) {
    this.company = company
    this.card = card
  }

  _getCompanyName() {
    return this.company.name
  }
}

var kanbanCard = new KanbanCard(company, card)

// good
const companyName = kanbanCard.company.name

// bad
const companyName = kanbanCard._getCompanyName()
```

#### Component naming

Components should be:

- declared with **PascalCase**
- separated inside folder structure
- grouped by functionality

```sh
// bad
UserProfile.vue

// good
/User/Profile.vue

// bad
DealFlowKanbanCard.vue

// good
Dealflow/Kanban/Card.vue

// bad
/user/Form.vue

// good
/forms/UserForm.vue
```

Resources:

- [A Senior Engineer's CheckList](https://littleblah.com/post/2019-09-01-senior-engineer-checklist/)

### Destructuring Assignment (Object/Array)

### Optional Chaining

Optional chaining `?.` is an error-proof way to access nested object properties, even if an intermediate property doesn't exist.

Use `?.` only when it is safe to have something that doesn't exist.

For example, if expecting `user` object as required, but address inside `user` object is optional, then use `user.address?.street`.

### Conditional Operators

### Ternary Operators

Use ternary operators to simplify only when it is easy to read.

**RULE OF THUMB**: do not use a ternary operator when logic contains many `if/else if/else` statements

```javascript
const locked = 1
const score = 90
let scoreMessage = ''

// bad
const canChange = locked !== 1 ? true : false

// good
const canChange = locked !== 1

// bad
const scoreMessage = score >= 90 ? 'Excellent' : (score >= 80 ? 'Good' : (score >= 60 ? 'Medium' : 'Bad'))

// good
if (speed >= 90) {
  scoreMessage = 'Excellent'
} else if () {
   scoreMessage = 'Good'
} else if () {
  scoreMessage = 'Medium'
} else {
  scoreMessage = 'Bad'
}
```
