# [A Tour of Go](https://tour.golang.org/list)

## Packages

E/`go` program is made up of packages.

Programs start running in `package main`

## Import

Import packages using their paths:

```go
import (
    "fmt"
    "math/rand"
)
```

**NOTE**: for package `math/rand`, use package's last element on import path, so for this one would be `rand.Intn`

## Exported names

A name is exported if it begins w/a capital letter.

For example, `Pi` will be exported from `math` package, but not `pi`.

## Functions

Functions take zero or more arguments.

When declaring a function, the arguments' type comes after its name.

```go
func add(x int, y int) int {
    return x + y
}
```

Function above can be **simplified** by omitting the same type from all but the last:

```go
func add(x, y int) int {
    return x + y
}
```

### Named return values

Return values may be named, defined at the top of the function and treated as variables.

A `return` statement w/out arguments returns the named return values. This is known as a **naked** return. 

**Naked** return statements should be avoided or only used in short functions, as they can harm readibility in longer functions.

### Swap function

The `swap` function returns 2 strings:

```go
package main

import "fmt"

func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
```

## Variables

`var` statement declares variables, as in function argument lists, the type is last if multiple vars are declared in one line.

```go
var c, python, java bool
```

### Variables w/initializers

If an **initializer** is present, the type can be omitted; the var will take the type of the initializer.

```go
import "fmt"

var i, j int = 1, 2

func main() {
	var c, python, java = true, false, "no!"
	fmt.Println(i, j, c, python, java)
}

// Output
// 1 2 true false no!
```

### Short variable declarations

Inside a function, the `:=` short assignment statement can be used in place of `var` declaration w/implicit type.

```go
package main

import "fmt"

func main() {
	var i, j int = 1, 2
	k := 3
	c, python, java := true, false, "no!"

	fmt.Println(i, j, k, c, python, java)
}

// Output
// 1 2 3 true false no!
```

### Basic variables types

```go
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8

rune // alias for int32
     // represents a Unicode code point

float32 float64

complex64 complex128
```

Variables declarations may be "factored" into blocks, as w/import statements:

```go
var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)
```

### Vars type inference

The variable's type is inferred from the value on the **right** hand side.

```go
i := 42           // int
f := 3.142        // float64
g := 0.867 + 0.5i // complex128
```

### Vars type conversions

```go
i := 42
f := float64(i)
u := uint(f)
```

### Zero values

Vars declared w/out an explicit initial value are given their **zero** value, or respective value based on var type.

 - `0` for `int` types
 - `false` for `bool` types
 - `""` (empty string) for `string` types
 
 ## Constants
 
 Declared like vars, but with the `const` keyword.
 
 Constants can be:
 
 - `string`
 - `bool`
 - `int`
 
 **NOTE**: Constants cannot be declared using the `:=` syntax.
 
 ### Numeric Constants
 
 Numeric constants are **high-precision** values.
 
 ## `for`
 
 Go only has `for` as its looping construct.
 
 `for` loop contains 3 components separated by `;` (semicolons):
 
 1. init statement: executed before the first iteration, a short variable declaration, and the variables declared there are visible only in the scope of the `for` statement.
 2. condition expression: evaluated before e/iteration.
 3. post statement: executed at the end of e/iteration.
 
 The `for` loop will stop iterating once the `bool` condition evaluates to `false`.
 
 ```go
package main

import "fmt"

func main() {
    sum := 0
    for i := 0; i < 10; i++ {
        sum += i
    }
    fmt.Println(sum)
}

// Output
// 45 
```

The init and post statements are **optional**:

```go
func main() {
    sum := 1
    for ; sum < 1000; {
        sum += sum
    }
    fmt.Println(sum)
}
```
 
 You could also drop the semicolons, and it resembles a `while` loop in other languages:
 
 ```go
 func main() {
     sum := 1
     for sum < 1000 {
         sum += sum
     }
     fmt.Println(sum)
 }
```

### Infinite `for` loop

If the loop condition is omitted, infinite loop is compactly expressed:

```go
func main() {
	for {
	}
}
```

### Exercise: Loops and functions

This exercise is solved using [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method):

```go
package main

import (
	"fmt"
)

func Sqrt(x float64) float64 {
	z := float64(1)
	for i := 1; i <= 10; i++ {
		z -= (z*z - x) / (2*z)
		fmt.Println(z)
	}
	return z
}

func main() {
	fmt.Println(Sqrt(16))
}

```

## `if`

`if` statements are like `for` loops, and they don't need parentheses, only braces are required.

```go
func sqrt(x float64) string {
	if x < 0 {
		return sqrt(-x) + "i"
	}
	return fmt.Sprint(math.Sqrt(x))
}
```

Multiple evaluations in the `if` statement can be separated with a `;` (semicolon).

Vars declared by the statement are only in scope until the end of `if` statement.

### `if` and `else`

Vars declared inside an `if` are also available inside any of the `else` blocks.

## `switch`

A `switch` statement is a way to write a sequence of `if - else` statements.

No need to add the `break` keyword at the end of each case.

`switch` cases need not to be constants, and the values involved need not be integers.

`switch` cases evaluate cases from top to bottom, stopping when a case succeeds.

```go
package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Print("Go runs on ")
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.\n", os)
	}
}

```

### `switch` with no condition

`switch` w/out a condition is the same as `switch true`:

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("Good morning!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon.")
	default:
		fmt.Println("Good evening.")
	}
}
```

## `defer`

`defer` statement defers the execution of a function until the surrounding function returns.

```go
package main

import "fmt"

func main() {
	defer fmt.Println("world")

	fmt.Println("hello")
}
```

### Stacking `defer` statements

Deferred function calls are pushed onto a **stack**.

When a function returns, its deferred calls are executed in **last-in-first-out** order.

