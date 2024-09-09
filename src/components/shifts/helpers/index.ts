import {
  MS_IN_DAY,
  NUMBER_OF_SHIFTS_IN_CYCLE,
  SHIFTS,
  START_OF_SHIFTS,
} from "../constants";
import { Shift } from "../types";

export function getShiftForDay(targetDate: Date): Shift {
  const numberOfDaysPassed = Math.floor(
    (targetDate.getTime() - START_OF_SHIFTS.getTime()) / MS_IN_DAY
  );
  const dayInCycle = numberOfDaysPassed % NUMBER_OF_SHIFTS_IN_CYCLE;
  return SHIFTS[dayInCycle];
}
