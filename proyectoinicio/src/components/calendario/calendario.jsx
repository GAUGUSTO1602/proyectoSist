import React from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react'
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";


function Calendario() {



    const [startDate, setStartDate] = useState(new Date());


    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];



    return (
        <ReactDatePicker
        renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
        }) => (
            <div
            >
            <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
            >
                {years.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
                ))}
            </select>

            <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
                }
            >
                {months.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
                ))}
            </select>

            </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        />
  );
};

export default Calendario