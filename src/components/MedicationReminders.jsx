import React, { useState } from 'react';
import './MedicationReminders.scss';
import { FaClock, FaTimes } from 'react-icons/fa';

const MedicationReminders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reminders = [
    { medication: 'Aspirin', time: '8:00 AM' },
    { medication: 'Metformin', time: '8:00 AM, 8:00 PM' },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="medication-reminders">
      <h2>Medication Reminders</h2>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index} className="reminder-item">
            <span className="medication-info">
              <FaClock className="clock-icon" />
              {reminder.medication} - {reminder.time}
            </span>
            <button className="remind-button" onClick={openModal}>Snooze</button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <FaTimes />
            </button>
            <h2>Snooze Reminder</h2>
            <form>
              <div className="form-grid">
                <label>
                  Snooze Duration
                  <select>
                    <option value="5">5 minutes</option>
                    <option value="10">10 minutes</option>
                    <option value="15">15 minutes</option>
                  </select>
                </label>
                <label>
                  Medication
                  <input type="text" defaultValue="Aspirin" readOnly />
                </label>
              </div>
              <button className="submit-button" type="submit">Confirm Snooze</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicationReminders;
