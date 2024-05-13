import { parse } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';
const currentDate = new Date();
const date1 = '2025-01-01';
const date2 = undefined;

const date1Obj = parse(date1, DATE_FORMAT, currentDate);
console.log(date1Obj);

const date2Obj = parse(date2, DATE_FORMAT, currentDate);
console.log(date2Obj);

// If the input date string is undefined:
// - in `date-fns` v2.30.0, the `parse` function returns `Invalid Date`.
// - in `date-fns` v3.6.0, the `parse` function throws an error.
