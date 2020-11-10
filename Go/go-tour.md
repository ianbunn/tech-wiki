# [A Tour of Go](https://tour.golang.org/list)

## Basics

### Packages

E/`go` program is made up of packages.

Programs start running in `package main`

#### Import

Import packages using their paths:

```go
import (
    "fmt"
    "math/rand"
)
```

**NOTE**: for package `math/rand`, use package's last element on import path, so for this one would be `rand.Intn`

#### Exported names

A name is exported if it begins w/a capital letter.

For example, `Pi` will be exported from `math` package, but not `pi`.

### Function

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

#### Named return values

Return values may be named, defined at the top of the function and treated as variables.

A `return` statement w/out arguments returns the named return values. This is known as a **naked** return. 

**Naked** return statements should be avoided or only used in short functions, as they can harm readibility in longer functions.

#### Swap function

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

#### Function values

Functions can be values and passed in as arguments and return values.

```go
package main

import (
	"fmt"
	"math"
)

func compute(fn func(float64, float64) float64) float64 {
	return fn(3, 4)
}

func main() {
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}
	fmt.Println(hypot(5, 12))

	fmt.Println(compute(hypot))
	fmt.Println(compute(math.Pow))
}

// Output
// 13
// 5
// 81
```

#### Function closures

- Functions may be closures
- A closure is a function value that references variables outside of its body
- The function may access and assign to the referenced variables
  - The function is **bound** to the referenced variables

- In the example below, the `adder` function returns a closure
  - Each closure is bound to its own `sum` variable

```go
package main

import "fmt"

func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}

	func main() {
		pos, neg := adder(), adder()
		for i := 0; i < 10; i++ {
			fmt.Println(pos(i), neg(-2*i),)
		}
	}
}

// OUTPUT
// 0 0
// 1 -2
// 3 -6
// 6 -12
// 10 -20
// 15 -30
// 21 -42
// 28 -56
// 36 -72
```

### Exercise: Fibonnaci closure

In below exercise, `fibonnaci` function returns a function closure that returns successive [fibonnaci numbers](https://en.wikipedia.org/wiki/Fibonacci_number), (0, 1, 1, 2, 3, 5, ...).

```go
package main

import "fmt"

// fibonnaci is a function that returns
// a function that returns an integer
func fibonnaci() func() int {
	a1 := 0
	a2 := 1
	return func() int {
		f := a1
		a1, a2 = a2, a2 + f
		return f
	}
}

func main() {
	f := fibonnaci()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}
```

### Variables

`var` statement declares variables, as in function argument lists, the type is last if multiple vars are declared in one line.

```go
var c, python, java bool
```

#### Variables w/initializers

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

#### Short variable declarations

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

#### Basic variables types

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

#### Vars type inference

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

#### Zero values

Vars declared w/out an explicit initial value are given their **zero** value, or respective value based on var type.

 - `0` for `int` types
 - `false` for `bool` types
 - `""` (empty string) for `string` types
 
 ### Constants
 
 Declared like vars, but with the `const` keyword.
 
 Constants can be:
 
 - `string`
 - `bool`
 - `int`
 
 **NOTE**: Constants cannot be declared using the `:=` syntax.
 
 #### Numeric Constants
 
 Numeric constants are **high-precision** values.
 
 ### `for` loop
 
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

#### Infinite `for` loop

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

### `if`

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

#### `if` and `else`

Vars declared inside an `if` are also available inside any of the `else` blocks.

### `switch`

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

#### `switch` with no condition

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

### `defer`

`defer` statement defers the execution of a function until the surrounding function returns.

```go
package main

import "fmt"

func main() {
	defer fmt.Println("world")

	fmt.Println("hello")
}
```

#### Stacking `defer` statements

Deferred function calls are pushed onto a **stack**.

When a function returns, its deferred calls are executed in **last-in-first-out** order.

### Pointers

A pointer holds the memory address of a value.

In `var p *int`, the `*int` is a pointer to a type value. Its zero value is `nil`.

A pointer can also indirectly (dereference) change the operand's value.

The `&` operator generates a pointer to its operand.

```go
i := 42
p = &i // pointer to i
```

The `*` operator denotes the pointer's underlying value.

```go
fmt.Println(*p) // read whatever p is pointing to
*p = 21 // set whatever p is point to new value
```

A full example:

```go
package main

import "fmt"

func main() {
	i, j := 42, 2701

	p := &i         // point to i
	fmt.Println(*p) // read i through the pointer
	*p = 21         // set i through the pointer
	fmt.Println(i)  // see the new value of i

	p = &j         // point to j
	*p = *p / 37   // divide j through the pointer
	fmt.Println(j) // see the new value of j
}

// Output
// 42
// 21
// 73
```

**NOTE**: Go has no pointer arithmetic.

### Structs

A `struct` is a collection of fields.

```go
package main

import "fmt"

type Dummy struct {
    X int
    Y int
}

func main() {
    fmt.Println(Dummy{1, 2})
}

// Output
// { 1, 2 }
```

#### Struct fields

`struct` fields are accessed using a `.` (dot).

```go
package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	v.X = 4
	fmt.Println(v.X)
	fmt.Println(v.Y)
}

// Output
// 4
// 2
```

#### Pointers to structs

`struct` fields can be accessed through a `struct` pointer.

```go
package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	p := &v
	p.X = 1e9
	fmt.Println(v)
	fmt.Println(p)
	fmt.Println(*p)
}

//Output
// {1000000000 2}
// &{1000000000 2}
// {1000000000 2}
```

#### Struct literals

A `struct` literal denotes a newly allocated struct value by listing the value of its fields inside the braces for that `struct`.

List a subset of fields by using the struct value's `Name: 1`. The order of named field is irrelevant.

```go
package main

import "fmt"

type Vertex struct {
	X, Y int
}

var (
	v1 = Vertex{1, 2}  // has type Vertex
	v2 = Vertex{X: 1}  // Y:0 is implicit
	v3 = Vertex{}      // X:0 and Y:0
	p  = &Vertex{X: 1, Y: 2} // has type *Vertex
)

func main() {
	fmt.Println(v1, p, v2, v3)
}

// Output
// {1 2} &{2 2} {1 0} {0 0}
```

### Arrays

Type `[n]T` is an array of `n` values of type `T`.

The expression `var a [10]int` declares a variable `a` as an array of 10 integers.

An array's length is part of its type, so arrays cannot be resized.

```go
package main

import "fmt"

func main() {
	var a [2]string
	a[0] = "Hello"
	a[1] = "World"
	fmt.Println(a[0], a[1])
	fmt.Println(a)

	primes := [7]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)
}

// Output
// Hello World
// [Hello World]
// [2 3 5 7 11 13 0]
// On the last array for `primes`, the last value in the array is 0 since it is not explicitly declared
```

### Slices

A slice is a dynamically-sized, flexible view into the elements of an array.

The type `[]T` is a slice with elements of type `T`.

A slice is formed by specifying 2 indices, a low and a high bound, separated by a `:` (colon), `a[low : high]`.

```go
package main

import "fmt"

func main() {
	primes := [6]int{2, 3, 5, 7, 11, 13}

	var s []int = primes[1:4]
	var a []int = primes[0:1]
	fmt.Println(s)
	fmt.Println(a)
}

// Output
// [3 5 7]
// [2]
```

#### Slices are like references to arrays

A slice DOES NOT store any data, it just describes a section of an underlying array.

Changing the elements of a slice modifies the corresponding elements of its underlying array.

Other slices that share the same underlying array will contain those changes.

```go
package main

import "fmt"

func main() {
	names := [4]string{
		"John",
		"Paul",
		"George",
		"Ringo",
	}
	fmt.Println(names)

	a := names[0:2]
	b := names[1:3]
	fmt.Println(a, b)

	b[0] = "XXX"
	fmt.Println(a, b)
	fmt.Println(names)
}

// Output
// [John Paul George Ringo]
// [John Paul] [Paul George]
// [John XXX] [George Ringo]
// [John XXX George Ringo]
```

#### Slice literals

A slice literal is like an array without the explicit length.

This is an array literal: `[3]bool{true, true, false}`

This is a slice literal, that creates the same array as above, then builds a slice that references it: `[]bool{true, true, false}`

```go
package main

import "fmt"

func main() {
	q := []int{2, 3, 5, 7, 11, 13}
	fmt.Println(q)

	r := []bool{true, false, true, true, false, true}
	fmt.Println(r)

	s := []struct {
		i int
		b bool
	}{
		{2, true},
		{3, false},
		{5, true},
		{7, true},
		{11, false},
		{13, true},
	}
	fmt.Println(s)
}

// Output
// [2 3 5 7 11 13]
// [true false true true false true]
// [{2 true} {3 false} {5 true} {7 true} {11 false} {13 true}]
```

#### Slice defaults

When slicing, you may omit the high or low bounds to use their defaults instead.

The default is zero for low bound and the length of the slice for the high bound.

For the array `var a [10]int`, these slice expressions are equivalent:

```go
a[0:10]
a[:10]
a[0:]
a[:]
```

Another example:

```go
package main

import "fmt"

func main() {
	s := []int{2, 3, 5, 7, 11, 13}

	s = s[1:4]
	fmt.Println(s)

	s = s[:2]
	fmt.Println(s)

	s = s[1:]
	fmt.Println(s)
}

// Output
// [3 5 7]
// [3 5]
// [5]
```

#### Slice length and capacity

A slice has both a `len` (length) and `cap` (capacity).

The `len` of a slice is the number of elements it contains.

The `cap` of a slice is the number of elements in the underlying array, counting from the 1st element in the slice.

You can extend a slice's length by re-slicing it, provided it has sufficient capacity.

```go
package main

import "fmt"

func main() {
	s := []int{2, 3, 5, 7, 11, 13}
	printSlice(s)

	// Slice the slice to give it zero length.
	s = s[:0]
	printSlice(s)

	// Extend its length.
	s = s[:4]
	printSlice(s)

	// Drop its first two values.
	s = s[2:]
	printSlice(s)
}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}

// Output
// len=6 cap=6 [2 3 5 7 11 13]
// len=0 cap=6 []
// len=4 cap=6 [2 3 5 7]
// len=2 cap=4 [5 7]
```

#### Nil slices

The zero value of a slice is `nil`.

A `nil` slice has a `len` and `cap` of 0 and has no underlying array.

```go
package main

import "fmt"

func main() {
	var s []int
	fmt.Println(s, len(s), cap(s))
	fmt.Println(s)
	if s == nil {
		fmt.Println("nil!")
	}
}

// Output
// [] 0 0
// []
// nil!
```

#### Creating a slice with `make`

Slices can be created w the built-in `make` function; this is how to create dynamically-sized arrays.

The `make` function allocates a zeroed array and returns a slice referring to that array, `a := make([]int, 5) // len(a)=5`.

To specify a `cap`, pass a third arg, `b := make([]int, 0, 5) // len(b)=0, cap(b)=5`.

Other examples:

```go
b = b[:cap(b)] // len(b)=5, cap(b)=5
b = b[1:]      // len(b)=4, cap(b)=4
```

Full example:

```go
package main

import "fmt"

func main() {
	a := make([]int, 5)
	printSlice("a", a)

	b := make([]int, 0, 5)
	printSlice("b", b)

	c := b[:2]
	printSlice("c", c)

	d := c[2:5]
	printSlice("d", d)
}

func printSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n",
		s, len(x), cap(x), x)
}

// Output
// a len=5 cap=5 [0 0 0 0 0]
// b len=0 cap=5 []
// c len=2 cap=5 [0 0]
// d len=3 cap=3 [0 0 0] 
```

#### Slices of slices

Slices can contain any type, including other slices:

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	// Create a tic-tac-toe board.
	board := [][]string{
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
	}

	// The players take turns.
	board[0][0] = "X"
	board[2][2] = "O"
	board[1][2] = "X"
	board[1][0] = "O"
	board[0][2] = "X"

	for i := 0; i < len(board); i++ {
		fmt.Printf("%s\n", strings.Join(board[i], " "))
	}
}

// Output
// X _ X
// O _ X
// _ _ O
```

#### Appending to a slice

`append` is a built-in function to append new elements to a slice.

The resulting value of `append` is a slice containing all the elements of the original slice plus the provided values.

`cap` (capacity) will not be a problem, as when a slice is too small to fit all the given values a bigger array will be allocated. The returned slice will point to the newly allocated array.

```go
package main

import "fmt"

func main() {
	var s []int
	printSlice(s)

	// append works on nil slices.
	s = append(s, 0)
	printSlice(s)

	// The slice grows as needed.
	s = append(s, 1)
	printSlice(s)

	// We can add more than one element at a time.
	s = append(s, 2, 3, 4)
	printSlice(s)
}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}

// Output
// len=0 cap=0 []
// len=1 cap=1 [0]
// len=2 cap=2 [0 1]
// len=5 cap=6 [0 1 2 3 4]
```

#### Range

`range` form of the `for` loop iterates over a slice or map.

When using `range` over a slice, 2 values are returned: index and value.

```go
package main

import "fmt"

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
	for i, v := range pow {
		fmt.Printf("2**%d = %d\n", i, v)
	}
}

// Output
// 2**0 = 1
// 2**1 = 2
// 2**2 = 4
// 2**3 = 8 ...
```

You can skip the index or value by assigning to `_` (underscore):

```go
for i, _ := range pow
for _, value := range pow
```

If you only want the index, you can omit the 2nd var:

```go
for i := range pow
```

Full example:

```go
package main

import "fmt"

func main() {
	pow := make([]int, 10)
	for i := range pow {
		pow[i] = 1 << uint(i) // == 2**i
	}
	for _, value := range pow {
		fmt.Printf("%d\n", value)
	}
}

// Output
// 1
// 2
// 4
// 8 ...
```

### Exercise: slices and range

Example using `Pic` to return two arrays, `[[...] [...]]` of integer type and output a picture (blue figures).

```go
package main

import "golang.org/x/tour/pic"

func Pic(dx, dy int) [][]uint8 {
	myArray := make([][]uint8, dy)
	
	for i := range myArray {
		myArray[i] = make([]uint8, dx)
		for j := range myArray[i] {
			x, y := float64(i), float64(j)
			myArray[i][j] = uint8(((x+y)/2) + 890789/23424 * x)
		}
	}

	return myArray
}

func main() {
	pic.Show(Pic)
}

```

### Maps

A map maps keys to values.

The zero value of a map is `nil`.

A `nil` map has:
- No keys
- Nor can keys be added

The `make` function returns a `map` of the given type, initialized and ready for use.

```go
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}
	fmt.Println(m["Bell Labs"])
	fmt.Println(m)
}

// Output
// {40.68433 -74.39967}
// map[Bell Labs:{40.68433 -74.39967}]
```

#### Map literals

Same as `struct` literals but keys are required.

```go
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m = map[string]Vertex{
	"Bell Labs": Vertex{
		40.68433, -74.39967,
	},
	"Google": Vertex{
		37.42202, -122.08408,
	},
}

func main() {
	fmt.Println(m)
	fmt.Println(m["Google"])
}

// Output
// map[Bell Labs:{40.68433 -74.39967} Google:{37.42202 -122.08408}]
// {37.42202 -122.08408}
```

If the top-level type is just a `type`, you could omit it from the elements of the literal.

```go
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m = map[string]Vertex{
	"Bell Labs": {40.68433, -74.39967},
	"Google":    {37.42202, -122.08408},
}

func main() {
	fmt.Println(m)
}

// Output
// map[Bell Labs:{40.68433 -74.39967} Google:{37.42202 -122.08408}]
```

#### Mutating maps

Insert or update an element in a map `m[key] = elem`.

Delete an element in a map `delete(m, key)`.

Test if a value is present w/a 2 value assignment:

```go
elem, ok = m[key]
```

If `key` is in `m`, `elem` will be the value of `m[key]`, and `ok` will be `false`.

If `key` is not in `m`, `elem` is the zero value for the map's element type.

```go
package main

import "fmt"

func main() {
	m := make(map[string]int)

	m["Answer"] = 42
	fmt.Println("The value:", m["Answer"])
	v, ok := m["Answer"]
	fmt.Println("The value:", v, "Present?", ok)

	m["Answer"] = 48
	fmt.Println("The value:", m["Answer"])
	v, ok = m["Answer"]
	fmt.Println("The value:", v, "Present?", ok)

	delete(m, "Answer")
	fmt.Println("The value:", m["Answer"])

	v, ok = m["Answer"]
	fmt.Println("The value:", v, "Present?", ok)
}

// Output

// The value: 42
// The value: 42 Present? true
// The value: 48
// The value: 48 Present? true
// The value: 0
// The value: 0 Present? false
```

### Exercise: maps and `strings.Fields`

Using [`strings.Fields`](https://golang.org/pkg/strings/#example_Fields), it splits the strings around each instance of one or more consecutive white space characters, as defined by unicode.IsSpace, returning a slice of substrings of s or an empty slice if s contains only white space.

```go
package main

import (
	"golang.org/x/tour/wc"
	"strings"
)

func WordCount(s string) map[string]int {
	m := make(map[string]int)
	
	words := strings.Fields(s)
	
	for i := range words {
		m[words[i]]++
	}
	
	return m
}

func main() {
	wc.Test(WordCount)
}

// Output
// PASS
// f("I am learning Go!") = map[string]int{"Go!":1, "I":1, "am":1, "learning":1}
// PASS
// f("The quick brown fox jumped over the lazy dog.") = map[string]int{"The":1, "brown":1, "dog.":1, "fox":1, "jumped":1, "lazy":1, "over":1, "quick":1, "the":1}
// PASS
// f("I ate a donut. Then I ate another donut.") = map[string]int{"I":2, "Then":1, "a":1, "another":1, "ate":2, "donut.":2}
// PASS
// f("A man a plan a canal panama.") = map[string]int{"A":1, "a":2, "canal":1, "man":1, "panama.":1, "plan":1}
```

### Methods

- Go does NOT have **classes**
  - However, you can define methods on types
- A **method** is a function with a *special receiver* argument
  - The **receiver** is written in its own argument between the `func` keyword and the method name

- In the example below, the `Abs` method has a **receiver** of type `Vertex` named `v`

```go
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
}

// OUTPUT
// 5
```

- Methods can be used on non-struct types too
- Methods can only be declared with a **receiver** whose type is defined in the same package as the method
  - You cannot declare a method with a **receiver** whose type is defined in another package (which includes the built-in types such as `int`)

```go
package main

import (
	"fmt"
	"math"
)

type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

func main() {
	f := MyFloat(-math.Sqrt2)
	fmt.Println(f.Abs())
	p := MyFloat(2)
	fmt.Println(p.Abs())
	n := MyFloat(-2)
	fmt.Println(n.Abs())
}


// OUTPUT
// 1.4142135623730951
// 2
// 2
```

#### Pointer receivers

Methods with **pointer receivers** CAN MODIFY the value to which the **receiver** points, as `Scale` does in the example below.

**Pointer receivers** are more common than *value receivers*.

If the example below had `Scale` as a *value receiver*, the method would operate on a COPY of the original `Vertex` value.

The `Scale` method must have a **pointer receiver** to change the `Vertex` value declared in the `main` function.

```go
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	v.Scale(10)
	fmt.Println(v.Abs())
}

// OUTPUT
// 50
```

#### Pointers and functions

```go
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func Abs(v Vertex) float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func Scale(v *Vertex, f float64) {
//func Scale(v Vertex, f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	Scale(&v, 10)
	//Scale(v, 10)
	fmt.Println(Abs(v))
}

// OUTPUT
// 50
// Without the pointer receiver
// 5
```

##### Methods and pointer indirection

- Functions with a **pointer argument** must take a **pointer**

```go
var v Vertex
Scale(v, 10) // Compile error
Scale(&v, 5) // OK
```

- While methods with **pointer receivers** take either a **value** or a **pointer** as the **receiver**

```go
var v Vertex
v.Scale(5) // OK
p := &v
p.Scale(10) // OK
```

- For the statement `v.Scale(5)`, even though `v` is a **value** and not a **pointer**, the method with the **pointer receiver** is called automatically
- `go` interprets the statement `v.Scale(5)` as `(&v).Scale(5)`, since `Scale` method has a **pointer receiver**

```go
package main

import "fmt"

type Vertex struct {
	X, Y float64
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func ScaleFunc(v *Vertex, f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func main() {
	v := Vertex{3, 4}
	v.Scale(2)
	ScaleFunc(&v, 10)

	p := &Vertex{4, 3}
	p.Scale(3)
	ScaleFunc(p, 8)

	fmt.Println(v, p)
}

// OUTPUT
// {60 80} &{96 72}
```

##### Methods and pointer indirection 2

The opposite is true.

Functions that take a **value argument** MUST take a **value** of that SPECIFIC type...

```go
var v Vertex
fmt.Println(Abs(v)) // OK
fmt.Println(Abs(&v)) // Compile error
```

While methods with **value receivers** take EITHER a **value** OR **pointer** as the receiver when they're called...

```go
var v Vertex
fmt.Println(v.Abs()) // OK
p := &v
fmt.Println(p.Abs(v)) // OK
```

In the case above, the method call `p.Abs()` is interpreted as `(*p).Abs()`.

```go
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func AbsFunc(v Vertex) float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := Vertex{3, 4}
	fmt.Println(v.Abs())
	fmt.Println(AbsFunc(v))

	p := &Vertex{4, 3}
	fmt.Println(p.Abs())
	fmt.Println(AbsFunc(*p))
}

// OUTPUT
// 5
// 5
// 5
// 5
```

## Value receiver or pointer receiver

2 reasons to use a **pointer receiver**:

1. So the method can modify the value the **pointer receiver** points to
2. To avoid copying the value on each method call

All in all, a method can use either a **value receiver** or **pointer receiver**, but not a mix of both.

## Interfaces

An **interface** type is defined as a set of method signatures.

```go
package main

import (
	"fmt"
	"math"
)

type Abser interface {
	Abs() float64
}

func main() {
	var a Abser
	// Returns a float64
	f := MyFloat(-math.Sqrt2)
	v := Vertex{3, 4}

	a = f  // a MyFloat implements Abser
	a = &v // a *Vertex implements Abser

	// In the following line, v is a Vertex (not *Vertex)
	// and does NOT implement Abser.
	a = v

	fmt.Println(a.Abs())
}

type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

type Vertex struct {
	X, Y float64
}

// If *Vertex below, there is an error:
// cannot use v (type Vertex) as type Abser in assignment:
// Vertex does not implement Abser (Abs method has pointer receiver)
// func (v *Vertex) Abs() float64 {
func (v Vertex) Abs() float64 {	
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

```

### Interfaces are implemented implicitly

Implicit interfaces decouple the definition of an interface from its logic, which could then be **reusable** in any package without *prearrangement*. Example below:

```go
package main

import "fmt"

type I interface {
	M()
}

type T struct {
	S string
}

// This method means type T implements the interface I,
// but we don't need to explicitly declare that it does so.
func (t T) M() {
	fmt.Println(t.S)
}

func main() {
	var i I = T{"hello"}
	i.M()
}

// OUTPUT:
// hello
```

### Interfaces are a tuple

Interfaces can be thought of as a "tuple":

`(value, type)`

An interface value holds a value of a specific underlying concrete type.

Calling a method on an interface value executes the method of the same name on its underlying type.

```go
package main

import (
	"fmt"
	"math"
)

type I interface {
	M()
}

type T struct {
	S string
}

func (t *T) M() {
	fmt.Println(t.S)
}

type F float64

func (f F) M() {
	fmt.Println(f)
}

func main() {
	var i I

	i = &T{"Hello"}
	describe(i)
	i.M()

	i = F(math.Pi)
	describe(i)
	i.M()
}

func describe(i I) {
	fmt.Printf("(%v, %T)\n", i, i)
}

// OUTPUT:
// (&{Hello}, *main.T)
// Hello
// (3.141592653589793, main.F)
// 3.141592653589793
```

## Left off here [Interface values with nil underlying values](https://tour.golang.org/methods/12)
