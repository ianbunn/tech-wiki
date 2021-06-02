# SQL

## Basic overview

SQL is a **relational DB** using a *primary key*.

## Queries

### Create new database

First, create a database where you will host your tables by using the command below:

```sql
CREATE DATABASE databasename
```

### Create new tables

If table exists drop it and create a new table with the same name in the database with column details as shown below:

```sql
DROP DATABASE IF EXISTS databasename
USE databasename

CREATE TABLE tablename (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    columnname VARCHAR(30) NOT NULL,
    age INTEGER(10) NOT NULL,
    city VARCHAR(64) NOT NULL,
    employed BOOLEAN DEFAULT true NOT NULL
)
```

### Drop table

Run the following command to drop a table and ALL OF ITS DATA:

```sql
DROP DATABASE databasename
```

### Insert records into database's tables

Run the following command:

```sql
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jacob", TRUE, "Misty", 10);
```

OR all the records above can be combined by adding a comma in between the semicolon and the next item, as seen below:

```sql
INSERT INTO databasename (name, has_pet, pet_name, pet_age)
VALUES  ("Ahmed", TRUE, "Rockington", 100),
        ("Roberto", TRUE, "Loki", 100),
        ("Jacob", TRUE, "Misty", 10);
```

### Order by a specific set of rules

The `ORDER BY` keyword is used to sort the result-set in `ASC` (ascending) or `DESC` (descending) order:

```sql
SELECT column1, column2...
FROM table_name
ORDER BY column1 ASC, column2 DESC
```

TIP: By default, the order is sorted by ascending order.

### Select multiple items with multiple known IDs

The first option for multiple IDs is relative simple:

```sql
SELECT * FROM some_table
WHERE ID IN ('1001','1005','2004');
```

### Select multiple items with multiple items from another table

Run the following query:

```sql
SELECT * FROM some_table
WHERE ID IN (
    SELECT column_name_ID FROM some_other_table
    WHERE field_name = 'value-name'
);
```

### Select multiple tables with `INNER JOIN`

`INNER JOIN` will only return all matching values from both tables. See usage below:

```sql
SELECT title, firstName, lastName
FROM books
INNER JOIN authors ON books.authorId = authors.id;
```

### Select multiple tables with `LEFT JOIN`

`LEFT JOIN` will return all of the values from the left table, and the matching ones from the right table. There could be some NULL records in the right table, since some might not return a match.

```sql
SELECT title, firstName, lastName
FROM books
LEFT JOIN authors ON books.authorId = authors.id;
```

### Select multiple tables with `RIGHT JOIN`

`RIGHT JOIN` returns all of the values from the right table, and the matching ones from the left table. There could be some NULL records in the left table, since some might not return a match.

```sql
SELECT title, firstName, lastName
FROM books
RIGHT JOIN authors ON books.authorId = authors.id;
```

### Select from a JSON column

Replace `table_name` and `column_name` below:

```sql
SELECT * FROM table_name
WHERE JSON_EXTRACT(column_name, '$.attribute_name') = "string";
```

[Back home](./README.md)
