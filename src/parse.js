import { parse as parse2 } from 'date-fns2';
import { parse as parse3 } from 'date-fns3';

console.log('===== parse.js =====');

const DATE_FORMAT = 'yyyy-MM-dd';
const currentDate = new Date();
const date = undefined;

console.log('Output of parse from date-fns v2:');
const dateObj2 = parse2(date, DATE_FORMAT, currentDate); // Invalid Date
console.log(dateObj2);

console.log('\nOutput of parse from date-fns v3:');
try {
  const dateObj3 = parse3(date, DATE_FORMAT, currentDate); // TypeError: Cannot read properties of undefined (reading 'match')
  console.log(dateObj3);
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}

console.log('\nOutput of parse from date-fns v3 with workaround:');
try {
  const dateObj3 = parse3(`${date}`, DATE_FORMAT, currentDate); // Invalid Date
  console.log(dateObj3);
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
