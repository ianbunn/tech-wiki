# SQL

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