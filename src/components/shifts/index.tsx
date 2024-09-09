import "react-datepicker/dist/react-datepicker.css";
import { getShiftForDay } from "./helpers";
import { Shift } from "./types";
import * as React from "react";
import DatePicker from "react-datepicker";
import { START_OF_SHIFTS } from "./constants";
import workImage from "../../assets/workman.jpg";
import freeImage from "../../assets/freeman.jpg";

export interface ShiftsProps {}

export function Shifts({}: ShiftsProps) {
  const [selectedDate, setSelectedDate] = React.useState(START_OF_SHIFTS);
  const shift = getShiftForDay(selectedDate);
  const isFree = shift === Shift.Recup;

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
          minDate={START_OF_SHIFTS}
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
        {isFree ? "I'm a free man!" : `Damn, I have to work: {shift}`}
        <img src={isFree ? freeImage : workImage} width={500} />
      </div>
    </div>
  );
}
