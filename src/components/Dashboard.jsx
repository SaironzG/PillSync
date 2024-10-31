import React from 'react';
import { FaPills, FaClock, FaInfoCircle, FaHospital } from 'react-icons/fa';
import './Dashboard.scss';

const Dashboard = () => {
  const notifications = [
    { medication: 'Aspirin', daysLeft: 5, dueDate: '2024-11-05', pharmacy: 'Pharmacy A' },
    { medication: 'Metformin', daysLeft: 2, dueDate: '2024-11-02', pharmacy: 'Pharmacy B' },
    { medication: 'Ibuprofen', daysLeft: 10, dueDate: '2024-11-10', pharmacy: 'Pharmacy C' },
  ];

  return (
    <div className="dashboard">
      <h1>PillSync Dashboard</h1>
      <div className="card-container">
        {notifications.map((note, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <FaPills className="pill-icon" />
              <h3>{note.medication}</h3>
            </div>
            <div className="card-body">
              <div className="days-left">
                <FaClock className="icon" />
                <p>{note.daysLeft} days left</p>
              </div>
              <div className="refill-info">
                <FaInfoCircle className="icon" />
                <p>Due: {note.dueDate}</p>
              </div>
              <div className="pharmacy-info">
                <FaHospital className="icon" />
                <p>{note.pharmacy}</p>
              </div>
            </div>
            <button className="refill-button">Refill</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;