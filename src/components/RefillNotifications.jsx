import React from 'react';
import { FaPills, FaClock, FaInfoCircle } from 'react-icons/fa';
import './RefillNotifications.scss';

const RefillNotifications = () => {
  const notifications = [
    { medication: 'Aspirin', daysLeft: 5, dueDate: '2024-11-05', pharmacy: 'Pharmacy A' },
    { medication: 'Metformin', daysLeft: 2, dueDate: '2024-11-02', pharmacy: 'Pharmacy B' },
    { medication: 'Ibuprofen', daysLeft: 10, dueDate: '2024-11-10', pharmacy: 'Pharmacy C' },
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
            <div className="refill-info">
              <FaInfoCircle className="info-icon" />
              <span>Due: {note.dueDate}</span>
              <span>Pharmacy: {note.pharmacy}</span>
            </div>
            <button className="refill-button">Refill</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RefillNotifications;