# SQL

## Basic overview

SQL is a **relational DB** using a *primary key*.

## Setting SQL_MODE

SQL supports several modes which allow you to tune it to suit your needs.

Check the local and global values for [`sql_mode`](https://mariadb.com/kb/en/sql-mode/):

```sql
SELECT @@SQL_MODE, @@GLOBAL.SQL_MODE;
```

View more docs on `sql_mode` [here](https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_sql_mode)

To remove a value, run the following:

```sql
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
```

## Cheat Sheets

[MySQL Cheat Sheet](https://www.mysqltutorial.org/mysql-cheat-sheet.aspx)

## Queries

### Create New DB

First, create a database where you will host your tables by using the command below:

```sql
CREATE DATABASE databasename
```

### Import A SQL Dump File Into DB

Run command from OS CLI, and either navigate to the file or replace with filepath to current location:

```sql
mysql -u username -p -f databasename < file.sql
```

The `-f` argument option is to _force_ the import by ignoring errors and continue with the rest of the import.

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

`LEFT JOIN` will return all the values from the left table, and the matching ones from the right table. There could be some NULL records in the right table, since some might not return a match.

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

## Advanced Techniques

When working with apps and API development, most of the time there is a 
need for a relational DB. To ease with the load processing in the app, you
can plan your queries to pass that load to the DB with `UNION` queries and the like.

`UNION` is executed as a shared-nothing parallel process with a fast combination step at the end.
This is similar to **Map-Reduce** data processing pattern.
Ultimately, it lets the query use multiple indexes over the same data that
would otherwise require a table scan to combine with `OR`.

[Back home](../README.md)
