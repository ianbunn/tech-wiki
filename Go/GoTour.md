# [A Tour of Go](https://tour.golang.org/)

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
 
 