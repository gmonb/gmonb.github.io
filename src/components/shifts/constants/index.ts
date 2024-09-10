import { Shift } from "../types";

export const CURRENT_START_OF_SHIFTS = new Date("2024-09-13");
export const FINAL_START_OF_SHIFTS = new Date("2024-12-27");

export const MS_IN_DAY = 1000 * 60 * 60 * 24;

export const SHIFTS = [
  Shift.Nacht,
  Shift.Nacht,
  Shift.Nacht,
  Shift.Nacht,
  Shift.Nacht,
  Shift.Nacht,
  Shift.Nacht,
  Shift.Recup,
  Shift.Recup,
  Shift.Recup,
  Shift.Laat,
  Shift.Laat,
  Shift.Laat,
  Shift.Laat,
  Shift.Dag,
  Shift.Recup,
  Shift.Recup,
  Shift.Vroeg,
  Shift.Vroeg,
  Shift.Vroeg,
  Shift.Vroeg,
  Shift.Laat,
  Shift.Laat,
  Shift.Laat,
  Shift.Dag,
  Shift.Dag,
  Shift.Dag,
  Shift.Recup,
  Shift.Vroeg,
  Shift.Vroeg,
  Shift.Vroeg,
  Shift.Dag,
  Shift.Recup,
  Shift.Recup,
  Shift.Recup,
  Shift.Dag,
  Shift.Recup,
  Shift.Recup,
  Shift.Dag,
  Shift.Dag,
  Shift.Dag,
  Shift.Dag,
  Shift.Dag,
  Shift.Recup,
  Shift.Recup,
  Shift.Dag,
  Shift.Dag,
  Shift.Dag,
  Shift.Dag,
  Shift.Recup,
  Shift.Recup,
  Shift.Recup,
  Shift.Recup,
  Shift.Dag,
  Shift.Dag,
  Shift.Dag,
];
export const NUMBER_OF_SHIFTS_IN_CYCLE = SHIFTS.length;

export const DAYS_OF_WEEK = ["M", "D", "W", "D", "V", "Z", "Z"];
export const TWO_WEEKS_DAYS = [...DAYS_OF_WEEK, ...DAYS_OF_WEEK];
