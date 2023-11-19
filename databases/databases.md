# Databases

## Tips and tricks

### Add index to columns for faster look up

If keys in that look up table don't have an index on the mapping column, adding one 
would help the look-up queries become faster.

At 1.5+ mil rows, it takes a couple of seconds to complete. With an index, the same query takes 50ms.

The look-up table gets updated in batches, so it's not a large write cost to add another index to the table.
