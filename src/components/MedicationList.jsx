import React, { useState } from 'react';
import './MedicationList.scss';
import { TextField, Button, IconButton, MenuItem, Select, InputLabel, FormControl, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const MedicationList = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(false);
  const [newMed, setNewMed] = useState({ name: '', dosage: '', schedule: 'Once Daily' });

  const [medications, setMedications] = useState([
    { name: 'Aspirin', dosage: '75mg', schedule: 'Once Daily' },
    { name: 'Metformin', dosage: '500mg', schedule: 'Twice Daily' },
    { name: 'Lisinopril', dosage: '10mg', schedule: 'Once Daily' },
  ]);

  const handleAddMedication = () => {
    setMedications([...medications, newMed]);
    setNewMed({ name: '', dosage: '', schedule: 'Once Daily' });
    setOpen(false);
  };

  const filteredMedications = medications.filter(med => 
    med.name.toLowerCase().includes(search.toLowerCase()) && 
    (filter === 'All' || med.schedule === filter)
  );

  return (
    <div className="medication-list">
      <h2>Medication List</h2>
      <div className="controls">
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <FormControl variant="outlined" size="small" style={{ marginRight: '10px' }}>
          <InputLabel>Schedule</InputLabel>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            label="Schedule"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Once Daily">Once Daily</MenuItem>
            <MenuItem value="Twice Daily">Twice Daily</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add Medication
        </Button>
      </div>
      <ul>
        {filteredMedications.map((med, index) => (
          <li key={index} className="medication-item">
            <span>{med.name}</span>
            <span>{med.dosage}</span>
            <span>{med.schedule}</span>
            <button className="edit-button">Edit</button>
          </li>
        ))}
      </ul>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Medication</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={newMed.name}
            onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
          />
          <TextField
            label="Dosage"
            fullWidth
            margin="dense"
            value={newMed.dosage}
            onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Schedule</InputLabel>
            <Select
              value={newMed.schedule}
              onChange={(e) => setNewMed({ ...newMed, schedule: e.target.value })}
            >
              <MenuItem value="Once Daily">Once Daily</MenuItem>
              <MenuItem value="Twice Daily">Twice Daily</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddMedication} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MedicationList;