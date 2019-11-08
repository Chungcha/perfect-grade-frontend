import React, {useState} from 'react'
import DatePicker from 'react-datepicker'

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      inline
    />
  );
};

export default Calendar