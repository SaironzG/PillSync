// src/components/Sidebar.js
import React from 'react';
import './Sidebar.scss';
import logo from "../assets/img/pillsynclogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faPills, faBell, faExclamationTriangle, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink exact to="/" className='logo'>
        <img src={logo} alt="Logo" />
      </NavLink>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/medication-list" activeClassName="active">
            <FontAwesomeIcon icon={faPills} /> Medication List
          </NavLink>
        </li>
        <li>
          <NavLink to="/reminders" activeClassName="active">
            <FontAwesomeIcon icon={faBell} /> Reminders
          </NavLink>
        </li>
        <li>
          <NavLink to="/refill-alerts" activeClassName="active">
            <FontAwesomeIcon icon={faExclamationTriangle} /> Refill Alerts
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" activeClassName="active">
            <FontAwesomeIcon icon={faChartBar} /> Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active">
            <FontAwesomeIcon icon={faCog} /> Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
