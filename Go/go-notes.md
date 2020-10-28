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
// Golang program illustrates how 
// to implement an interface 
package main 

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
  - static: the `interface` itself
  - dynamic: the value of that **type**, AKA **concrete value** AND **concrete type**
  
```go
// Go program to illustrate the concept 
// of dynamic values and types 
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

- **Type assertions**: an operation applied to the value of the `interface` to extract the values of the `interface`

