import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  isSameDay,
  differenceInCalendarDays,
  startOfYear,
  addYears,
  endOfYear,
  startOfQuarter,
} from "date-fns";

export const defineds = {
  startOfToday: startOfDay(new Date()),
  endOfToday: endOfDay(new Date()),
  startOfYesterday: startOfDay(addDays(new Date(), -1)),
  endOfYesterday: endOfDay(addDays(new Date(), -1)),
  startOfWeek: startOfWeek(new Date()),
  startOf7DaysAgo: startOfDay(addDays(new Date(), -7)),
  startOf30DaysAgo: startOfDay(addDays(new Date(), -30)),
  startOf90DaysAgo: startOfDay(addDays(new Date(), -90)),
  // endOfWeek: endOfWeek(new Date()),
  // startOfLastWeek: startOfWeek(addDays(new Date(), -7)),
  // endOfLastWeek: endOfWeek(addDays(new Date(), -7)),
  startOfMonth: startOfMonth(new Date()),
  // endOfMonth: endOfMonth(new Date()),
  startOfQuarter: startOfQuarter(new Date()),
  startOfLastMonth: startOfMonth(addMonths(new Date(), -1)),
  endOfLastMonth: endOfMonth(addMonths(new Date(), -1)),
  startOfYear: startOfYear(new Date()),
  startOfLastYear: startOfYear(addYears(new Date(), -1)),
  endOfLastYear: endOfYear(addYears(new Date(), -1)),
};

const staticRangeHandler = {
  range: {},
  isSelected(range) {
    const definedRange = this.range();
    return (
      isSameDay(range.startDate, definedRange.startDate) &&
      isSameDay(range.endDate, definedRange.endDate)
    );
  },
};

export function createStaticRanges(ranges) {
  return ranges.map((range) => ({ ...staticRangeHandler, ...range }));
}

export const defaultStaticRanges = createStaticRanges([
  {
    label: "Today",
    range: () => ({
      startDate: defineds.startOfToday,
      endDate: defineds.endOfToday,
    }),
  },
  {
    label: "Yesterday",
    range: () => ({
      startDate: defineds.startOfYesterday,
      endDate: defineds.endOfYesterday,
    }),
  },

  {
    label: "Week to date",
    range: () => ({
      startDate: defineds.startOfWeek,
      endDate: defineds.endOfToday,
    }),
  },
  // {
  //   label: "Month to date",
  //   range: () => ({
  //     startDate: defineds.startOfMonth,
  //     endDate: defineds.endOfToday,
  //   }),
  // },
  // {
  //   label: "Quarter to date",
  //   range: () => ({
  //     startDate: defineds.startOfQuarter,
  //     endDate: defineds.endOfToday,
  //   }),
  // },
  {
    label: "Year to date",
    range: () => ({
      startDate: defineds.startOfYear,
      endDate: defineds.endOfToday,
    }),
  },
  {
    label: "Last 7 days",
    range: () => ({
      startDate: defineds.startOf7DaysAgo,
      endDate: defineds.endOfToday,
    }),
  },
  {
    label: "Last 30 days",
    range: () => ({
      startDate: defineds.startOf30DaysAgo,
      endDate: defineds.endOfToday,
    }),
  },
  {
    label: "Last 90 days",
    range: () => ({
      startDate: defineds.startOf90DaysAgo,
      endDate: defineds.endOfToday,
    }),
  },
  {
    label: "Last month",
    range: () => ({
      startDate: defineds.startOfLastMonth,
      endDate: defineds.endOfLastMonth,
    }),
  },
  {
    label: "Last year",
    range: () => ({
      startDate: defineds.startOfLastYear,
      endDate: defineds.endOfLastYear,
    }),
  },
]);

export const defaultInputRanges = [
  {
    label: "days up to today",
    range(value) {
      // console.log({ value });
      return {
        value: value,
        startDate: addDays(
          defineds.startOfToday,
          (Math.max(Number(value), 1) - 1) * -1
        ),
        endDate: defineds.endOfToday,
      };
    },
    getCurrentValue(range) {
      // console.log({ range });
      if (!isSameDay(range.endDate, defineds.endOfToday)) return "-";
      if (differenceInCalendarDays(defineds.endOfToday, range.endDate) < 0)
        return "-";
      if (!range.value && isSameDay(range.startDate, defineds.endOfToday))
        return "";
      // if (!range.startDate) return "";
      return differenceInCalendarDays(defineds.endOfToday, range.startDate) + 1;
    },
  },
  // {
  //   label: "days starting today",
  //   range(value) {
  //     const today = new Date();
  //     return {
  //       startDate: today,
  //       endDate: addDays(today, Math.max(Number(value), 1) - 1),
  //     };
  //   },
  //   getCurrentValue(range) {
  //     if (!isSameDay(range.startDate, defineds.startOfToday)) return "-";
  //     if (!range.endDate) return "∞";
  //     return differenceInCalendarDays(range.endDate, defineds.startOfToday) + 1;
  //   },
  // },
];
