import React from 'react';
import { FaPills, FaClock } from 'react-icons/fa';
import './RefillNotifications.scss';

const RefillNotifications = () => {
  const notifications = [
    { medication: 'Aspirin', daysLeft: 5 },
    { medication: 'Metformin', daysLeft: 2 },
    { medication: 'Ibuprofen', daysLeft: 10 },
  ];

  return (
    <div className="refill-notifications">
      <h2>Refill Notifications</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index} className="notification-item">
            <div className="medication-info">
              <FaPills className="pill-icon" />
              <span>{note.medication}</span>
            </div>
            <div className="days-left">
              <FaClock className="clock-icon" />
              <span>{note.daysLeft} days left</span>
            </div>
            <button className="refill-button">Refill</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RefillNotifications;
