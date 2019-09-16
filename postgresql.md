# PostgreSQL

## Docs

[PostgreSQL 11 - 9.4 String Functions and Operators](https://www.postgresql.org/docs/11/functions-string.html)

[PostgreSQL 11 - 9.7 Pattern Matching](https://www.postgresql.org/docs/current/functions-matching.html)

[PostgreSQL 11 - 9.9 Date/Time Functions and Operators](https://www.postgresql.org/docs/current/functions-datetime.html)

[PostgreSQL 11 - 9.24 Set Returning Functions](https://www.postgresql.org/docs/current/functions-srf.html)

## Order of Operations

```sql
from
where
group by
having
select
order by
limit
```

## Data Types

[PostgreSQL - Data types](https://www.postgresql.org/docs/11/datatype.html)

* ANSI data types
  * character
  * character varying (varchar)
  * character large object
  * nchar
  * nchar varying
* Binary data types
  * binary
  * binary varying
  * binary large object
* Number - exact or decimal type
  * numeric
  * decimal
* Whole numbers - difference in storage size
  * smallint - 2 bytes +/- 32,000
    * Aka int2
  * integer - 4 bytes +/- 2,000,000,000
    * Aka int4
  * bigint - 8 bytes +/- 9x10^18
    * Aka int8
* Inexact decimal types
  * float
  * real
  * double precision
* Boolean
  * true or false
* Date and time data types
  * date
  * time
  * timestamp
  * timestamptz
  * interval
* JSON
  * Tutorial [here](http://www.postgresqltutorial.com/postgresql-json/) to work with JSON data types

### Create a custom data type

```sql
CREATE TYPE mpaa_rating AS ENUM (
	'G',
	'PG',
	'PG-13',
	'R',
	'NC-17');
```

### Coalesce

```sql
select
	coalesce(title, '[title]') || ' is ' || coalesce(length || ' minutes ', 'unknown length') as length_desc
from film;
```

### Type casting

```sql
select
	int '33',
	'33'::int,
	cast('33' as int);
```

```sql
-- numeric needs to provide (precision, scale)
select
	0.4235::numeric(5, 4) * 10000000,
	0.4235::real * 10000000;
```
* Other examples of type casting:

```sql
select int '33';
select int '33.3'; --errored out bc 33.3 is not a int and no explicit coercion is happening
select cast(33.3 as int); 
select cast(33.8 as int);
select 33::text;
select 'hello'::varchar(2);
select cast(32768 as smallint); --32000 is the highest that can be represented by a smallint, caps out at 32,768
select 12.1::numeric(1,1);--12 does not fit in 1 precision and 1 scale
```

## Date and Time Functions and Operators

* Find all timezone names

```sql
select *
from pg_timezone_names
order by name;
```

* Find all timezones' abbreviations

```sql
select *
from pg_catalog.pg_timezone_abbrevs;
```

### Time standards

```sql
--ISO yyyy-mm-dd
select '2018-01-01'::date - '2017-01-01'::date;

--ISO HH:MM:SS
select '12:30:22'::time;
```

### Select current time details

`show timezone;`

```sql
select
	current_date,
	current_time,
	current_timestamp;
```

### Show day time as interval

```sql
select
	title,
	cast(rental_duration || ' days' as interval) as duration,
	cast(rental_duration + 1 || ' days' as interval) as "duration + 1"
from film;
```

### Find the busiest hour from a set of timestamps

```sql
select
	date_part('hour', rental_date) as hr,
	count(*)
from rental
group by hr
order by count desc;
```

### Find an amount based on the month from a set of dates and amounts

```sql
select
	date_trunc('month', payment_date) as "month",
  	sum(amount) as total
from payment
group by "month"
order by "month";
```

### Find the last day and sum the amount of items based on a set of dates

```sql
select
	count(*) as "total # EOM rentals"
from rental
where
	date_trunc('month', rental_date) + interval '1 month' - interval '1 day'
	= date_trunc('day', rental_date);
```

### Find the amount of hours based on 2 dates

```sql
select
	customer_id,
	round(sum(date_part('epoch', return_date - rental_date)) / 3600) as sum_hours
from rental
group by customer_id
order by sum_hours desc
limit 3;
```

### Find the amount based on a set of dates that occur on weekends

```sql
select
	sum(amount) as "total $ on weekends"
from payment
where extract(isodow from payment_date) between 6 and 7;
```

```sql
select sum(amount) as "total $"
from payment
where date_part('isodow', payment_date) in (6, 7);
```

## String Functions and Operators

### String concatenation

```sql
-- outputs null for when email is null
select first_name || ' has email ' || email
from customer
where email is null;

-- outputs the defaullt string using coalesce for nulls
select first_name || ' has email ' || coalesce(email, 'unknown')
from customer
where email is null;
```

### Concatenation

```sql
-- it will skip the nulls
select concat(first_name, ' has email ', email)
from customer;
```

### Trim

```sql
select length(trim('   ian         '));
```

```sql
select *
from address
where length(trim(address2)) > 0 and
	address2 is not null;
```

#### Find the names that have spaces in it

```sql
select title
from film
where length(title) - length(trim(title)) > 0;
```

## Set Returning Functions

### GENERATE_SERIES

```sql
select *
from 
	generate_series(
		'2019-01-01 05:00 UTC'::timestamptz,
		'2019-12-01 05:00 UTC'::timestamptz,
		'1 month'
	)
```

## Aggregate Functions

### `COUNT`

```sql
select
	count(*) as "# customers",
	count(email) as "# customers with email",
	100.0 * count(email) / count(*) as "# with email" --if 100.0 * wasn't there, it would've output 0 bc of data types
from customer;
```

### `COUNT` with `DISTINCT`

```sql
select
	count(distinct customer_id) --use DISTINCT inside the count aggregate function
from payment;
```

### `AVG` as in average

```sql
select
	avg(return_date - rental_date) as "avg rental duration"
from rental;
```

### `SUM`

```sql
select
	sum(amount)
from payment;
```

### `ROUND`

* Example to round when you are getting a percentage and using filter

```sql
select
	round(100.0 * count(*) filter(where rating = 'NC-17') / count(*)) as "% NC-17",
	round(100.0 * count(*) filter(where rating = 'PG') / count(*)) as "% PG",
	round(100.0 * count(*) filter(where rating = 'G') / count(*)) as "% G",
	round(100.0 * count(*) filter(where rating = 'R') / count(*)) as "% R",
	round(100.0 * count(*) filter(where rating = 'PG-13') / count(*)) as "% PG-13"
from film;
```

### Repeat

```sql
select rating, repeat('*', (count(*) / 10)::int) as "count/10"
from film
where rating is not null
group by rating;
```

* Repeat function with left and length

```sql
select 
	left(title, 3) || repeat('*', length(title) - 3) as "Guess!"
from film;
```

#### Find the amount of letters a text value has

```sql
select
	first_name,
	length(first_name) - length(replace(first_name, 'Z', '')) as count
from customer
order by count desc;
```

## Group By

```sql
select
	date_part('year', payment_date) as year,
	date_part('month', payment_date) as month,
	staff_id,
	count(*) as num_payments,
	sum(amount) as payment_total,
	avg(amount) as avg_payment_amount
from payment
group by 
	date_part('year', payment_date),
	date_part('month', payment_date),
	staff_id
order by
	year, month, staff_id
```

## Case Expressions and Aggregate Functions

### Regular case expression

* In every case expresion, there is an implied `else null`

```sql
select
	case
		when length < 60 then 'short'
		when length between 60 and 120 then 'medium'
		when length > 120 then 'long'
		else 'short'
	end,
	count(*)
from film
group by 1;
```

### Case expression with aggregate function

* `COUNT` and `SUM` can be used interchangebly

```sql
select
	count(case when rating in ('R', 'NC-17') then 1 end) as adult_films,
	count(*) as total_films,
	100.0 * sum(case when rating in ('R', 'NC-17') then 1 else 0 end) / count(*) as percent
from film;
```

```sql
select
	case
		when length between 0 and 59 then '0-1hrs'
		when length between 60 and 119 then '1-2hrs'
		when length between 120 and 179 then '2-3hrs'
		else '3hrs+'
	end as len,
	count(*)
from film
group by 1
order by 1;
```

### PostgreSQL Filter

```sql
select 
	count(*) filter(where rating in ('R', 'NC-17')) as adult_films,
	count(*) filter(where rating = 'G' and length > 120) as nanny_movies
from film;
```

```sql
select
	count(*)
		filter(where return_date - rental_date < interval '3 days') as "lt 3 days",
	count(*)
		filter(where return_date - rental_date >= interval '3 days') as "gt 3 days",
	count(*)
		filter(where return_date is null) as "never returned"
from rental;
```

* Similar to filter, `bool_and`

```sql
select
	customer_id
from payment
group by customer_id
having bool_and(amount >2);
```

## Joins

### Cross join

* Cross join - cartesian product

```sql
select 
	f.film_id, 
	s.store_id,
	count(i.inventory_id) as stock
from film f
	cross join store s
	left outer join inventory i
	on f.film_id = i.film_id
	and s.store_id = i.store_id
group by f.film_id, s.store_id
order by stock, f.film_id, s.store_id;
```

### Inner join

* Inner join - cross join + filtering

```sql
select 
	r.customer_id,
	count(distinct f.film_id) as num_films,
	count(distinct fa.actor_id) as num_actors
from rental r
	inner join inventory i using (inventory_id)
	inner join film f using (film_id)
	inner join film_actor fa using (film_id)
group by customer_id
order by customer_id;
```

* Inner join with multiple tables and self join (cross join with itself)

```sql
select
	r.customer_id,
	i.film_id
from rental r
	inner join inventory i
		on r.inventory_id = i.inventory_id
	inner join rental r2
		on r.customer_id = r2.customer_id
		and r2.rental_date > r.rental_date
	inner join inventory i2
		on r2.inventory_id = i2.inventory_id
where i.film_id = 97 and i2.film_id = 841
```

### Outer join

* Outer join - cross join + filtering + add miissing rows

* 3 types of outer joins:
  * Left outer join
  * Right outer join
  * Full outer join

```sql
select f.film_id, f.title, fa.actor_id, a.first_name, a.last_name
from film f
	left outer join 
		(film_actor fa 
		inner join actor a using (actor_id))
	using (film_id)
order by f.film_id;
```

```sql
select f.title, count(i.inventory_id)
from film f
	left outer join inventory i using (film_id)
group by f.title
order by count(i.inventory_id);
```

* Outer join with multiple conditions

```sql
select 
	c.customer_id,
	count(r.rental_id) num_rented
from customer c
	left outer join rental r
		on c.customer_id = r.customer_id
		and date_trunc('day', r.rental_date) = '20050524'
group by c.customer_id
order by num_rented desc, c.customer_id
```

* Outer join with `generate_series`

```sql
select
	months.month,
	count(r.rental_id)
from generate_series(
		'2005-01-01'::timestamptz,
		'2005-12-01'::timestamptz,
		'1 month'
	) months(month)
left outer join rental r
	on date_trunc('month', r.rental_date) = months.month
group by months.month;
```

## Table Subqueries

```sql
--show the avg of rentals per customer
select avg(count)
from (select customer_id, count(*)
	  from rental
	  group by customer_id) t;
```

```sql
--side step order of operations with table subqueries
select
	title,
	rental_rate,
	replacement_cost,
	ceil(replacement_cost / rental_rate) break_even
from film
where ceil(replacement_cost / rental_rate) > 30;

select *
from (select
		  title,
		  rental_rate,
		  replacement_cost,
		  ceil(replacement_cost / rental_rate) break_even
	  from film) t
where break_even > 30;
```

```sql
--create a virtual table
select f.film_id, f.title, f.length, c.desc
from film f
	inner join
		(values
		  ('short',0,60),
		  ('medium',60,120),
		  ('long',120,10000)) c("desc","min","max")
  	on f.length >= c.min and f.length < c.max;
```

```sql
--7.7 Write a query to return each customer 4 times
select
	c.first_name,
	c.last_name
from customer c
	cross join (values(1), (2), (3), (4)) v(n)
order by c.customer_id
```

```sql
--7.8 Return how many rentals the biz gets on avg on each day of the week
select
  to_char(rent_day, 'Day') as day_name,
  round(avg(num_rentals)) as average
from
  (select date_trunc('day', rental_date) as rent_day, count(*) as num_rentals
   from rental
   group by rent_day) as T
group by day_name
order by average desc;
```

## Lateral Subqueries

A **lateral subquery** is when you refer to the outer select query inside the subquery.

In the example below from PostgreSQL course (Mastery with Data)

* Return the 3 most recent rentals for each customer
* Join the customer table onto the most recent rentals

```sql
select
	c.customer_id,
	d.rental_id,
	d.rental_date
from customer c
inner join lateral
	(
		select 
			r.customer_id,
			r.rental_id,
			r.rental_date,
			r.inventory_id
		from rental r
		where r.customer_id = c.customer_id
		order by r.rental_date desc
		limit 3
	) as d
on c.customer_id = d.customer_id
```

### Lateral subquery exercises

```sql
select
	c.customer_id,
	c.first_name,
	c.last_name,
	d.title,
	d.rental_date
from customer c
left join lateral
	(
		select 
			r.customer_id,
			r.rental_id,
			r.rental_date,
			r.inventory_id,
			f.title
		from rental r
		inner join inventory i
		on i.inventory_id = r.inventory_id
		inner join film f
		on f.film_id = i.film_id
		where r.customer_id = c.customer_id and f.rating = 'PG'
		order by r.rental_date
		limit 1
	) as d
on c.customer_id = d.customer_id
```

## Common Table Expressions (CTE)

```sql
--7.10 Write a query to list the customers who rented out the film with title "BRIDE INTRIGUE" and then at some later date rented out the film with title "STAR OPERATION"
with rental_detail as
(
select
	r.rental_date,
	r.customer_id,
	f.title
from rental r
inner join inventory i using (inventory_id)
inner join film f using (film_id)
)
select r1.customer_id
from rental_detail r1
inner join rental_detail r2
on r1.customer_id = r2.customer_id
and r2.rental_date > r1.rental_date
and r1.title = 'BRIDE INTRIGUE'
and r2.title = 'STAR OPERATION'

--7.11 calculate the amount of income received each month and compare that against the previous month's income, showing the change
with monthly_amounts as
(
select
	date_trunc('month', payment_date) as month,
	sum(amount) total
from payment
group by month
)
select
	curr.month,
	curr.total income,
	prev.total "prev month income",
	(curr.total - prev.total) change
from monthly_amounts curr
left join monthly_amounts prev
	on curr.month = prev.month + interval '1 month'
```

## Window Functions

```sql
select *
from (select
	title,
	length,
	row_number() over (partition by rating order by length),
	rank() over (partition by rating order by length),
	dense_rank() over (partition by rating order by length)
	from film) t
where rank <= 4
```

## Helpful Query Examples

```sql
--7.12 Write a query to return the customers who rented a film in 2005 but none in 2006
select
	distinct r.customer_id
from rental r
where date_part('year', r.rental_date) = 2005
and customer_id not in
(select customer_id
	from rental
	where date_part('year', rental_date) = 2006)
order by r.customer_id

/*
--7.13 What are the top 3 countries the customers are from. Show both the number of customers 
from each country and percentage (round the percentage to the nearest whole number)
*/
select
co.country,
count(*) num_customers,
round(100 * count(*) / (select count(*) from customer)) as "percent"
from customer c
	inner join address a using (address_id)
	inner join city ci using (city_id)
	inner join country co using (country_id)
group by co.country
order by num_customers desc
limit 3

/*
7.14 Write a query to perform a running total of payments received, grouping by month 
(ie. for each month return the amount of money received that month and also the total 
amount of money received up to (and including) that month - this is a useful view to 
have if you wanted to produce a cumulative chart). Hint - Re-use the monthly_amounts CTE from exercise 7.11
*/
with monthly_amounts as
(
select
	date_trunc('month', payment_date) as month,
	sum(amount) total
from payment
group by month
)
select
	ma1.month,
	ma1.total,
	(select
		sum(ma2.total)
	from monthly_amounts ma2
	where ma2.month <= ma1.month) cumamount
from monthly_amounts ma1
order by ma1.month

/*
--7.15 The rental table has 16,044 rows but the maximum rental ID is 16,049. 
This suggests that some rental IDs have been skipped over. Write a query 
to find the missing rental IDs. The generate_series function may come in handy

Solution:
This was a particularly tricky one! generate_series is used to obtain the full 
list of IDs from the min to the max and then via a correlated subquery, 
we only keep those that don't exist in the rental table.
*/
select
s.id
from generate_series(
  (select min(rental_id) from rental),
  (select max(rental_id) from rental)) as s(id)
 where not exists
 	(select *
 	from rental
 	where rental_id = s.id)
 	
/*
 * 7.16 In an earlier exercise I asked you to see if you could find a way to return the 
 * last 3 payments made in Jan, 2007 but ordered ascending. You've got the tools now to 
 * accomplish this - see if you can figure it out!

Solution:

The key insight to accomplish this is to realize you can find and select the 3 rows 
you're after using a table subquery. Within that subquery you're able to order the payments 
in descending order to be able to pick the last 3, but then outside of that subquery you're 
once again free to specify a new ordering for display purposes!
 */
select payment_id, amount, payment_date
from 
  (select payment_id, amount, payment_date
   from payment
   where payment_date >= '2007-01-01'
     and payment_date < '2007-02-01'
   order by payment_date desc
   limit 3) as p
order by payment_date asc;
```