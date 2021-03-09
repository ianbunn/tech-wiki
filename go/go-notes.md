# Go Notes

## Variables

- **Local**: local variables need to be in `camelCase`
- **Exported**: exported variables need to be in `CapitalCase`
  - Similar to `public` vars in other languages
  
- **_**: use an underscore for when a variable is not used

## Interfaces

- **`interface`** is a custom type that is used to specify a set of one OR more method signatures
  - `interface` is abstract, so it's not allowed to create an instance of the `interface`
  - However, it's allowed to create a variable of an `interface` type and this variable can be assigned with a concrete type value that has methods the `interface` requires
  - In other words, `interface` is a collection of methods as well as it is a custom type

### When to use `interface`

- When in methods or functions you want to pass different types of arguments
- When multiple types implement the same `interface`

### Interface syntax

```go
// Creating an interface
// Interface name, myinterface is enclosed between the type and interface keywords
type myinterface interface {
    // Method signature

    // Methods
    func1() int
    func2() float64
}
```

- An `interface` type is somewhat of a "reusable method(s)" to use by assigning it to a new variable, for example: `v`
  - Then, `v` can access the `interface` method signature and execute them by passing the necessary method's argument(s)
  - Each of `v` methods can be accessed with `v.func1` or `v.func2`
  
```go
package main
// Golang program illustrates how
// to implement an interface

import "fmt"

// Creating an interface
type tank interface {

  // Methods
  Tarea() float64
  Volume() float64
}

type myvalue struct {
  radius float64
  height float64
}

// Implementing methods of
// the tank interface
func (m myvalue) Tarea() float64 {

  return 2*m.radius*m.height +
    2*3.14*m.radius*m.radius
}

func (m myvalue) Volume() float64 {

  return 3.14 * m.radius * m.radius * m.height
}

// Main Method
func main() {

  // Accessing elements of
  // the tank interface
  var t tank
  t = myvalue{10, 14}
  fmt.Println("Area of tank :", t.Tarea())
  fmt.Println("Volume of tank:", t.Volume())
}

// OUTPUT
// Area of tank: 908
// Volume of tank: 4396
```

### Important points

- The zero value of an `interface` is `nil`
- An **empty** `interface` contains zero methods, so all types implement the **empty** `interface`

- Two types of `interface`:
  - ***static***: the `interface` itself
  - ***dynamic***: the value of that **type**, AKA **concrete value** AND **concrete type**
  
```go
// Go program to illustrate the concept
// of dynamic values and type
package main
  
import "fmt"
  
// Creating an interface
// Static interface (pointing to itself)
type tank interface {
  
    // Methods
    Tarea() float64
    Volume() float64
}
  
func main() {
  
    // Dynamic interface
    var t tank
    // Returns the dynamic value of the interface
    fmt.Println("Value of the tank interface is: ", t)
    // Returns the dynamic type of the interface
    fmt.Printf("Type of the tank interface is: %T ", t)
}

// OUTPUT
// Value of the tank interface is:  <nil>
// Type of the tank interface is: <nil>
```

In the example above, both return `<nil>` because the interface does NOT know who is implementing it.

#### Type Assertion

- **Type assertions**: an operation applied to the value of the `interface` to extract the values of the `interface`
  - In other words, it extracts the values of the interface

```go
a.(T)
```

- Above, `a` is the value or the expression of the interface
- `T` is the type AKA **asserted** type
  - Type assertion is used to check the **dynamic** type of its operand, and if it will match to the **asserted** type or not
  - If `T` is of **concrete** type, then the type assertion checks the given **dynamic** type of `a` equals to `T`
    - If `true`, then type assertion returns the **dynamic** value of `a`
    - If `false`, then the operation fails and **panics**

```go
// Go program to illustrate 
// the type assertion 
package main 

import "fmt"

func myfun(a interface{}) { 

	// Extracting the value of a 
	val := a.(string) 
	fmt.Println("Value: ", val) 
} 
func main() { 

	var val interface { 
	} = "Peace & Love"
	
	myfun(val) 
} 

// OUTPUT
// Value: Peace & Love
```

- If the above example had `val := a.(int)`, the program would **panic**
- To solve this, use the following syntax, `value, ok := a.(T)`
  - If type of `a` equals to `T`, then the value contains the dynamic value of `a` and `ok` will be set to `TRUE`
  - If type of `a` does not equal to `T`, then `ok` is set to `FALSE` and value contains the zero value for the type, and program does NOT **panic**

```go
package main

import "fmt"

func myfunc(a interface {}) {
  value, ok := a.(float64)
  fmt.Println(value, ok)
}

func main() {
  var a1 interface {

  } = 98.09

  myfunc(a1)

  var a2 interface {
  } = "Peace & Love"

  myfunc(a2)
}

// OUTPUT
// 98.09 true
// 0 false
```

#### Type Switch

- **Type switch**: used to compare the **concrete** type of an `interface` with the multiple types provided in case statements
  - Similar to **type assertion** with one main difference, case specifies types, not the values
  - Able to compare a type to the `interface` type

```go
package main

import "fmt"

func myfunc(a interface{}) {
  
  // Using type switch
  switch a.(type) {

    case int:
      fmt.Println("Type: int, Value: ", a.(int))
    case string:
      fmt.Println("\nType: string, Value: ", a.(string))
    case float64:
      fmt.Println("\nType: float64, Value: ", a.(float64))
    case bool:
      fmt.Println("\nType: boolean, Value: ", a.(bool))
    default:
      fmt.Println("\nType: not found")
  }
}

// Main method
func main() {

  myfunc("Peace & Love")
  myfunc(420.69)
  myfunc(true)
}

// OUTPUT
// Type: string, Value: Peace & Love
// Type: float64, Value: 420.69
// Type: boolean, Value: TRUE
```

Resources:

- [GeeksForGeeks - Interfaces in golang](https://www.geeksforgeeks.org/interfaces-in-golang/)
