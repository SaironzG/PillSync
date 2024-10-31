import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import MedicationList from './components/MedicationList';
import AdherenceChart from './components/AdherenceChart';
import RefillNotifications from './components/RefillNotifications';
import MedicationReminders from './components/MedicationReminders';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Profile from './components/Profile'; // Assuming you have a Profile component
import './App.css';

const App = () => {
    // State to track if the user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle login (this could be expanded with actual login logic)
    const handleLogin = () => {
        setIsLoggedIn(true); // Set login status to true upon successful login
    };

    return (
        <Router>
            <div className="app">
                {isLoggedIn ? (
                    <>
                        <Sidebar />
                        <div className="main-content">
                            <TopBar />
                            <div className="dashboard-content">
                                <Routes>
                                    <Route exact path="/" element={<Dashboard />} />
                                    <Route path="/medication-list" element={<MedicationList />} />
                                    <Route path="/reminders" element={<MedicationReminders />} />
                                    <Route path="/refill-alerts" element={<RefillNotifications />} />
                                    <Route path="/reports" element={<AdherenceChart />} />
                                    <Route path="/settings" element={() => <div>Settings Page</div>} />
                                    <Route path="/profile" element={<Profile />} /> {/* Profile Route */}
                                    <Route path="*" element={<Navigate to="/" />} /> {/* Redirect invalid paths */}
                                </Routes>
                            </div>
                        </div>
                    </>
                ) : (
                    <Login onLogin={handleLogin} /> // Pass the login function as a prop to the Login component
                )}
            </div>
        </Router>
    );
};

export default App;
