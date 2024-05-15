import { parseISO as parseISO2 } from 'date-fns2';
import { parseISO as parseISO3 } from 'date-fns3';

const date = new Date();

const date2 = parseISO2(date);
console.log('Output from date-fns v2', date2);

const date3 = parseISO3(date); // TypeError: dateString.split is not a function
console.log('Output from date-fns v3', date3);
