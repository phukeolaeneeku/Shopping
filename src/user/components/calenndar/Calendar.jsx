import React, { useState } from 'react';


const Calendar = () => {
    
  // Get current date
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to get the number of days in a month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Function to get the day of the week of the first day of the month
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Generate array of days for the current month
  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const calendarArray = [];

    // Add empty cells for days before the start of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarArray.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarArray.push(i);
    }

    return calendarArray;
  };

  return (
    <div className="calendar">
      <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {generateCalendar().map((day, index) => (
          <div key={index} className={`calendar-day${day === null ? ' empty' : ''}`}>{day}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;