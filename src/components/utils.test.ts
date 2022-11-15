import {
  createDate,
  addMonths,
  getMonthName,
  monthDiff,
  calculateMonthlyAmount,
  formatAsMoney,
} from "./utils";

describe("Utils", () => {
  it("createDate", () => {
    const currDate = new Date();

    const defaultDate = createDate({});

    expect(defaultDate.getDate()).toBe(currDate.getDate());
    expect(defaultDate.getMonth()).toBe(currDate.getMonth());
    expect(defaultDate.getFullYear()).toBe(currDate.getFullYear());

    const dateByDay = createDate({ day: 1 });

    expect(dateByDay.getDate()).toBe(1);

    const dateByDayAndMonth = createDate({ day: 1, month: 6 });

    expect(dateByDayAndMonth.getDate()).toBe(1);
    expect(dateByDayAndMonth.getMonth()).toBe(6);
  });

  it("addMonths", () => {
    const date = createDate({ day: 1 });

    // Increment 1 month
    const monthAheadDate = addMonths(date, 1);

    expect(monthDiff(date, monthAheadDate)).toBe(1);

    // Decrement 1 month
    const monthBeforeDate = addMonths(date, -1);

    expect(monthDiff(date, monthBeforeDate)).toBe(1);
  });

  it("getMonthName", () => {
    expect(getMonthName(5)).toBe("June");
    expect(getMonthName(8)).toBe("September");

    expect(getMonthName(13)).toBe("");
    expect(getMonthName(14)).toBe("");
    expect(getMonthName(15)).toBe("");
  });

  it("calculateMonthlyAmount", () => {
    expect(calculateMonthlyAmount(0, 36)).toBe(0);

    expect(calculateMonthlyAmount(1200, 0)).toBe(1200);

    expect(calculateMonthlyAmount(1200, 48)).toBe(1200 / 48);
  });

  it("formatAsMoney", () => {
    expect(formatAsMoney(0)).toBe("$0.00");
    expect(formatAsMoney(100)).toBe("$100.00");
    expect(formatAsMoney(100.59)).toBe("$100.59");
    expect(formatAsMoney(1000.59)).toBe("$1,000.59");
  });
});
