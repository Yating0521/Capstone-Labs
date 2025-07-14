import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Events() {
  const events = [
    {
      id: 1,
      title: 'Dog Adoption Day',
      description: 'Help us find loving homes for our dogs!',
      date: 'July 15, 2025',
      location: 'Main Shelter'
    },
    {
      id: 2,
      title: 'Cat Socialization Workshop',
      description: 'Learn how to help shy cats become more adoptable.',
      date: 'July 20, 2025',
      location: 'Cat Room'
    },
    {
      id: 3,
      title: 'Fundraising Gala',
      description: 'Support our shelter at our annual fundraising event.',
      date: 'July 28, 2025',
      location: 'City Hall'
    }
  ];

  // Function to handle event sign-up
  const handleSignUp = (eventId) => {
    alert(`Signed up for event ${eventId}`);
  };

  return (
    <div className="events-page">
      <div className="cards">
        {events.map(event => (
          <div key={event.id} className="card">
            <h2>{event.title}</h2>
            <div className="card-content">
              <p className="event-detail">{event.description}</p>
              <p className="event-info">Date: {event.date}</p>
              <p className="event-info">Location: {event.location}</p>
              <button 
                className="signup-btn" 
                onClick={() => handleSignUp(event.id)}
              >
                Sign Up Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;