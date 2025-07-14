import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function LogHours() {
  const [formData, setFormData] = useState({
    date: '',
    hours: '',
    assignment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your hours have been logged!\nDate: ${formData.date}\nHours Served: ${formData.hours}hours\nAssignment: ${formData.assignment}`);
    
    // Reset form after submission
    setFormData({
      date: '',
      hours: '',
      assignment: ''
    });
  };

  return (
    <div className="log-hours-page">
      <form className="log-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date of Service:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="hours">Hours Served:</label>
        <input
          type="number"
          id="hours"
          name="hours"
          min="0.5"
          step="0.5"
          value={formData.hours}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="assignment">Assignment:</label>
        <select
          id="assignment"
          name="assignment"
          value={formData.assignment}
          onChange={handleInputChange}
          required
        >
          <option value="">Select...</option>
          <option value="dog-care">Dog Care</option>
          <option value="cat-care">Cat Care</option>
          <option value="events">Events</option>
          <option value="admin">Administration</option>
        </select>

        <button className="button" type="submit">Submit Hours</button>
      </form>
    </div>
  );
}

export default LogHours;