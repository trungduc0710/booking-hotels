import { useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Calendar = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="inputs">
      <i class="fa fa-calendar"></i>
      <input
        className="input"
        type="text"
        value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
          range[0].endDate,
          "dd/MM/yyyy"
        )}`}
        readOnly
        onClick={() => {
          setIsOpenModal(!isOpenModal);
        }}
      />
      {isOpenModal && (
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={range}
          // months={2}
          // direction="horizontal"
        />
      )}
    </div>
  );
};

export default Calendar;
