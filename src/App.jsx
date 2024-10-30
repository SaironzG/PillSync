
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import MedicationList from './components/MedicationList';
import AdherenceChart from './components/AdherenceChart';
import RefillNotifications from './components/RefillNotifications';
import MedicationReminders from './components/MedicationReminders';
import Dashboard from './components/Dashboard'; // Assuming there's a main dashboard overview
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <TopBar />
          <div className="dashboard-content">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/medication-list" component={MedicationList} />
              <Route path="/reminders" component={MedicationReminders} />
              <Route path="/refill-alerts" component={RefillNotifications} />
              <Route path="/reports" component={AdherenceChart} />
              <Route path="/settings" component={() => <div>Settings Page</div>} />
              {/* <Route path="/profile-management" component={ProfileManagement} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
