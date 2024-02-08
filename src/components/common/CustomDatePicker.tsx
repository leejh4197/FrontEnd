import React from "react";
import DatePicker from "react-datepicker";

const CustomDatePicker = () => {
  const test = () => {};

  return (
    <div>
      <DatePicker onChange={test} />
    </div>
  );
};

export default CustomDatePicker;
