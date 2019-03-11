# PHP

Some basics:

- `==` used when comparing two variables
- `[]` used when introducing a new array

## Variables

Declare variables with a `$` prefix

```php
$name = 'Peleke'
$age = 23
```

### Global Variables

[PHP - docs - $GLOBALS](http://php.net/manual/en/reserved.variables.globals.php)

## Arrays

```php
<? php
    $myArray=array(“pizza”, “chocolate”, “coffee”);
    print_r($myArray);

    $anotherArray [0] = “burger”;

    if($number==1) {
    }
>
```

## `$_GET`

`$_GET` is not secure; it appears in the address bar in plain text

`$_GET` is used to know who's accessing which resource by adding a `$_GET` variable as a suffix for the link navigated by the user

## Constructors and Destructors

[PHP - docs - constructors and destructors](http://php.net/manual/en/language.oop5.decon.php)

## Session Variables

To know the user logged in we use the `session_start` command

- Useful to create a temporary sesion for when the user wants to exit a particular session

### Cookies

We can create cookies or remove them by starting a session or setting a time in the past for the cookie to expire

### Storing Passwords Securely

- Level 1 - storing passwords in plain text
- Level 2 - hashed passwords
  - Crackstation.net uses computed, commonly used passwords to crack a hashed string
- Level 3 - `$salt` it by adding `md5` in front of the value
  - To secure data in MySQL is called `hash` or `md5`
- Level 4 - adding a changing `$salt` to the `md5` string by adding another hashing step to the user's password
