# C#

* C# is a static programming language that is used to write code on top of Microsoft's .NET framework

* C# is object oriented and its syntax is similar to Java

* Writing web apps can be done using C# with ASP.NET framework

* Simple C# syntax below:
```c#
using System;

public class Hello
{
    public static void Main()
    {
        System.Console.WriteLine("Hello, World!");
    }
}
```

* C# is statically-typed language, so we must define types of variables before using them
```c#
int myInt = 1;
float myFloat = 1f;
bool myBoolean = true;
string myName = "John";
char myChar = 'a';
double myDouble = 1.75;
```

* Conditional statements work with booleans
```c#
int a = 4;
int b = 5;
bool result;
result = a < b; // true
result = a > b; // false
result = a <= 4; // a smaller or equal to 4 - true
result = b >= 6; // b bigger or equal to 6 - false
result = a == b; // a equal to b - false
result = a != b; // a is not equal to b - true
result = a > b || a < b; // Logical or - true
result = 3 < a && a < 6; // Logical and - true
result = !result; // Logical not - false
```

* Arrays in C# are zero-base index
```c#
int[] nums = new int[10];
int firstNumber = nums[0];
int secondNumber = nums[1];
nums[2] = 10;
```

* Multidimensional arrays in C#
```c#
int[,] matrix = new int[2,2];

matrix[0,0] = 1;
matrix[0,1] = 2;
matrix[1,0] = 3;
matrix[1,1] = 4;

int[,] predefinedMatrix = new int[2,2] { { 1, 2 }, { 3, 4 } };
```

* Lists in C# hold variables in a specific order
  * Difference between a list and an array is that lists are dynamic sized, while arrays have a fixed size
```c#
List<int> numbers = new List<int>();
numbers.Add(1);
numbers.Add(2);
numbers.Add(3);
numbers.Remove(1);
numbers.RemoveAt(0);
Console.WriteLine(numbers.Count);
```

* Using `AddRange` to add an array to a list
```c#
List<int> numbers = new List<int>();
int[] array = new int[] { 1, 2, 3 };
numbers.AddRange(array);
```

* Add one list to another list using `AddRange`
```c#
List<string> food = new List<string>();
food.Add("apple");
food.Add("banana");

List<string> vegetables = new List<string>();
vegetables.Add("tomato");
vegetables.Add("carrot");

food.AddRange(vegetables);
Console.WriteLine(food.Count);
```

* Dictionaries in C#
```c#
Dictionary<string, long> phonebook = new Dictionary<string, long>();
phonebook.Add("Alex", 415434543);
phonebook["Jessica"] = 415984588;

if (phonebook.ContainsKey("Alex"))
{
    Console.WriteLine("Alex's number is " + phonebook["Alex"]);
}

phonebook.REmove("Jessica");
Console.WriteLine(phonebook.Count);
```

* Strings in C#
```c#
string emptyString = String.Empty;
string anotherEmptyString = "";

string firstName = "Eric";
string lastName = "Smith";
string fullName = firstName + " " + lastName;

string sentence = "I like to play ";
sentence += "chess.";
Console.WriteLine(sentence);

string fullString = "full string";
string partOfString = fullString.Substring(5);
string shorterPart = fullString.Substring(5, 3);
Console.WriteLine(partOfString);
Console.WriteLine(shorterPart);

string name = "John Doe";
string newName = name.Replace("John", "Eric");
Console.WriteLine(newName);

string fruit = "apple,orange,banana";
Console.WriteLine("Found orange in position: " + fruit.IndexOf("orange"));
Console.WriteLine("Found lemon in position: " + fruit.IndexOf("lemon"));
```

* Casting to string in C#
```c#
int integer = 1;
string ourString = "Something to be replaced by an int";
ourString = integer.ToString();
System.Console.WriteLine(ourString);

int x = 1, y = 2;
int sum = x + y;
string sumCalculation = String.Format("{0} + {1} = {2}", x, y, sum);
Console.WriteLine(sumCalculation);
```

* For loops in C#
```c#
for(int i = 0; i < 16; i++)
{

    if(i % 2 == 1)
    {
        continue;
    }

    Console.WriteLine(i);

}
```

* While loops in C#
```c#
int n = 0;

while( n == 0)
{
    Console.WriteLine("N is 0");
    n++;
}
```

* Methods in C#
```c#
public static int Multiply(int a, int b)
{

    return a * b;

}
```

* Classes in C#
```c#
using System;

class myClass{
  public string test = "This works!";
}

class MainClass{
  public static void Main(){
    myClass myObject = new myClass();
    Console.WriteLine(myObject.test);
  }
}
```

* Constructors in C#
```c#
using System;
class Shape{
  public string Type;
  public int Sides;
  public int Sidelength;
  public double Area;  
  public Shape(string type, int sides, int sidelength, double area){
    Type = type;
    Sides = sides;
    Sidelength = sidelength;
    Area = area;
  }
}
class MainClass{
  public static void Main(){
    Shape square = new Shape("square", 4, 1, 1);
    Shape bigsquare = new Shape("square", 4, 2, 4);
    Shape triangle = new Shape("triangle", 3, 3, 3.9);
    Console.WriteLine("A {0} with {1} sides of length {2} has an area of {3}", square.Type, square.Sides, square.Sidelength, square.Area);
    Console.WriteLine("A {0} with {1} sides of length {2} has an area of {3}", bigsquare.Type, bigsquare.Sides, bigsquare.Sidelength, bigsquare.Area);
    Console.WriteLine("A {0} with {1} sides of length {2} has an area of {3}", triangle.Type, triangle.Sides, triangle.Sidelength, triangle.Area);
  }
}
```