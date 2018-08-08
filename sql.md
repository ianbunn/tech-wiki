# SQL

## Order by a specific set of rules

The `ORDER BY` keyword is used to sort the result-set in `ASC` (ascending) or `DESC` (descending) order:

```sql
SELECT column1, column2...
FROM table_name
ORDER BY column1 ASC, column2 DESC
```

TIP: By default, the order is sorted by ascending order.

## Select multiple items with multiple known IDs

The first option for multiple IDs is relative simple:

```sql
SELECT * FROM some_table
WHERE ID IN ('1001','1005','2004');
```

## Select multiple items with multiple items from another table

Run the following query:

```sql
SELECT * FROM some_table
WHERE ID IN (
    SELECT column_name_ID FROM some_other_table
    WHERE field_name = 'value-name'
);
```