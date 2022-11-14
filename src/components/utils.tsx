export function createDate({
  day,
  month,
  year,
}: {
  day?: number;
  month?: number;
  year?: number;
}): Date {
  const newDate = new Date();

  if (day) {
    newDate.setDate(day);
  }

  if (month) {
    newDate.setMonth(month);
  }

  if (year) {
    newDate.setFullYear(year);
  }

  return newDate;
}

export function getMonthName(month: number) {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][month];
}

export function monthDiff(dateOne: Date, dateTwo: Date) {
  return (
    (dateTwo.getFullYear() - dateOne.getFullYear()) * 12 -
    dateOne.getMonth() +
    dateTwo.getMonth()
  );
}

export function calculateMonthlyAmount(amount: number, months: number): number {
  return amount / (months || 1);
}

export function formatAsMoney(amount: number) {
  const moneyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return moneyFormatter.format(amount);
}
