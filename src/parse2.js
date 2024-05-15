import { parse as parse2 } from 'date-fns2';
import { parse as parse3 } from 'date-fns3';

console.log('===== parse2.js =====');

const dates = [
  '2000-01-01',
  '9999-02-01',
  undefined
];

const isFutureDay = (date, version, useWorkAround) => {
  const currentDate = new Date();
  let inputDate;

  if (version === 2) {
    inputDate = parse2(date, 'yyyy-MM-dd', currentDate); // For date == undefined, undefined is past
  } else {
    try {
      inputDate = parse3(date, 'yyyy-MM-dd', currentDate); // For date == undefined, TypeError: Cannot read properties of undefined (reading 'match')
    } catch (e) {
      if (useWorkAround === true) {
        inputDate = parse3(`${date}`, 'yyyy-MM-dd', currentDate); // For date == undefined, undefined is past
      } else {
        console.error(`${e.name}: ${e.message}`);
        return;
      }
    }
  }

  const isFuture = inputDate > currentDate;
  console.log(date, isFuture ? 'is future' : 'is past');
  // For date == undefined,
  // - Output from date-fns v2: undefined is past
  // - Output from date-fns v3: TypeError: Cannot read properties of undefined (reading 'match')

  return isFuture;
};

console.log('Output of parse from date-fns v2:');
dates.forEach(date => isFutureDay(date, 2));

console.log('\nOutput of parse from date-fns v3:');
dates.forEach(date => isFutureDay(date, 3));

console.log('\nOutput of parse from date-fns v3 with workaround:');
dates.forEach(date => isFutureDay(date, 3, true));
