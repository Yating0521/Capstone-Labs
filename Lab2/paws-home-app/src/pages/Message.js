import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Message() {
  const messages = [
    { 
      id: 0,
      title: 'Upcoming Event Recruitment', 
      sender: 'Rachel', 
      date: 'July 5, 2025', 
      content: 'Join us for our next event! We need volunteers for setup and greeting.' 
    },
    { 
      id: 1,
      title: 'Welcome to Dog Town Level 1!', 
      sender: 'Volunteer Admin Team', 
      date: 'July 2, 2025', 
      content: 'Congratulations on reaching Dog Town Level 1! Thank you for your dedication.' 
    }
  ];

  // State to manage the active message and index
  const [activeMessage, setActiveMessage] = useState(messages[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to show a message based on index
  const showMessage = (index) => {
    setActiveMessage(messages[index]);
    setActiveIndex(index);
  };

  // Show the first message on initial render
  useEffect(() => {
    showMessage(0);
  }, []);

  return (
    <div className="message-page">
      <div className="msg-container">
        <div className="msg-list">
          <ul>
            {messages.map((message, index) => (
              <li
                key={message.id}
                className={activeIndex === index ? 'active' : ''}
                onClick={() => showMessage(index)}
              >
                {message.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="msg-detail">
            <>
              <h2>{activeMessage.title}</h2>
              <p><strong>From:</strong> {activeMessage.sender}</p>
              <p><strong>Date:</strong> {activeMessage.date}</p>
              <p>{activeMessage.content}</p>
            </>
        </div>
      </div>
    </div>
  );
}

export default Message;