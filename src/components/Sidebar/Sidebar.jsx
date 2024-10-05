import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBug, FaBullseye, FaSearch, FaFileAlt, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Updated icons
import './Sidebar.css'; // Ensure your CSS is correctly updated for styling

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">              
                <button className="menu-icon" onClick={toggleSidebar}>
                    {isOpen ? '✖' : '☰'}
                </button>
            </div>

            <div className="menu-items">
                <Link to="/dashboard">
                    <FaHome /> {isOpen && 'Dashboard'}
                </Link>
                <Link to="/targets">
                    <FaBullseye /> {isOpen && 'Targets'}
                </Link>
                <Link to="/vulnerabilities">
                    <FaBug /> {isOpen && 'Vulnerabilities'}
                </Link>
                <Link to="/scans">
                    <FaSearch /> {isOpen && 'Scans'}
                </Link>
                <Link to="/reports">
                    <FaFileAlt /> {isOpen && 'Reports'}
                </Link>
                <Link to="/settings">
                    <FaCog /> {isOpen && 'Settings'}
                </Link>

                <Link to="/">
                    <FaSignOutAlt /> {isOpen && 'Logout'}
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
