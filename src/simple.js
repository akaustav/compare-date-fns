import { parse as parse2 } from 'date-fns2';
import { parse as parse3 } from 'date-fns3';

const DATE_FORMAT = 'yyyy-MM-dd';
const currentDate = new Date();
const date = undefined;

const dateObj2 = parse2(date, DATE_FORMAT, currentDate); // Invalid Date
console.log('Output from date-fns v2', dateObj2);

const dateObj3 = parse3(date, DATE_FORMAT, currentDate); // TypeError: Cannot read properties of undefined (reading 'match')
console.log('Output from date-fns v3', dateObj3);
