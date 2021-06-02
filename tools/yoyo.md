# Yoyo Database Migrations

Yoyo is a DB schema migration tool.

Migrations are written as SQL files or Python scripts that define a list of migration steps.

Documentation: [yoyo-migrations 7.2.1 documentation](https://ollycope.com/software/yoyo/latest/)

## Lessons Learned

**WARNING**: if a migration is not in the `_yoyo_log`, it will try to apply it every time, so set the migration's operation as `mark` if you don't want to lose any data! ESPECIALLY migrations with `0000.*` prefix (prefix varies between source codes).

[Back home](../README.md)
