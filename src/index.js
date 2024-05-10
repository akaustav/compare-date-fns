import { parse } from 'date-fns';

const dates = [
  '2025-01-01',
  '2025-02-01',
  undefined
];

const isFutureDay = (date) => {
  const currentDate = new Date();
  const inputDate = parse(date, 'yyyy-MM-dd', currentDate);
  console.log(inputDate);

  return currentDate < inputDate;
};

const validDates = dates.every((date) =>
  isFutureDay(date)
);

console.log(validDates);
