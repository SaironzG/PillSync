import React, { useState } from 'react';
import './TopBar.scss';
import { FaSearch, FaBell, FaTimes, FaUser } from 'react-icons/fa';

const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const suggestions = ['Blood Pressure Medications', 'Pain Relief', 'Antibiotics', 'Vitamins'];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="top-bar">
      <div className="welcome-message">
        <h1>Welcome back, Taylor 👋</h1>
        <span className="date-time">{new Date().toLocaleDateString()}</span>
      </div>
      
      <div className="search-notification">
        <div className="search-bar">
          {/* <FaSearch className="search-icon" /> */}
          <input 
            type="search" 
            placeholder="Search medications..." 
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && <FaTimes className="clear-icon" onClick={clearSearch} />}
          <button className="search-icon"><FaSearch /></button>

          {showSuggestions && (
            <div className="suggestions">
              {suggestions.map((suggestion, index) => (
                <div 
                  key={index} 
                  className="suggestion-item"
                  onClick={() => {
                    setSearchQuery(suggestion);
                    setShowSuggestions(false);
                  }}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="notification-icon">
          <FaBell />
          <span className="notification-count">3</span>
        </div>
        
        <div className="profile-icon" onClick={toggleProfileMenu}>
          <FaUser className="profile-avatar" />
          {showProfileMenu && (
            <div className="profile-menu">
              <div className="menu-item" onClick={() => alert('Navigate to Profile Management')}>Profile Management</div>
              <div className="menu-item" onClick={() => alert('Log out')}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
