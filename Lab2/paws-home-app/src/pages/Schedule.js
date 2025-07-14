import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Schedule() {
  const [selectedDate, setSelectedDate] = useState('');
  const [month, setMonth] = useState(6); // July
  const [year, setYear] = useState(2025);
  const [showForm, setShowForm] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const generateCalendar = () => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarDays = [];

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(
            <td key={`empty-${j}`} className="unavailable"></td>
          );
        } else if (date > daysInMonth) {
          week.push(
            <td key={`empty-end-${j}`} className="unavailable"></td>
          );
        } else {
          const currentDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
          const isSelected = selectedDate === currentDate;
          week.push(
            <td
              key={`day-${date}`}
              className={`available ${isSelected ? 'selected' : ''}`}
              onClick={() => handleDateSelect(currentDate, `day-${date}`)}
            >
              {date}
            </td>
          );
          date++;
        }
      }
      calendarDays.push(<tr key={`week-${i}`}>{week}</tr>);
    }

    return calendarDays;
  };

  const handleDateSelect = (date, cellId) => {
    if (selectedCell) {
      const prevCell = document.querySelector(`.selected`);
      if (prevCell) prevCell.classList.remove('selected');
    }

    const currentCell = document.getElementById(cellId);
    if (currentCell) {
      currentCell.classList.add('selected');
      setSelectedCell(currentCell);
    }

    setSelectedDate(date);
    setShowForm(true);
  };

  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value));
    setShowForm(false);
  };

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Shift booked for ${selectedDate}`);
    setShowForm(false);
  };

  return (
    <div className="schedule-page">
      <div className="calendar">
        <div className="date-selectors">
          <label htmlFor="month-select">Month:</label>
          <select
            id="month-select"
            value={month}
            onChange={handleMonthChange}
          >
            {monthNames.map((name, index) => (
              <option key={name} value={index}>
                {name}
              </option>
            ))}
          </select>

          <label htmlFor="year-select">Year:</label>
          <select
            id="year-select"
            value={year}
            onChange={handleYearChange}
          >
            {[2024, 2025, 2026, 2027].map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <h2 className="month-name">{monthNames[month]} {year}</h2>

        {/* Calendar Form */}
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            {generateCalendar()}
          </tbody>
        </table>

        {/* Legend */}
        <div className="legend">
          <span><span className="box available"></span>Available</span>
          <span><span className="box selected"></span>Selected</span>
          <span><span className="box unavailable"></span>Unavailable</span>
        </div>

        {/* Submit */}
        <form className={`shift-form ${showForm ? 'active' : ''}`} onSubmit={handleSubmit}>
          <h3>Book Your Shift</h3>
          <input type="hidden" id="shift-date" value={selectedDate} />
          <label htmlFor="shift-time">Time:</label>
          <select id="shift-time" required>
            <option value="">Select...</option>
            <option value="8am-10am">8am - 10am</option>
            <option value="10am-12pm">10am - 12pm</option>
            <option value="1pm-3pm">1pm - 3pm</option>
            <option value="3pm-5pm">3pm - 5pm</option>
          </select>
          <button className="button" type="submit">Book Shift</button>
        </form>
      </div>
    </div>
  );
}

export default Schedule;