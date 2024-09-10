import "react-datepicker/dist/react-datepicker.css";
import { getShiftForDay, getShiftIndex, getTwoWeekShiftsInfo } from "./helpers";
import { Shift } from "./types";
import * as React from "react";
import DatePicker from "react-datepicker";
import { CURRENT_START_OF_SHIFTS, TWO_WEEKS_DAYS } from "./constants";
import workImage from "../../assets/workman.jpg";
import freeImage from "../../assets/freeman.jpg";

export interface ShiftsProps {}

export function Shifts({}: ShiftsProps) {
  const [selectedDate, setSelectedDate] = React.useState(
    CURRENT_START_OF_SHIFTS
  );

  const shiftIndex = getShiftIndex(selectedDate);
  const shift = getShiftForDay(shiftIndex);
  const isFree = shift === Shift.Recup;
  const twoWeeksShiftsInfo = getTwoWeekShiftsInfo(shiftIndex);

  function getBackgroundColor(index: number) {
    if (index !== twoWeeksShiftsInfo.index) return;
    return index < 7 ? "#4682B4" : "#DAA520";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        gap: 16,
        padding: 50,
      }}
    >
      <div style={{ maxHeight: 50 }}>
        <DatePicker
          calendarStartDay={1}
          minDate={CURRENT_START_OF_SHIFTS}
          selected={selectedDate}
          dateFormat="dd-MM-yyyy"
          onChange={(date) => (date ? setSelectedDate(date) : undefined)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        {isFree ? "I'm a free man!" : `Damn, I have to work`}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "80%",
            maxHeight: 300,
          }}
        >
          <img src={isFree ? freeImage : workImage} height="100%" />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {TWO_WEEKS_DAYS.map((day, index) => (
              <th
                key={index}
                style={{
                  border: `2px solid ${index < 7 ? "#4682B4" : "#DAA520"}`,
                  backgroundColor: getBackgroundColor(index),
                  padding: 5,
                  textAlign: "center",
                  minWidth: 14,
                }}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {TWO_WEEKS_DAYS.map((_, index) => (
              <td
                key={index}
                style={{
                  border: `2px solid ${index < 7 ? "#4682B4" : "#DAA520"}`,
                  backgroundColor: getBackgroundColor(index),
                  padding: 5,
                  textAlign: "center",
                }}
              >
                {twoWeeksShiftsInfo.shifts[index][0]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
