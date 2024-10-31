import React, { useState } from 'react';
import './MedicationReminders.scss';
import { FaClock, FaTimes, FaCog } from 'react-icons/fa';

const MedicationReminders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const reminders = [
    { medication: 'Aspirin', time: '8:00 AM', status: 'upcoming' },
    { medication: 'Metformin', time: '8:00 AM, 8:00 PM', status: 'missed' },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className="medication-reminders">
      <h2>Medication Reminders</h2>
      <div className="reminder-settings">
        <button onClick={openSettings}>
          <FaCog /> Settings
        </button>
      </div>

      <h3>Upcoming Reminders</h3>
      <ul>
        {reminders.filter(r => r.status === 'upcoming').map((reminder, index) => (
          <li key={index} className="reminder-item">
            <span className="medication-info">
              <FaClock className="clock-icon" />
              {reminder.medication} - {reminder.time}
            </span>
            <button className="remind-button" onClick={openModal}>Snooze</button>
          </li>
        ))}
      </ul>

      <h3>Missed Reminders</h3>
      <ul>
        {reminders.filter(r => r.status === 'missed').map((reminder, index) => (
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

      {isSettingsOpen && (
        <div className="modal-overlay" onClick={closeSettings}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeSettings}>
              <FaTimes />
            </button>
            <h2>Reminder Settings</h2>
            <form>
              <div className="form-grid">
                <label>
                  Notification Sound
                  <select>
                    <option value="chime">Chime</option>
                    <option value="beep">Beep</option>
                    <option value="ring">Ring</option>
                  </select>
                </label>
                <label>
                  Reminder Frequency
                  <select>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </label>
              </div>
              <button className="submit-button" type="submit">Save Settings</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicationReminders;