// Uncomment one of the following lines to test the code
// import { parse } from 'date-fns2';
import { parse } from 'date-fns3';

const dates = [
  '2000-01-01',
  '9999-02-01',
  undefined
];

const isFutureDay = (date) => {
  const currentDate = new Date();
  const inputDate = parse(date, 'yyyy-MM-dd', currentDate);
  console.log(inputDate);

  return currentDate < inputDate;
};

const validDates = dates.map((date) =>
  isFutureDay(date)
);

console.log(validDates); // [false, true, false]
