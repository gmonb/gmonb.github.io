import {
  CURRENT_START_OF_SHIFTS,
  FINAL_START_OF_SHIFTS,
  MS_IN_DAY,
  NUMBER_OF_SHIFTS_IN_CYCLE,
  SHIFTS,
} from "../constants";
import { Shift } from "../types";

export function getShiftIndex(selectedDate: Date): number {
  const START_OF_SHIFTS =
    FINAL_START_OF_SHIFTS <= selectedDate
      ? FINAL_START_OF_SHIFTS
      : CURRENT_START_OF_SHIFTS;

  const numberOfDaysPassed = Math.floor(
    (selectedDate.getTime() - START_OF_SHIFTS.getTime()) / MS_IN_DAY
  );

  return numberOfDaysPassed % NUMBER_OF_SHIFTS_IN_CYCLE;
}

export function getShiftForDay(shiftIndex: number): Shift {
  return SHIFTS[shiftIndex];
}

export function getTwoWeekShiftsInfo(shiftIndex: number) {
  const dayIndex = (shiftIndex % 7) + 4;
  const showWeekBeforeAndCurrentWeek = dayIndex < 4;
  const firstMondayIndex = getFirstMondayIndex(
    shiftIndex,
    dayIndex,
    showWeekBeforeAndCurrentWeek
  );

  const shifts = [];
  for (let i = 0; i < 14; i++) {
    const dayInCycle = (firstMondayIndex + i) % NUMBER_OF_SHIFTS_IN_CYCLE;
    shifts.push(SHIFTS[dayInCycle]);
  }

  return {
    shifts,
    index: dayIndex + (showWeekBeforeAndCurrentWeek ? 7 : 0),
  };
}

export function getFirstMondayIndex(
  shiftIndex: number,
  dayIndex: number,
  showWeekBeforeAndCurrentWeek: boolean
) {
  let firstMondayIndex =
    shiftIndex - dayIndex - (showWeekBeforeAndCurrentWeek ? 7 : 0);

  if (firstMondayIndex < 0) firstMondayIndex = SHIFTS.length + firstMondayIndex;

  return firstMondayIndex;
}
