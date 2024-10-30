import React from 'react';
import './MedicationList.scss';

const MedicationList = () => {
  const medications = [
    { name: 'Aspirin', dosage: '75mg', schedule: 'Once Daily' },
    { name: 'Metformin', dosage: '500mg', schedule: 'Twice Daily' },
    { name: 'Lisinopril', dosage: '10mg', schedule: 'Once Daily' },
  ];

  return (
    <div className="medication-list">
      <h2>Medication List</h2>
      <ul>
        {medications.map((med, index) => (
          <li key={index} className="medication-item">
            <span>{med.name}</span>
            <span>{med.dosage}</span>
            <span>{med.schedule}</span>
            <button className="edit-button">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
