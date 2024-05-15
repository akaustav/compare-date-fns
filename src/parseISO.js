import { parseISO as parseISO2 } from 'date-fns2';
import { parseISO as parseISO3 } from 'date-fns3';

console.log('===== parseISO.js =====');

const date = new Date();

console.log('Output of parseISO from date-fns v2:');
const date2 = parseISO2(date); // Invalid Date
console.log(date2);

console.log('\nOutput of parseISO from date-fns v3:');
try {
  const date3 = parseISO3(date); // TypeError: dateString.split is not a function
  console.log(date3);
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
