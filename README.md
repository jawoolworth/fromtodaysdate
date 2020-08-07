# Court Dates

This is a simple application that will list the current date at the top.

Bellow the current date will be a list of intervals with associated dates in the future.  The intervals types that will be used are:
* Days
  * This will calculate based on actual calendar days.
* Weeks
  * This will calculate as intervals of 7 days.
* Months
  * This will calculate as the day of month in the subsequent month.
    * For months where the calculated day is greater than days in the given month, the days in excess of the total days in the month will be added to the last day.
      * For example, calculating out one month from January 31 will result in March 3 in non-leap years, assuming March 3 falls on a work day.
* Years
  This will increment the year.
* Court Days
  This will only count court days to get to the desired date.

If the calculated date falls on a weekend or holiday, then the reported date will be the next court date.  

## License

ISC License

Copyright (c) 2020, Joshua Woolworth

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.